const axios = require("axios");
var {
  User_account,
  KrungthaiBusinessToken,
  ApiUsers,
  Logreq,
  Otp_forword,
} = require("../../models");
const { v4: uuidv4 } = require("uuid"); // Import UUID library to generate correlation IDs

module.exports = class KrungthaiAPI {
  constructor() {
    // Base URL for most authenticated API calls after login/token acquisition
    this.baseApiURL =
      "https://business.krungthai.com/ktb/rest/biznext-channel/v1";
    // Base URL for pre-login/authentication steps
    this.authBaseURL =
      "https://business.krungthai.com/ktb/rest/biznext-channel/v1"; // May be the same or different

    // Default headers for authenticated calls (will include Authorization after login)
    this.defaultHeaders = {
      Accept: "application/json, text/plain, */*",
      "Accept-Language": "th-TH",
      Connection: "keep-alive",
      "Content-Type": "application/json",
      Origin: "https://business.krungthai.com",
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "same-origin",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36", // Consider making this configurable or dynamic
      "X-Channel-ID": "WB",
      "X-Client-Version": "4.3.96", // This might need updates
      // 'X-Correlation-ID': dynamically generated per request
      "X-Device-Model":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
      "X-Platform": "web/1.0",
      "sec-ch-ua":
        '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
    };

    // Axios instance for authenticated API calls
    this.axiosInstance = axios.create({
      baseURL: this.baseApiURL,
      headers: { ...this.defaultHeaders }, // Start with default headers
      // withCredentials: true, // If cookies are needed and managed server-side
    });

    // Store the access token
    this.accessToken = null;

    // Interceptor to add Authorization header dynamically
    this.axiosInstance.interceptors.request.use(
      (config) => {
        if (this.accessToken) {
          config.headers["Authorization"] = `Bearer ${this.accessToken}`;
        }
        // Generate a new correlation ID for each request
        config.headers["X-Correlation-ID"] = `${uuidv4()}-crid`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  /**
   * Generates a unique correlation ID.
   * @returns {string} A unique correlation ID string.
   */
  _generateCorrelationId() {
    return `${uuidv4()}-crid`;
  }

  /**
   * Obtains an initial client credentials grant (access token).
   * This token is often needed before user-specific login steps.
   * @returns {Promise<any>} - A promise that resolves with the grant response data (containing the access token) or rejects with an error.
   */
  async getClientCredentialsToken() {
    const url = `${this.authBaseURL}/prelogin/grant?grant_type=client_credentials`;
    // IMPORTANT: The Basic Authorization header contains client credentials.
    // 'YWRtaW46cGFzc3dvcmQ=' is base64 for 'admin:password'.
    // This should NOT be hardcoded. Store securely (e.g., environment variables).
    const basicAuth =
      process.env.KTB_BUSINESS_BASIC_AUTH || "YWRtaW46cGFzc3dvcmQ="; // Example using env var

    const headers = {
      Accept: "application/json, text/plain, */*",
      "Accept-Language": "th-TH",
      Authorization: `Basic ${basicAuth}`, // Use the securely stored credential
      Connection: "keep-alive",
      "Content-Type": "application/json", // Content-Type might not be needed for an empty body GET/POST, check API spec
      Origin: "https://business.krungthai.com",
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "same-origin",
      "User-Agent": this.defaultHeaders["User-Agent"],
      "X-Channel-ID": this.defaultHeaders["X-Channel-ID"],
      "X-Client-Version": this.defaultHeaders["X-Client-Version"],
      "X-Correlation-ID": this._generateCorrelationId(), // Generate dynamically
      "X-Device-Model": this.defaultHeaders["X-Device-Model"],
      "X-Platform": this.defaultHeaders["X-Platform"],
      "sec-ch-ua": this.defaultHeaders["sec-ch-ua"],
      "sec-ch-ua-mobile": this.defaultHeaders["sec-ch-ua-mobile"],
      "sec-ch-ua-platform": this.defaultHeaders["sec-ch-ua-platform"],
      // No 'Cookie' header needed for client credentials grant usually
    };

    try {
      // Assuming an empty body is required for this POST request based on the original code
      const response = await axios.post(url, {}, { headers: headers });

      // Store the access token if successful
      if (response.data && response.data.access_token) {
        this.accessToken = response.data.access_token;
        // Optionally set it for the default instance if subsequent calls use it
        // this.axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${this.accessToken}`;
        console.log("Client credentials token obtained successfully.");
      } else {
        console.warn(
          "Client credentials response did not contain an access_token."
        );
      }

      return response.data; // Return the full response data
    } catch (error) {
      console.error(
        "Error in getClientCredentialsToken:",
        error.response ? error.response.data : error.message
      );
      // Log detailed error if available
      if (error.response) {
        console.error("Status:", error.response.status);
        console.error("Headers:", error.response.headers);
      }
      throw error; // Re-throw the error to be handled by the caller
    }
  }

  /**
   * Generates a password key (likely part of the E2EE process).
   * Requires a valid client credentials token (obtained via getClientCredentialsToken).
   * @param {string} loginModuleId - The login module ID (e.g., 'BIZ_NEXT_WEB').
   * @returns {Promise<any>} - A promise that resolves with the response data or rejects with an error.
   */
  async generatePasswordKey(loginModuleId = "BIZ_NEXT_WEB", access_tokens) {
    // Provide a likely default
    if (!this.accessToken) {
      console.error(
        "Cannot generate password key without a client credentials token. Call getClientCredentialsToken first."
      );
      throw new Error("Authentication token not available.");
    }
    const data = {
      loginModuleId: loginModuleId,
    };

    try {
      // Use the axiosInstance which includes the Bearer token via interceptor
      const response = await this.axiosInstance.post(
        "/auth/password/key/generation",
        data
      );
      console.log("Password key generated successfully.");
      return response.data;
    } catch (error) {
      console.error(
        "Error in generatePasswordKey:",
        error.response ? error.response.data : error.message
      );
      // Log detailed error if available
      if (error.response) {
        console.error("Status:", error.response.status);
        console.error("Headers:", error.response.headers);
      }
      throw error; // Re-throw the error to be handled by the caller
    }
  }

  /**
   * Generates a password key (likely part of the E2EE process).
   * Requires a valid client credentials token (obtained via getClientCredentialsToken).
   * @param {string} loginModuleId - The login module ID (e.g., 'BIZ_NEXT_WEB').
   * @returns {Promise<any>} - A promise that resolves with the response data or rejects with an error.
   */
  async verification_password(datapost) {
    // Provide a likely default
    if (!this.accessToken) {
      console.error(
        "Cannot generate password key without a client credentials token. Call getClientCredentialsToken first."
      );
      throw new Error("Authentication token not available.");
    }
    const data = datapost;

    try {
      // Use the axiosInstance which includes the Bearer token via interceptor
      const response = await this.axiosInstance.post(
        "/auth/password/verification",
        data
      );
      console.log("Password key generated successfully.");

        let dataretrun = {
          "success":true,
          "data":response.data,
        }



      return dataretrun;
    } catch (error) {



      console.error(
        "Error in generatePasswordKey:",
        error.response ? error.response.data : error.message
      );
      // Log detailed error if available
      if (error.response) {
        console.error("Status:", error.response.status);
        console.error("Headers:", error.response.headers);
      }

      let dataretrun = {
          "success":false,
          "data":error.response.data,
        }

      return dataretrun;

     //throw error; // Re-throw the error to be handled by the caller
    }
  }

  async verification_uertranfer(datapost, body) {
    // Provide a likely default
    try {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `https://business.krungthai.com/ktb/rest/biznext-channel/v1/account/payee-funds/external?bankCode=${body.bankcode}&id=${body.accnumber}`,
        headers: {
          Accept: "application/json, text/plain, */*",
          "Accept-Language": "th-TH",
          Authorization: `Bearer ${datapost.accessToken}`,
          Connection: "keep-alive",
          "Content-Type": "application/json", // Content-Type might not be needed for an empty body GET/POST, check API spec
          Origin: "https://business.krungthai.com",
          "Sec-Fetch-Dest": "empty",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Site": "same-origin",
          "User-Agent": this.defaultHeaders["User-Agent"],
          "X-Channel-ID": this.defaultHeaders["X-Channel-ID"],
          "X-Client-Version": this.defaultHeaders["X-Client-Version"],
          "X-Correlation-ID": this._generateCorrelationId(), // Generate dynamically
          "X-Device-Model": this.defaultHeaders["X-Device-Model"],
          "X-Platform": this.defaultHeaders["X-Platform"],
          "sec-ch-ua": this.defaultHeaders["sec-ch-ua"],
          "sec-ch-ua-mobile": this.defaultHeaders["sec-ch-ua-mobile"],
          "sec-ch-ua-platform": this.defaultHeaders["sec-ch-ua-platform"],
        },
      };

      const response = await axios.request(config);

      return {
        data: response.data,
        code: 200,
        message: "success",
      };
    } catch (error) {
      return {
        data: error.response.data,
        code: error.response.data.code,
        message: error.response.data.message,
      };
    }
  }




  async transaction_historyby(datapost, body) {
    // Provide a likely default
    try {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
      //  url: `https://business.krungthai.com/ktb/rest/biznext-channel/v1/account/payee-funds/external?bankCode=${body.bankcode}&id=${body.accnumber}`,
        url: `https://business.krungthai.com/ktb/rest/biznext-channel/v1/transaction-history/accounts/${body.accounts}?accountType=CASA&transactionType=${body.transactionType}&minAmount=1&maxAmount=1000000&startDate=${body.startDate}&endDate=${body.endDate}&pageSize=${body.pageSize}`,
        headers: {
          Accept: "application/json, text/plain, */*",
          "Accept-Language": "th-TH",
          Authorization: `Bearer ${datapost.accessToken}`,
          Connection: "keep-alive",
          "Content-Type": "application/json", // Content-Type might not be needed for an empty body GET/POST, check API spec
          Origin: "https://business.krungthai.com",
          "Sec-Fetch-Dest": "empty",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Site": "same-origin",
          "User-Agent": this.defaultHeaders["User-Agent"],
          "X-Channel-ID": this.defaultHeaders["X-Channel-ID"],
          "X-Client-Version": this.defaultHeaders["X-Client-Version"],
          "X-Correlation-ID": this._generateCorrelationId(), // Generate dynamically
          "X-Device-Model": this.defaultHeaders["X-Device-Model"],
          "X-Platform": this.defaultHeaders["X-Platform"],
          "sec-ch-ua": this.defaultHeaders["sec-ch-ua"],
          "sec-ch-ua-mobile": this.defaultHeaders["sec-ch-ua-mobile"],
          "sec-ch-ua-platform": this.defaultHeaders["sec-ch-ua-platform"],
        },
      };



      const response = await axios.request(config);

      return {
        data: response.data,
        code: 200,
        message: "success",
      };
    } catch (error) {
      return {
        data: error.response.data,
        code: error.response.data.code,
        message: error.response.data.message,
      };
    }
  }















  async getdatabank(datapost) {
    // Provide a likely default
    try {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "https://business.krungthai.com/ktb/rest/biznext-channel/v1/lookup/banks",
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
          Accept: "application/json, text/plain, */*",
          "Accept-Encoding": "gzip, deflate, br, zstd",
          "X-Platform": "web/1.0",
          Authorization: `Bearer ${datapost.accessToken}`,
          "sec-ch-ua-platform": '"Windows"',
          "X-Correlation-ID": "bbf08882-6f21-4f2c-8009-135970e01b34-crid",
          "Accept-Language": "th-TH",
          "sec-ch-ua":
            '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          "X-Channel-ID": "WB",
          "sec-ch-ua-mobile": "?0",
          "X-Device-Model":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
          "X-Client-Version": "4.3.96",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
        },
      };

      const response = await axios.request(config);

      return {
        data: response.data,
        code: 200,
        message: "success",
      };
    } catch (error) {
      return {
        data: error.response.data,
        code: error.response.data.code,
        message: error.response.data.message,
      };
    }
  }
  /**
   * Verifies the password using E2EE details.
   * Requires a valid client credentials token.
   * @param {string} companyId - The company ID.
   * @param {string} userId - The user ID.
   * @param {string} encryptedPassword - The password encrypted using the key obtained from generatePasswordKey.
   * @param {string} e2eeSid - The E2EE session ID obtained from generatePasswordKey response.
   * @returns {Promise<any>} - A promise that resolves with the verification response data or rejects with an error.
   */
  async verifyPassword(companyId, userId, encryptedPassword, e2eeSid) {
    if (!this.accessToken) {
      console.error(
        "Cannot verify password without a client credentials token. Call getClientCredentialsToken first."
      );
      throw new Error("Authentication token not available.");
    }
    const data = {
      companyId: companyId,
      userId: userId,
      encryptedPassword: encryptedPassword,
      e2eeSid: e2eeSid,
    };

    try {
      // Use the axiosInstance which includes the Bearer token via interceptor
      const response = await this.axiosInstance.post(
        "/auth/password/verification",
        data
      );
      console.log("Password verification successful (intermediate step).");
      // NOTE: This response might contain further tokens or steps needed for full login.
      // For example, it might trigger OTP. Handle the response accordingly.
      return response.data;
    } catch (error) {
      console.error(
        "Error in verifyPassword:",
        error.response ? error.response.data : error.message
      );
      // Log detailed error if available
      if (error.response) {
        console.error("Status:", error.response.status);
        console.error("Headers:", error.response.headers);
      }
      throw error;
    }
  }
  async getdata_get_profile(datapost) {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://business.krungthai.com/ktb/rest/biznext-channel/v1/profile/user/profile",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
        Accept: "application/json, text/plain, */*",
        "Accept-Encoding": "gzip, deflate, br, zstd",
        "X-Platform": "web/1.0",
        Authorization: `Bearer ${datapost}`,
        "sec-ch-ua-platform": '"Windows"',
        "X-Correlation-ID": this._generateCorrelationId(),
        "Accept-Language": "th-TH",
        "sec-ch-ua":
          '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        "X-Channel-ID": "WB",
        "sec-ch-ua-mobile": "?0",
        "X-Device-Model":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
        "X-Client-Version": "4.3.96",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
      },
    };

    const response = await axios.request(config);
    return response.data;
  }
  // --- Placeholder for OTP generation/verification if needed ---
  async generateOtp(datapost) {
    // Implementation depends on API specifics after password verification
    console.warn("generateOtp function not implemented.");
    // Example:
    // const data = { /* ... */ };
    const response = await this.axiosInstance.post(
      "/auth/otp/generation",
      datapost
    );
    return response.data;
  }

  async chack_info_acc(datapost) {
    // Implementation depends on API specifics after password verification
    const axios = require("axios");

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://business.krungthai.com/ktb/rest/biznext-channel/v1/account/payee-funds?pageSize=15&pageNumber=0&service=TRANSFER&subServices=TRANSFER_3_PARTY&subServices=TRANSFER_BAHTNET&subServices=TRANSFER_DIRECT_CREDIT&subServices=TRANSFER_OTHER_BANK&subServices=TRANSFER_OWN_ACCOUNT&subServices=TRANSFER_PROMPTPAY_NEXT_DAY&subServices=TRANSFER_PROMPTPAY_ONLINE&subServices=TRANSFER_SMART_NEXT_DAY&subServices=TRANSFER_SMART_SAME_DAY",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
        Accept: "application/json, text/plain, */*",
        "Accept-Encoding": "gzip, deflate, br, zstd",
        "X-Platform": "web/1.0",
        Authorization: `Bearer ${datapost.accessToken}`,
        "sec-ch-ua-platform": '"macOS"',
        "X-Correlation-ID": "f042678d-718c-4824-af2c-efa4543f5a05-crid",
        "Accept-Language": "th-TH",
        "sec-ch-ua":
          '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        "X-Channel-ID": "WB",
        "sec-ch-ua-mobile": "?0",
        "X-Device-Model":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
        "X-Client-Version": "4.3.96",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        Cookie:
          "OptanonConsent=isGpcEnabled=0&datestamp=Tue+Apr+29+2025+18%3A00%3A43+GMT%2B0700+(%E0%B9%80%E0%B8%A7%E0%B8%A5%E0%B8%B2%E0%B8%AD%E0%B8%B4%E0%B8%99%E0%B9%82%E0%B8%94%E0%B8%88%E0%B8%B5%E0%B8%99)&version=202310.2.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=f2074d47-b657-4a1a-9b71-992da8d16bc6&interactionCount=1&landingPath=https%3A%2F%2Fkrungthai.com%2F",
      },
    };

    // Example:
    // const data = { /* ... */ };
    const response = await axios.request(config);

    //  console.log(response)
    return response.data;
  }
  async client_credentials(datapost) {
    // Implementation depends on API specifics after password verification
    console.warn("generateOtp function not implemented.");
    // Example:
    // const data = { /* ... */ };
    const response = await this.axiosInstance.post(
      "/password/grant?grant_type=client_credentials",
      datapost
    );
    return response.data;
  }
  async create_tranferoder(datapost, data_item) {
    const axios = require("axios");
    let data = JSON.stringify(data_item);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://business.krungthai.com/ktb/rest/biznext-channel/v1/transfer/transfer-order",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
        Accept: "application/json, text/plain, */*",
        "Accept-Encoding": "gzip, deflate, br, zstd",
        "Content-Type": "application/json",
        "X-Platform": "web/1.0",
        Authorization: `Bearer ${datapost.accessToken}`,
        "sec-ch-ua-platform": '"macOS"',
        "X-Correlation-ID": "c42145bd-dfcd-4659-99d1-48429744f593-crid",
        "Accept-Language": "th-TH",
        "sec-ch-ua":
          '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        "X-Channel-ID": "WB",
        "sec-ch-ua-mobile": "?0",
        "X-Device-Model":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
        "X-Client-Version": "4.3.96",
        Origin: "https://business.krungthai.com",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        Cookie:
          "OptanonConsent=isGpcEnabled=0&datestamp=Tue+Apr+29+2025+18%3A00%3A43+GMT%2B0700+(%E0%B9%80%E0%B8%A7%E0%B8%A5%E0%B8%B2%E0%B8%AD%E0%B8%B4%E0%B8%99%E0%B9%82%E0%B8%94%E0%B8%88%E0%B8%B5%E0%B8%99)&version=202310.2.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=f2074d47-b657-4a1a-9b71-992da8d16bc6&interactionCount=1&landingPath=https%3A%2F%2Fkrungthai.com%2F",
      },
      data: data,
    };

    let response = await axios.request(config);

    return response.data;
  }

  async getdata_odertranfer(datapost, idOrders) {
    // Implementation depends on API specifics after password verification

    const axios = require("axios");

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `https://business.krungthai.com/ktb/rest/biznext-channel/v1/transfer/transfer-order/${idOrders}/item`,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
        Accept: "application/json, text/plain, */*",
        "Accept-Encoding": "gzip, deflate, br, zstd",
        "X-Platform": "web/1.0",
        Authorization: `Bearer ${datapost.accessToken}`,
        "sec-ch-ua-platform": '"macOS"',
        "X-Correlation-ID": "f0079264-9781-46f7-aa5b-b124155d1e9d-crid",
        "Accept-Language": "th-TH",
        "sec-ch-ua":
          '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        "X-Channel-ID": "WB",
        "sec-ch-ua-mobile": "?0",
        "X-Device-Model":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
        "X-Client-Version": "4.3.96",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        Cookie:
          "OptanonConsent=isGpcEnabled=0&datestamp=Tue+Apr+29+2025+18%3A00%3A43+GMT%2B0700+(%E0%B9%80%E0%B8%A7%E0%B8%A5%E0%B8%B2%E0%B8%AD%E0%B8%B4%E0%B8%99%E0%B9%82%E0%B8%94%E0%B8%88%E0%B8%B5%E0%B8%99)&version=202310.2.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=f2074d47-b657-4a1a-9b71-992da8d16bc6&interactionCount=1&landingPath=https%3A%2F%2Fkrungthai.com%2F",
      },
    };

    let response = await axios.request(config);

    return response.data;
  }

  async generateservice(datapost, dstspodt, tadtaget) {
    // Implementation depends on API specifics after password verification
    const axios = require("axios");
    let data = JSON.stringify(dstspodt);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `https://business.krungthai.com/ktb/rest/biznext-channel/v1/transfer/transfer-order/${tadtaget.transferOrderId}/item/${tadtaget.transferItemId}/service`,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
        Accept: "application/json, text/plain, */*",
        "Accept-Encoding": "gzip, deflate, br, zstd",
        "Content-Type": "application/json",
        "X-Platform": "web/1.0",
        Authorization: `Bearer ${datapost.accessToken}`,
        "sec-ch-ua-platform": '"macOS"',
        "X-Correlation-ID": "dc04aef0-204f-46ff-9eb7-a8aa457dccde-crid",
        "Accept-Language": "th-TH",
        "sec-ch-ua":
          '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        "X-Channel-ID": "WB",
        "sec-ch-ua-mobile": "?0",
        "X-Device-Model":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
        "X-Client-Version": "4.3.96",
        Origin: "https://business.krungthai.com",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        Cookie:
          "OptanonConsent=isGpcEnabled=0&datestamp=Tue+Apr+29+2025+18%3A00%3A43+GMT%2B0700+(%E0%B9%80%E0%B8%A7%E0%B8%A5%E0%B8%B2%E0%B8%AD%E0%B8%B4%E0%B8%99%E0%B9%82%E0%B8%94%E0%B8%88%E0%B8%B5%E0%B8%99)&version=202310.2.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=f2074d47-b657-4a1a-9b71-992da8d16bc6&interactionCount=1&landingPath=https%3A%2F%2Fkrungthai.com%2F",
      },
      data: data,
    };

    let response = await axios.request(config);

    return response.data;
  }

  async itemtranfer(datapost, dstspodt, tadtaget) {
    const axios = require("axios");
    let data = JSON.stringify(dstspodt);

    let config = {
      method: "put",
      maxBodyLength: Infinity,
      url: `https://business.krungthai.com/ktb/rest/biznext-channel/v1/transfer/transfer-order/${tadtaget.transferOrderId}/item/${tadtaget.transferItemId}`,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
        Accept: "application/json, text/plain, */*",
        "Accept-Encoding": "gzip, deflate, br, zstd",
        "Content-Type": "application/json",
        "X-Platform": "web/1.0",
        Authorization: `Bearer ${datapost.accessToken}`,
        "sec-ch-ua-platform": '"macOS"',
        "X-Correlation-ID": "fb1bebb2-7696-430c-8b4d-d5a942258175-crid",
        "Accept-Language": "th-TH",
        "sec-ch-ua":
          '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        "X-Channel-ID": "WB",
        "sec-ch-ua-mobile": "?0",
        "X-Device-Model":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
        "X-Client-Version": "4.3.96",
        Origin: "https://business.krungthai.com",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        Cookie:
          "OptanonConsent=isGpcEnabled=0&datestamp=Tue+Apr+29+2025+18%3A00%3A43+GMT%2B0700+(%E0%B9%80%E0%B8%A7%E0%B8%A5%E0%B8%B2%E0%B8%AD%E0%B8%B4%E0%B8%99%E0%B9%82%E0%B8%94%E0%B8%88%E0%B8%B5%E0%B8%99)&version=202310.2.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=f2074d47-b657-4a1a-9b71-992da8d16bc6&interactionCount=1&landingPath=https%3A%2F%2Fkrungthai.com%2F",
      },
      data: data,
    };

    const response = await axios.request(config);

    return response.data;
  }
  async generateOtp(datapost) {
    // Implementation depends on API specifics after password verification
    console.warn("generateOtp function not implemented.");
    // Example:
    // const data = { /* ... */ };
    const response = await this.axiosInstance.post(
      "/auth/otp/generation",
      datapost
    );
    return response.data;
  }

  async generateOtptranfer(datapost, datap) {
    // Implementation depends on API specifics after password verification
    const axios = require("axios");
    let data = JSON.stringify(datap);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://business.krungthai.com/ktb/rest/biznext-channel/v1/auth/mfa/challenge",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
        Accept: "application/json, text/plain, */*",
        "Accept-Encoding": "gzip, deflate, br, zstd",
        "Content-Type": "application/json",
        "X-Platform": "web/1.0",
        Authorization: `Bearer ${datapost.accessToken}`,
        "sec-ch-ua-platform": '"macOS"',
        "X-Correlation-ID": "aea78214-b5bc-4554-86d1-ed9faa1ca678-crid",
        "Accept-Language": "th-TH",
        "sec-ch-ua":
          '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        "X-Channel-ID": "WB",
        "sec-ch-ua-mobile": "?0",
        "X-Device-Model":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
        "X-Client-Version": "4.3.96",
        Origin: "https://business.krungthai.com",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        Cookie:
          "OptanonConsent=isGpcEnabled=0&datestamp=Tue+Apr+29+2025+18%3A00%3A43+GMT%2B0700+(%E0%B9%80%E0%B8%A7%E0%B8%A5%E0%B8%B2%E0%B8%AD%E0%B8%B4%E0%B8%99%E0%B9%82%E0%B8%94%E0%B8%88%E0%B8%B5%E0%B8%99)&version=202310.2.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=f2074d47-b657-4a1a-9b71-992da8d16bc6&interactionCount=1&landingPath=https%3A%2F%2Fkrungthai.com%2F",
      },
      data: data,
    };

    const response = await axios.request(config);

    return response.data;
  }

  async pre_confirmation(datapost, order) {
    // Implementation depends on API specifics after password verification
    const axios = require("axios");
    let data = JSON.stringify({});

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `https://business.krungthai.com/ktb/rest/biznext-channel/v1/transfer/transfer-order/${order}/pre-confirmation`,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
        Accept: "application/json, text/plain, */*",
        "Accept-Encoding": "gzip, deflate, br, zstd",
        "Content-Type": "application/json",
        "X-Platform": "web/1.0",
        Authorization: `Bearer ${datapost.accessToken}`,
        "sec-ch-ua-platform": '"macOS"',
        "X-Correlation-ID": "24876858-6b6b-4a3e-bd75-a997556bdb46-crid",
        "Accept-Language": "th-TH",
        "sec-ch-ua":
          '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        "X-Channel-ID": "WB",
        "sec-ch-ua-mobile": "?0",
        "X-Device-Model":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
        "X-Client-Version": "4.3.96",
        Origin: "https://business.krungthai.com",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        Cookie:
          "OptanonConsent=isGpcEnabled=0&datestamp=Tue+Apr+29+2025+18%3A00%3A43+GMT%2B0700+(%E0%B9%80%E0%B8%A7%E0%B8%A5%E0%B8%B2%E0%B8%AD%E0%B8%B4%E0%B8%99%E0%B9%82%E0%B8%94%E0%B8%88%E0%B8%B5%E0%B8%99)&version=202310.2.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=f2074d47-b657-4a1a-9b71-992da8d16bc6&interactionCount=1&landingPath=https%3A%2F%2Fkrungthai.com%2F",
      },
      data: data,
    };

    const response = await axios.request(config);

    return response.data;
  }

  async transfer_orderorde_paty(datapost, bodypost, order) {
    // Implementation depends on API specifics after password verification

    let data = JSON.stringify(bodypost);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `https://business.krungthai.com/ktb/rest/biznext-channel/v1/transfer/transfer-order/${order}/item`,
      headers: {
        "X-Platform": "web/1.0",
        Authorization: `Bearer ${datapost.accessToken}`,
        "sec-ch-ua-platform": '"Windows"',
        "X-Correlation-ID": "bf9f3ccf-5236-40ee-ac3f-1bfc3771c6f8-crid",
        "Accept-Language": "th-TH",
        "sec-ch-ua":
          '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        "X-Channel-ID": "WB",
        Referer: "",
        "sec-ch-ua-mobile": "?0",
        "X-Device-Model":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
        "X-Client-Version": "4.3.96",
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      data: data,
    };

    const response = await axios.request(config);

    return response.data;
  }

  async service_tranfersbeneficiary(datapost) {
    // Implementation depends on API specifics after password verification
    const axios = require("axios");

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://business.krungthai.com/ktb/rest/biznext-channel/v1/beneficiary?service=TRANSFER",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
        Accept: "application/json, text/plain, */*",
        "Accept-Encoding": "gzip, deflate, br, zstd",
        "X-Platform": "web/1.0",
        Authorization: `Bearer ${datapost.accessToken}`,
        "sec-ch-ua-platform": '"macOS"',
        "X-Correlation-ID": "dfdd2616-6cc5-4947-b7fa-6dfc2c3404db-crid",
        "Accept-Language": "th-TH",
        "sec-ch-ua":
          '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        "X-Channel-ID": "WB",
        "sec-ch-ua-mobile": "?0",
        "X-Device-Model":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
        "X-Client-Version": "4.3.96",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        Cookie:
          "OptanonConsent=isGpcEnabled=0&datestamp=Tue+Apr+29+2025+18%3A00%3A43+GMT%2B0700+(%E0%B9%80%E0%B8%A7%E0%B8%A5%E0%B8%B2%E0%B8%AD%E0%B8%B4%E0%B8%99%E0%B9%82%E0%B8%94%E0%B8%88%E0%B8%B5%E0%B8%99)&version=202310.2.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=f2074d47-b657-4a1a-9b71-992da8d16bc6&interactionCount=1&landingPath=https%3A%2F%2Fkrungthai.com%2F",
      },
    };

    const response = await axios.request(config);

    return response.data;
  }
  async service_tranfers(datapost) {
    // Implementation depends on API specifics after password verification
    const axios = require("axios");

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://business.krungthai.com/ktb/rest/biznext-channel/v1/account/source-of-funds?service=TRANSFER",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
        Accept: "application/json, text/plain, */*",
        "Accept-Encoding": "gzip, deflate, br, zstd",
        "X-Platform": "web/1.0",
        Authorization: `Bearer ${datapost.accessToken}`,
        "sec-ch-ua-platform": '"macOS"',
        "X-Correlation-ID": "dfdd2616-6cc5-4947-b7fa-6dfc2c3404db-crid",
        "Accept-Language": "th-TH",
        "sec-ch-ua":
          '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        "X-Channel-ID": "WB",
        "sec-ch-ua-mobile": "?0",
        "X-Device-Model":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
        "X-Client-Version": "4.3.96",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        Cookie:
          "OptanonConsent=isGpcEnabled=0&datestamp=Tue+Apr+29+2025+18%3A00%3A43+GMT%2B0700+(%E0%B9%80%E0%B8%A7%E0%B8%A5%E0%B8%B2%E0%B8%AD%E0%B8%B4%E0%B8%99%E0%B9%82%E0%B8%94%E0%B8%88%E0%B8%B5%E0%B8%99)&version=202310.2.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=f2074d47-b657-4a1a-9b71-992da8d16bc6&interactionCount=1&landingPath=https%3A%2F%2Fkrungthai.com%2F",
      },
    };

    const response = await axios.request(config);

    return response.data;
  }

  async transfer_transfer_ordermetrics(datapost) {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://business.krungthai.com/ktb/rest/biznext-channel/v1/inbox/messages/metrics",
      headers: {
        "X-Platform": "web/1.0",
        Authorization: `Bearer ${datapost.accessToken}`,
        "sec-ch-ua-platform": '"Windows"',
        "X-Correlation-ID": "3ce07648-08ad-44a3-9f92-cdbf86efa739-crid",
        "Accept-Language": "th-TH",
        "sec-ch-ua":
          '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        "X-Channel-ID": "WB",
        Referer: "",
        "sec-ch-ua-mobile": "?0",
        "X-Device-Model":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
        "X-Client-Version": "4.3.96",
        Accept: "application/json, text/plain, */*",
      },
    };

    const response = await axios.request(config);

    return response.data;
  }
  async transfer_transfer_order(datapost, transfer_order) {
    const axios = require("axios");

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `https://business.krungthai.com/ktb/rest/biznext-channel/v1/transfer/transfer-order/${transfer_order}/item`,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
        Accept: "application/json, text/plain, */*",
        "Accept-Encoding": "gzip, deflate, br, zstd",
        "X-Platform": "web/1.0",
        Authorization: `Bearer ${datapost.accessToken}`,
        "sec-ch-ua-platform": '"macOS"',
        "X-Correlation-ID": "951668c8-dc5c-44da-a58d-616aa23ecaa9-crid",
        "Accept-Language": "th-TH",
        "sec-ch-ua":
          '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        "X-Channel-ID": "WB",
        "sec-ch-ua-mobile": "?0",
        "X-Device-Model":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
        "X-Client-Version": "4.3.96",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        Cookie:
          "OptanonConsent=isGpcEnabled=0&datestamp=Tue+Apr+29+2025+18%3A00%3A43+GMT%2B0700+(%E0%B9%80%E0%B8%A7%E0%B8%A5%E0%B8%B2%E0%B8%AD%E0%B8%B4%E0%B8%99%E0%B9%82%E0%B8%94%E0%B8%88%E0%B8%B5%E0%B8%99)&version=202310.2.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=f2074d47-b657-4a1a-9b71-992da8d16bc6&interactionCount=1&landingPath=https%3A%2F%2Fkrungthai.com%2F",
      },
    };

    const response = await axios.request(config);

    return response.data;
  }

  async confirmation(datapost, transfer_order) {
    // Implementation depends on API specifics after password verification
    const axios = require("axios");
    let data = JSON.stringify({});

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `https://business.krungthai.com/ktb/rest/biznext-channel/v1/transfer/transfer-order/${transfer_order}/confirmation`,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
        Accept: "application/json, text/plain, */*",
        "Accept-Encoding": "gzip, deflate, br, zstd",
        "Content-Type": "application/json",
        "X-Platform": "web/1.0",
        Authorization: `Bearer ${datapost.accessToken}`,
        "sec-ch-ua-platform": '"macOS"',
        "X-Correlation-ID": "fb89340d-1ce0-461a-9835-45f96bb7322e-crid",
        "Accept-Language": "th-TH",
        "sec-ch-ua":
          '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        "X-Channel-ID": "WB",
        "sec-ch-ua-mobile": "?0",
        "X-Device-Model":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
        "X-Client-Version": "4.3.96",
        Origin: "https://business.krungthai.com",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        Cookie:
          "OptanonConsent=isGpcEnabled=0&datestamp=Tue+Apr+29+2025+18%3A00%3A43+GMT%2B0700+(%E0%B9%80%E0%B8%A7%E0%B8%A5%E0%B8%B2%E0%B8%AD%E0%B8%B4%E0%B8%99%E0%B9%82%E0%B8%94%E0%B8%88%E0%B8%B5%E0%B8%99)&version=202310.2.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=f2074d47-b657-4a1a-9b71-992da8d16bc6&interactionCount=1&landingPath=https%3A%2F%2Fkrungthai.com%2F",
      },
      data: data,
    };

    const response = await axios.request(config);

    return response.data;
  }
  async tRANSFER_OTHER_BANK(datapost) {
    const axios = require("axios");

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://business.krungthai.com/ktb/rest/biznext-channel/v1/limit/transaction?subServices=TRANSFER_OTHER_BANK",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
        Accept: "application/json, text/plain, */*",
        "Accept-Encoding": "gzip, deflate, br, zstd",
        "X-Platform": "web/1.0",
        Authorization: `Bearer ${datapost.accessToken}`,
        "sec-ch-ua-platform": '"macOS"',
        "X-Correlation-ID": "b5e0559c-332b-4670-a6f4-c74dfaca8ec2-crid",
        "Accept-Language": "th-TH",
        "sec-ch-ua":
          '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        "X-Channel-ID": "WB",
        "sec-ch-ua-mobile": "?0",
        "X-Device-Model":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
        "X-Client-Version": "4.3.96",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        Cookie:
          "OptanonConsent=isGpcEnabled=0&datestamp=Tue+Apr+29+2025+18%3A00%3A43+GMT%2B0700+(%E0%B9%80%E0%B8%A7%E0%B8%A5%E0%B8%B2%E0%B8%AD%E0%B8%B4%E0%B8%99%E0%B9%82%E0%B8%94%E0%B8%88%E0%B8%B5%E0%B8%99)&version=202310.2.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=f2074d47-b657-4a1a-9b71-992da8d16bc6&interactionCount=1&landingPath=https%3A%2F%2Fkrungthai.com%2F",
      },
    };

    const response = await axios.request(config);

    return response.data;
  }

  async confrom_authentication(datapost, datap) {
    const axios = require("axios");
    let data = JSON.stringify(datap);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://business.krungthai.com/ktb/rest/biznext-channel/v1/auth/mfa/authentication",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
        Accept: "application/json, text/plain, */*",
        "Accept-Encoding": "gzip, deflate, br, zstd",
        "Content-Type": "application/json",
        "X-Platform": "web/1.0",
        Authorization: `Bearer ${datapost.accessToken}`,
        "sec-ch-ua-platform": '"macOS"',
        "X-Correlation-ID": "393e8994-25c7-4545-892b-a7cdd30981f4-crid",
        "Accept-Language": "th-TH",
        "sec-ch-ua":
          '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        "X-Channel-ID": "WB",
        "sec-ch-ua-mobile": "?0",
        "X-Device-Model":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
        "X-Client-Version": "4.3.96",
        Origin: "https://business.krungthai.com",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        Cookie:
          "OptanonConsent=isGpcEnabled=0&datestamp=Tue+Apr+29+2025+18%3A00%3A43+GMT%2B0700+(%E0%B9%80%E0%B8%A7%E0%B8%A5%E0%B8%B2%E0%B8%AD%E0%B8%B4%E0%B8%99%E0%B9%82%E0%B8%94%E0%B8%88%E0%B8%B5%E0%B8%99)&version=202310.2.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=f2074d47-b657-4a1a-9b71-992da8d16bc6&interactionCount=1&landingPath=https%3A%2F%2Fkrungthai.com%2F",
      },
      data: data,
    };

    const response = await axios.request(config);

    return response.data;
  }


  async overview(datapost) {
    const axios = require("axios");

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://business.krungthai.com/ktb/rest/biznext-channel/v1/account/overview",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Accept-Language": "th-TH",
        Authorization: `Bearer ${datapost.accessToken}`,
        Connection: "keep-alive",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
        "X-Channel-ID": "WB",
        "X-Client-Version": "4.3.96",
        "X-Correlation-ID": "4b49b643-8bfe-4ab3-8072-3b9b4288a8d7-crid",
        "X-Device-Model":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
        "X-Platform": "web/1.0",
        "sec-ch-ua":
          '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        Cookie:
          "_ga=GA1.1.564788426.1738189786; _ga_HCLW4X2PN2=GS1.1.1738189791.1.1.1738190451.60.0.0; OptanonAlertBoxClosed=2025-02-04T08:09:00.770Z; _vwo_uuid_v2=D9C810EF1DC690A751009C85A3ED680B6|82e1155661a706d5fc63e1cac6c3810e; _gcl_au=1.1.481851387.1738656541; _vwo_uuid=D9C810EF1DC690A751009C85A3ED680B6; __lt__cid=d829c5a7-4086-4874-a47c-2dc7482306a6; _fbp=fb.1.1738656541418.162266262674811535; _tt_enable_cookie=1; _ttp=stcu5XZtDObxZttLxLVqB44DMog.tt.1; _vis_opt_exp_132_combi=2; _ga_VMHN44N2K2=GS1.1.1738656889.2.0.1738656889.0.0.0; _vis_opt_s=2%7C; _ga_Q2WE3JCMLS=GS1.1.1743754339.5.0.1743754339.0.0.0; __lt__sid=1544e65e-ffa46a6a; OptanonConsent=isGpcEnabled=0&datestamp=Fri+Apr+25+2025+11%3A53%3A08+GMT%2B0700+(%E0%B9%80%E0%B8%A7%E0%B8%A5%E0%B8%B2%E0%B8%AD%E0%B8%B4%E0%B8%99%E0%B9%82%E0%B8%94%E0%B8%88%E0%B8%B5%E0%B8%99)&version=202310.2.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=034a4fb2-2d01-4685-9551-f2d2cf9a7690&interactionCount=2&landingPath=NotLandingPage&groups=C0001%3A1%2CC0002%3A1%2CC0003%3A1%2CC0004%3A1%2CC0005%3A1&AwaitingReconsent=false&geolocation=TH%3B49; _ga_3RZQLBZDD1=GS1.1.1745556755.7.1.1745556788.27.0.0; _ga_MQ99NGEN30=GS1.1.1745556756.7.1.1745556788.28.0.0; ttcsid=1745556756287::fpH6l6F0xtV6j0vdQX-a.3.1745556788601; ttcsid_CIHPJ0JC77U4TTM9TI20=1745556756287::qMEcSwnJw7k-In2A1mNd.4.1745556788814; _ga_4GQV21K0PT=GS1.1.1745556794.4.0.1745556794.0.0.0",
      },
    };

    let response = await axios.request(config);

    // console.log(response)

    // Example:
    // const data = { /* ... */ };
    //const response = await this.axiosInstance.get('/account/overview',);
    return response.data;
  }


  async beneficiary(datapost) {
    const axios = require("axios");
    let data = JSON.stringify({
      transactionType: "TRANSFER",
      beneficiaryType: "INTERBANK",
      iconUrl: null,
      beneficiaryNameEn: datapost.nameTh,
      beneficiaryNameTh: datapost.nameTh,
      nickname: null,
      sellerId: null,
      isNotificationEnabled: false,
      domesticBank: {
        bankCode: "004",
        bankAccountNo: "2073334147",
        bankName: "^ก^ส^ิ^ก^ร^ไ^ท^ย",
        branchCode: null,
      },
      promptpay: {
        promptpayIdType: null,
        promptpayId: null,
      },
      remittance: {
        remittanceBeneType: null,
        beneficiaryAddress1: null,
        beneficiaryAddress2: null,
        beneficiaryAddress3: null,
        bankAccountNo: null,
        swiftCode: null,
        bankName: null,
        bankCode: null,
        branchName: null,
        bankAddress: null,
        city: null,
        countryName: null,
        intermediarySwiftCode: null,
        intermediaryBankName: null,
        intermediaryCity: null,
        intermediaryCountry: null,
      },
      tax: {
        isWithholdingTaxEnabled: false,
        payeeName: null,
        taxId: null,
        address: null,
        provinceCode: null,
        province: null,
        districtCode: null,
        district: null,
        subdistrictCode: null,
        subdistrict: null,
        postalcode: null,
      },
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://business.krungthai.com/ktb/rest/biznext-channel/v1/beneficiary",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Accept-Language": "th-TH",
        Authorization: "Bearer QXQMOq1ieL8962GolSv3GHhSVGnThP91",
        Connection: "keep-alive",
        "Content-Type": "application/json",
        Origin: "https://business.krungthai.com",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
        "X-Channel-ID": "WB",
        "X-Client-Version": "4.3.96",
        "X-Correlation-ID": "f972c009-6342-48f9-bb59-a17a53870cbf-crid",
        "X-Device-Model":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
        "X-Platform": "web/1.0",
        "sec-ch-ua":
          '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        Cookie:
          "_ga=GA1.1.564788426.1738189786; _ga_HCLW4X2PN2=GS1.1.1738189791.1.1.1738190451.60.0.0; OptanonAlertBoxClosed=2025-02-04T08:09:00.770Z; _vwo_uuid_v2=D9C810EF1DC690A751009C85A3ED680B6|82e1155661a706d5fc63e1cac6c3810e; _gcl_au=1.1.481851387.1738656541; _vwo_uuid=D9C810EF1DC690A751009C85A3ED680B6; __lt__cid=d829c5a7-4086-4874-a47c-2dc7482306a6; _fbp=fb.1.1738656541418.162266262674811535; _tt_enable_cookie=1; _ttp=stcu5XZtDObxZttLxLVqB44DMog.tt.1; _vis_opt_exp_132_combi=2; _ga_VMHN44N2K2=GS1.1.1738656889.2.0.1738656889.0.0.0; _vis_opt_s=2%7C; _ga_Q2WE3JCMLS=GS1.1.1743754339.5.0.1743754339.0.0.0; OptanonConsent=isGpcEnabled=0&datestamp=Fri+Apr+25+2025+11%3A53%3A08+GMT%2B0700+(%E0%B9%80%E0%B8%A7%E0%B8%A5%E0%B8%B2%E0%B8%AD%E0%B8%B4%E0%B8%99%E0%B9%82%E0%B8%94%E0%B8%88%E0%B8%B5%E0%B8%99)&version=202310.2.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=034a4fb2-2d01-4685-9551-f2d2cf9a7690&interactionCount=2&landingPath=NotLandingPage&groups=C0001%3A1%2CC0002%3A1%2CC0003%3A1%2CC0004%3A1%2CC0005%3A1&AwaitingReconsent=false&geolocation=TH%3B49; _ga_3RZQLBZDD1=GS1.1.1745556755.7.1.1745556788.27.0.0; _ga_MQ99NGEN30=GS1.1.1745556756.7.1.1745556788.28.0.0; ttcsid=1745556756287::fpH6l6F0xtV6j0vdQX-a.3.1745556788601; ttcsid_CIHPJ0JC77U4TTM9TI20=1745556756287::qMEcSwnJw7k-In2A1mNd.4.1745556788814; _ga_4GQV21K0PT=GS1.1.1745556794.4.0.1745557870.0.0.0",
      },
      data: data,
    };

    let response = await axios.request(config);

    return response.data;
  }



  async verifyOtp(otpCode /*, other params like transactionId, refCode */) {
    // Implementation depends on API specifics
    console.warn("verifyOtp function not implemented.");
    // Example:
    const data = {
      companyId: companyId,
      userId: userId,
      encryptedPassword: encryptedPassword,
      e2eeSid: e2eeSid,
    };

    const response = await this.axiosInstance.post(
      "/auth/otp/verification",
      data
    );
    // // This might return the final session tokens
    return response.data;
  }



  // --- End Placeholder ---

  /**
   * Example of handling cookies (simplified, full cookie management is more complex)
   * Axios instances handle cookies automatically if `withCredentials: true` is set
   * and the server sends `Set-Cookie` headers. Manual setting might be needed
   * if cookies are obtained/managed differently.
   * @param {string} cookieString - The cookie string to set.
   */
  setCookie(cookieString) {
    // Generally not needed if using withCredentials, but available if required.
    this.axiosInstance.defaults.headers.common["Cookie"] = cookieString;
    console.log("Manual cookie set:", cookieString);
  }

  /**
   * Example of clearing manually set cookies
   */
  clearCookie() {
    delete this.axiosInstance.defaults.headers.common["Cookie"];
    console.log("Manual cookie cleared.");
  }

  /**
   * Clears the stored access token.
   */
  clearToken() {
    this.accessToken = null;
    // Optionally clear from the default instance headers if set there
    // delete this.axiosInstance.defaults.headers.common['Authorization'];
    console.log("Access token cleared.");
  }
};
