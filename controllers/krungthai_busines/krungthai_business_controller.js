var {
  User_account,
  KrungthaiBusinessToken,
  ApiUsers,
  Logreq,
  Otp_forword,
} = require("../../models"); // <-- เพิ่ม Otp_forword ที่นี่
const axios = require("axios");
const { to, ReE, ReS, TE } = require("../../services/util.service");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const bcrypt = require("bcrypt");
//const Apiscb_helper = require("../../helpers/login.helpers");
const jwt = require("jsonwebtoken");
const CONFIG = require("../../config/config.json");
const agent = "Android/14;FastEasy/3.89.0/9217"; // อาจจะต้องเปลี่ยน User-Agent ให้ตรงกับ KTB
const tilesVersion = "90"; // อาจจะไม่เกี่ยวข้องกับ KTB
const ame2ee = require("./ame2ee"); // อาจจะไม่เกี่ยวข้องกับ KTB ถ้า KTB ไม่ใช้การเข้ารหัสแบบ SCB
var url = require("url");
const ApiSms = require("./pushBullet");
const krungsriApiSms = new ApiSms();
const { google } = require("googleapis");
const { authorize } = require("./googleAuth"); // Adjust path if needed
const { Base64 } = require("js-base64"); // npm install js-base64 --save

// const app = require("../../services/app.service");
//const config = require("../../config/app.json")[app["env"]];
//const date = require("date-and-time");
//const now = new Date();
var md5 = require("md5");
//const value = date.format(now, "HH:mm:ss");
const krungthaiclass = require("./krungthai.class");
const krungthai = new krungthaiclass();

var moment = require("moment");
const { asIs } = require("sequelize");
require("moment/locale/th");

async function pinEncrypt(Sid, ServerRandom, pin, hashType, pubKey) {
  let e2Module, e2RsaExponent;
  const regex = /([^,]+),([^,]+)/;
  if ((m = regex.exec(pubKey)) !== null) {
    m.forEach((match, groupIndex) => {
      if (match !== "undefined" && groupIndex == 1) {
        e2Module = match;
      }
      if (match !== "undefined" && groupIndex == 2) {
        e2RsaExponent = match;
      }
    });
  }
  return await ame2ee.encryptPinForAM(
    Sid,
    e2Module + "," + e2RsaExponent,
    ServerRandom,
    pin,
    hashType
  );
}

async function wtf(transactionToken, otp_forword) {
  const axios = require("axios");
  let data = JSON.stringify(otp_forword);

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://business.krungthai.com/ktb/rest/biznext-channel/v1/password/grant?grant_type=client_credentials",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Accept-Language": "th-TH",
      Authorization: `Bearer ${transactionToken}`,
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
      "X-Correlation-ID": "213a5272-5c17-4ebe-ad40-015cd10c8099-crid",
      "X-Device-Model":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
      "X-Platform": "web/1.0",
      "sec-ch-ua":
        '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      Cookie:
        "_ga=GA1.1.564788426.1738189786; _ga_HCLW4X2PN2=GS1.1.1738189791.1.1.1738190451.60.0.0; OptanonAlertBoxClosed=2025-02-04T08:09:00.770Z; _vwo_uuid_v2=D9C810EF1DC690A751009C85A3ED680B6|82e1155661a706d5fc63e1cac6c3810e; _gcl_au=1.1.481851387.1738656541; _vwo_uuid=D9C810EF1DC690A751009C85A3ED680B6; __lt__cid=d829c5a7-4086-4874-a47c-2dc7482306a6; _fbp=fb.1.1738656541418.162266262674811535; _tt_enable_cookie=1; _ttp=stcu5XZtDObxZttLxLVqB44DMog.tt.1; _vis_opt_exp_132_combi=2; _ga_VMHN44N2K2=GS1.1.1738656889.2.0.1738656889.0.0.0; _vis_opt_s=2%7C; _ga_Q2WE3JCMLS=GS1.1.1743754339.5.0.1743754339.0.0.0; OptanonConsent=isGpcEnabled=0&datestamp=Thu+Apr+24+2025+13%3A48%3A58+GMT%2B0700+(%E0%B9%80%E0%B8%A7%E0%B8%A5%E0%B8%B2%E0%B8%AD%E0%B8%B4%E0%B8%99%E0%B9%82%E0%B8%94%E0%B8%88%E0%B8%B5%E0%B8%99)&version=202310.2.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=034a4fb2-2d01-4685-9551-f2d2cf9a7690&interactionCount=2&landingPath=NotLandingPage&groups=C0001%3A1%2CC0002%3A1%2CC0003%3A1%2CC0004%3A1%2CC0005%3A1&AwaitingReconsent=false&geolocation=TH%3B49; ttcsid=1745477339083::ugvewbFy8hpi7j8_t2z0.2.1745477339083; ttcsid_CIHPJ0JC77U4TTM9TI20=1745477339082::lswmKFR9ZQe0NiXU-YrW.2.1745477341835; _ga_MQ99NGEN30=GS1.1.1745477338.5.1.1745478770.50.0.0; _ga_3RZQLBZDD1=GS1.1.1745477338.5.1.1745478770.60.0.0; _ga_4GQV21K0PT=GS1.1.1745482491.2.1.1745482498.0.0.0",
    },
    data: data,
  };

  return await axios.request(config);
}
const krungthai_verification = async function (req, res) {
  // Input validation
  if (!req.body.userId) {
    return ReE(res, { message: "Username is required" }, 400);
  }
  if (typeof req.body.userId !== "string") {
    return ReE(res, { message: "Username must be a string" }, 400);
  }

  if (!req.body.password) {
    return ReE(res, { message: "Password is required" }, 400);
  }
  if (typeof req.body.password !== "string") {
    return ReE(res, { message: "Password must be a string" }, 400);
  }

  // อาจจะมี Device ID หรือข้อมูลอื่นๆ ที่จำเป็นสำหรับการ login KTB Business
  // if (!req.body.deviceId) {
  //     return ReE(res, { message: "Device ID is required" }, 400);
  // }
  // if (typeof req.body.deviceId !== "string") {
  //     return ReE(res, { message: "Device ID must be a string" }, 400);
  // }

  try {
    // เรียกใช้ฟังก์ชัน login จาก krungthai class
    // สมมติว่ามีฟังก์ชัน login(username, password, optionalDeviceId)


     const devicesid = '76088583-0a03-4541-92be-364acf9ce599-devc';


    const loginResult = await krungthai.getClientCredentialsToken(devicesid);

    const access_tokens = loginResult.access_token;

    // console.log(access_tokens);

    const loginResults = await krungthai.generatePasswordKey(access_tokens);

    const pinEncrypts = await pinEncrypt(
      loginResults.e2eeSid,
      loginResults.serverRandom,
      req.body.password,
      loginResults.oaepHashAlgo,
      loginResults.pubKey
    );

    let datapostv2 = JSON.stringify({
      companyId: req.body.companyId,
      userId: req.body.userId,
      encryptedPassword: pinEncrypts,
      e2eeSid: loginResults.e2eeSid,
    });

    const verification_passwords = await krungthai.verification_password(
      datapostv2
    );

    // verification_password

    let dataverification = JSON.stringify({
      deliveryMethod: "OTP_SMS",
      userId: req.body.userId,
      companyId: req.body.companyId,
      transactionToken: verification_passwords.transactionToken,
    });

    const verification_generateOtp = await krungthai.generateOtp(
      dataverification
    );

    let dataverifyOtp = {
      otp: verification_generateOtp.otpRefNo, // This seems to be the Reference, not the OTP itself
      tokenUuid: verification_generateOtp.tokenUuid,
      transactionToken: verification_passwords.transactionToken,
    };

    console.log("Data for OTP verification step:", dataverifyOtp);

    let otpFound = false;
    let startTime = Date.now();
    const timeout = 100000; // 1 minute in milliseconds
    while (!otpFound && Date.now() - startTime < timeout) {
      try {
        let chackotpnow = await saveSms(verification_generateOtp.otpRefNo);

      //  console.log(chackotpnow);
        if (chackotpnow) {
          otpFound = true;

          let datapost = {
            otp: chackotpnow.otp_ref_forword,
            tokenUuid: verification_generateOtp.tokenUuid,
            transactionToken: verification_passwords.transactionToken,
            access_tokens: access_tokens,
          };

          const verification_passw = await verrify_otps(datapost);

          // console.log(verification_passw)

          let bodd = {
            transactionToken: verification_passwords.transactionToken,
          };

          const transactionToken = await krungthai.client_credentials(bodd);

          let datasave = {
            userId: req.body.userId,
            companyId: req.body.companyId,
            ktbUserId: req.body.userId,
            ktbCompanyId: req.body.companyId,
            accessToken: transactionToken.access_token, // The final access token for API calls
            refreshToken: transactionToken.refresh_token, // If provided, for refreshing the token
            expiresIn: transactionToken.expires_in, // Token validity duration
            tokenType: transactionToken.token_type, // e.g., 'Bearer'
            apiUserId: req.apiUser.id, // Link to the API user making the request
            obtainedAt: new Date(), // Timestamp when the token was obtained
            // You might want to find or crktbCompanyIdeate a User_account record here
            // and store its ID, or update the existing record's 'auth' or 'token' field
            // with transactionToken.access_token
          };
          console.log(datasave);
          let savedata = await KrungthaiBusinessToken.create(datasave);

          return ReS(
            res,
            {
              data: transactionToken,
              data2: savedata,
              message: "login Success",
            },
            200
          );

          // console.log("Error checking OTP:", transactionToken);
        }
      } catch (error) {
        console.error("Error checking OTP:", error);
        // Handle error appropriately, e.g., log it, retry, or return an error response
        return ReE(res, { message: "Error checking OTP" }, 500);
      }
    }
  } catch (error) {
    console.error("Error during Krungthai login verification:", error);
    // จัดการข้อผิดพลาดทั่วไป (เช่น network error, internal server error)
    let errorMessage = "An error occurred during login verification";
    let statusCode = 500;

    // ตรวจสอบว่าเป็น error จาก axios หรือไม่ เพื่อดู response จาก KTB (ถ้ามี)
    if (error.response) {
      console.error("Krungthai API Error Response:", error.response.data);
      // Try to get a more specific error message from KTB's response
      errorMessage =
        error.response.data?.status?.description ||
        error.response.data?.message ||
        errorMessage;
      statusCode = error.response.status || statusCode;
      return ReE(
        res,
        { message: errorMessage, error: error.response.data },
        statusCode
      );
    }

    return ReE(
      res,
      { message: errorMessage, error: error.message },
      statusCode
    );
  }
};

async function verrify_otps(praram) {
  const axios = require("axios");
  let datapost = JSON.stringify({
    otp: praram.otp,
    tokenUuid: praram.tokenUuid,
    transactionToken: praram.transactionToken,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://business.krungthai.com/ktb/rest/biznext-channel/v1/auth/otp/verification",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Accept-Language": "th-TH",
      Authorization: `Bearer ${praram.access_tokens}`,
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
      "X-Correlation-ID": "d2432247-8dc6-4ebb-bd66-d6046def84f9-crid",
      "X-Device-Model":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
      "X-Platform": "web/1.0",
      "sec-ch-ua":
        '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      Cookie:
        "_ga=GA1.1.564788426.1738189786; _ga_HCLW4X2PN2=GS1.1.1738189791.1.1.1738190451.60.0.0; OptanonAlertBoxClosed=2025-02-04T08:09:00.770Z; _vwo_uuid_v2=D9C810EF1DC690A751009C85A3ED680B6|82e1155661a706d5fc63e1cac6c3810e; _gcl_au=1.1.481851387.1738656541; _vwo_uuid=D9C810EF1DC690A751009C85A3ED680B6; __lt__cid=d829c5a7-4086-4874-a47c-2dc7482306a6; _fbp=fb.1.1738656541418.162266262674811535; _tt_enable_cookie=1; _ttp=stcu5XZtDObxZttLxLVqB44DMog.tt.1; _vis_opt_exp_132_combi=2; _ga_VMHN44N2K2=GS1.1.1738656889.2.0.1738656889.0.0.0; _vis_opt_s=2%7C; _ga_Q2WE3JCMLS=GS1.1.1743754339.5.0.1743754339.0.0.0; OptanonConsent=isGpcEnabled=0&datestamp=Thu+Apr+24+2025+13%3A48%3A58+GMT%2B0700+(%E0%B9%80%E0%B8%A7%E0%B8%A5%E0%B8%B2%E0%B8%AD%E0%B8%B4%E0%B8%99%E0%B9%82%E0%B8%94%E0%B8%88%E0%B8%B5%E0%B8%99)&version=202310.2.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=034a4fb2-2d01-4685-9551-f2d2cf9a7690&interactionCount=2&landingPath=NotLandingPage&groups=C0001%3A1%2CC0002%3A1%2CC0003%3A1%2CC0004%3A1%2CC0005%3A1&AwaitingReconsent=false&geolocation=TH%3B49; ttcsid=1745477339083::ugvewbFy8hpi7j8_t2z0.2.1745477339083; ttcsid_CIHPJ0JC77U4TTM9TI20=1745477339082::lswmKFR9ZQe0NiXU-YrW.2.1745477341835; _ga_MQ99NGEN30=GS1.1.1745477338.5.1.1745478770.50.0.0; _ga_3RZQLBZDD1=GS1.1.1745477338.5.1.1745478770.60.0.0; _ga_4GQV21K0PT=GS1.1.1745482491.2.1.1745482498.0.0.0",
    },
    data: datapost,
  };

  return await axios.request(config);
}

const krungthai_generation = async function (req, res) {};
const krungthai_otp_generation = async function (req, res) {};
// const krungthai_otp_verification = async function (req, res) {
//   let datapost = {
//     otp: req.body.otp,
//     tokenUuid: req.body.transactionToken,
//     transactionToken: req.body.transactionToken,
//   };

//   const loginResult = await krungthai.verifyOtp(datapost);

//   console.group(loginResult);
// };
const krungthai_client_credentials = async function (req, res) {};

const krungthai_otp_verification = async function (req, res) {
  // --- Input validation for OTP verification ---
  if (!req.body.otp) {
    return ReE(res, { message: "OTP is required" }, 400);
  }
  if (typeof req.body.otp !== "string" || req.body.otp.length !== 6) {
    // Assuming 6-digit OTP
    return ReE(res, { message: "OTP must be a 6-digit string" }, 400);
  }
  if (!req.body.tokenUuid) {
    return ReE(res, { message: "tokenUuid is required" }, 400);
  }
  if (!req.body.transactionToken) {
    return ReE(res, { message: "transactionToken is required" }, 400);
  }
  // --- End Input Validation ---

  // --- Removed Gmail reading logic ---
  // The OTP should now come directly from the client request body

  const finalOtp = req.body.otp; // Use the OTP from the request body

  let datapost = {
    otp: finalOtp,
    tokenUuid: req.body.tokenUuid,
    transactionToken: req.body.transactionToken,
  };

  try {
    console.log("Calling Krungthai verifyOtp with OTP:", datapost.otp);
    // Assuming krungthai.verifyOtp handles setting the necessary Bearer token
    const verificationResult = await krungthai.verifyOtp(datapost);

    // Process verificationResult
    console.log("Krungthai OTP Verification Result:", verificationResult);

    // Check the response structure from KTB for success/failure
    // Adjust this condition based on the actual API response
    if (
      verificationResult &&
      verificationResult.status &&
      verificationResult.status.code === "0"
    ) {
      // Example: '0' often means success
      // Login successful, potentially return session tokens or confirmation
      return ReS(
        res,
        {
          data: verificationResult.data, // Send back relevant data from KTB
          message: "OTP Verification Successful",
        },
        200
      );
    } else {
      // OTP verification failed or other error from KTB
      const errorDesc =
        (verificationResult &&
          verificationResult.status &&
          verificationResult.status.description) ||
        "OTP Verification Failed";
      // Use a 401 Unauthorized or 400 Bad Request depending on the failure reason
      return ReE(
        res,
        { data: verificationResult?.data, message: errorDesc },
        401
      );
    }
  } catch (error) {
    console.error(
      "Error calling Krungthai verifyOtp:",
      error.response ? error.response.data : error.message
    );
    let errorMessage = "An error occurred during KTB OTP verification";
    let statusCode = 500;
    if (error.response) {
      errorMessage =
        error.response.data?.status?.description ||
        error.response.data?.message ||
        errorMessage;
      statusCode = error.response.status || statusCode;
      return ReE(
        res,
        { message: errorMessage, error: error.response.data },
        statusCode
      );
    }
    return ReE(
      res,
      { message: errorMessage, error: error.message },
      statusCode
    );
  }
};

const smsforword = async function (req, res) {
  let body = req.body;

  // Example Krungthai Business OTP format (for reference)
  // Krungthai Business: รหัส OTP ที่ต้องดำเนินการ
  // รหัส OTP : 937873
  // รหัสอ้างอิง : W4MZV
  // กรุณาใช้งานภายใน 3 นาที วันที่ออกรหัส Apr 25, 2025 - 5:33:51 AM.

  console.log(body); // Log the incoming request body

  // --- 1. Check Sender ---
  // Update this check based on the actual sender name from the SMS forwarding app
  // Common senders might be "Krungthai", "KTB", "KTB Business" etc. VERIFY THIS!
  const expectedSenders = ["Krungthai", "KTB", "Krungthai Business"]; // Add known sender names
  // if (!body.sender || !expectedSenders.some(sender => body.sender.includes(sender))) {
  //   console.log(`Ignoring SMS from sender: ${body.sender}. Expected one of: ${expectedSenders.join(', ')}`);
  //   return ReE(res, {
  //     code: 400,
  //     message: `Error: Sender is not recognized as Krungthai Business OTP source.`,
  //   });
  // }

  const smsText = body.bigtext;
  if (!smsText) {
    console.log("Error: SMS message body is missing.");
    return ReE(res, {
      code: 400,
      message: "Error: SMS message body is missing.",
    });
  }

  // --- 2. Extract OTP and Reference Code ---
  let otp = null;
  let ref = null;

  // Regex for OTP (6 digits after "รหัส OTP : ") - Handles potential extra spaces
  const otpMatch = smsText.match(/รหัส OTP\s*:\s*(\d{6})/);
  if (otpMatch && otpMatch[1]) {
    otp = otpMatch[1];
    console.log(`Extracted OTP: ${otp}`);
  } else {
    console.log("OTP pattern (รหัส OTP : ######) not found in SMS text.");
  }

  // Regex for Reference Code (Alphanumeric after "รหัสอ้างอิง : ") - Handles potential extra spaces
  const erfMatch = smsText.match(/รหัสอ้างอิง\s*:\s*([A-Z0-9]+)/i); // Added 'i' for case-insensitivity if needed
  if (refMatch && refMatch[1]) {
    ref = refMatch[1];
    console.log(`Extracted Reference: ${ref}`);
  } else {
    console.log(
      "Reference code pattern (รหัสอ้างอิง : XXXXX) not found in SMS text."
    );
  }

  // --- 3. Check if OTP and Ref were found ---
  // Only proceed if BOTH OTP and Reference are found, as they are usually linked
  if (!otp || !ref) {
    console.log(
      "Error: Could not extract both OTP and Reference Code from the message."
    );
    // Don't save incomplete data
    return ReE(res, {
      code: 400,
      message: "Error: Could not extract both OTP and Reference Code.",
    });
  }

  // --- 4. Check if this specific OTP/Ref combination was already processed ---
  let chackotp_forword, err;
  [err, chackotp_forword] = await to(
    Otp_forword.findOne({
      where: {
        // Check based on the extracted OTP and Reference code for better accuracy
        otp_ref: ref,
        otp_ref_forword: otp,
        otp_sander: body.name, // Optionally include sender if needed for uniqueness
      },
    })
  );

  if (err) {
    console.error("Database error checking for existing OTP:", err);
    return ReE(res, { code: 500, message: "Database error checking OTP." });
  }

  if (chackotp_forword) {
    console.log(`SMS already processed (Ref: ${ref}, OTP: ${otp}). Skipping.`);
    // Return 200 OK or 208 Already Reported to indicate it was received but not processed again
    return ReS(res, {
      code: 200,
      message: "SMS already processed.",
    });
  }

  // --- 5. Save the new OTP information ---
  let dataToSave = {
    text_otp: smsText, // Store the full original message for reference/debugging
    otp_sander: body.name,
    status: 1, // Assuming 1 means active/new/unused
    otp_ref: ref,
    otp_ref_forword: otp,
    channel: "Krungthai Business", // Indicate the source channel clearly
    // language: 'th', // Optional: if you detect language
  };

  let createdOtpRecord;
  [err, createdOtpRecord] = await to(Otp_forword.create(dataToSave));

  if (err) {
    console.error("Database error saving new OTP:", err);
    return ReE(res, { code: 500, message: "Database error saving OTP." });
  }

  console.log("New KTB OTP record created:", createdOtpRecord.toJSON());
  // Return 201 Created status code
  return ReS(res, {
    data: createdOtpRecord,
    code: 201,
    message: "Krungthai Business OTP successfully received and saved.",
  });
};

const krungthai_overview = async function (req, res) {
  // let createdOtpRecord,err;
  // [err, createdOtpRecord] = await to(krungthai.overview());
  let apiToken = "7c31fe0a-60cf-4877-98c2-c34d75bb6875";
  let chackotp_forword, chackotp_forword2, err;
  [err, chackotp_forword] = await to(
    ApiUsers.findOne({
      where: {
        apiToken: apiToken, // Optionally include sender if needed for uniqueness
      },
    })
  );

  [err, chackotp_forword2] = await to(
    KrungthaiBusinessToken.findOne({
      where: {
        apiUserId: chackotp_forword.id, // Optionally include sender if needed for uniqueness
      },
      order: [["id", "DESC"]],
    })
  );

  let alldata = chackotp_forword2;

  let createdOtpRecord, createdOtpRecord2;
  [err, createdOtpRecord] = await to(krungthai.overview(alldata));
  //  console.log(alldata)

  // [err, createdOtpRecord2] = await to(krungthai.chack_info_acc(alldata));

  //let dataacc2 = await krungthai.chack_info_acc(alldata);

  //let dataacc22 = await krungthai.create_tranferoder(alldata);

 console.log(createdOtpRecord);

  return ReS(res, {
    data: createdOtpRecord,
    //  dataacc: dataacc2,
    code: 201,
    message: "Krungthai Business OTP successfully received and saved.",
  });
};

const create_tranferoder = async function (req, res) {
  // let createdOtpRecord,err;
  // [err, createdOtpRecord] = await to(krungthai.overview());
  let apiToken = req.header("apiToken");

  let body = req.body;
  let chackotp_forword, chackotp_forword2, err;
  [err, chackotp_forword] = await to(
    ApiUsers.findOne({
      where: {
        apiToken: apiToken, // Optionally include sender if needed for uniqueness
      },
    })
  );

  [err, chackotp_forword2] = await to(
    KrungthaiBusinessToken.findOne({
      where: {
        apiUserId: chackotp_forword.id, // Optionally include sender if needed for uniqueness
      },
      order: [["id", "DESC"]],
    })
  );

  let alldata = chackotp_forword2;

  let createdOtpRecord, createdOtpRecord2;
  [err, createdOtpRecord] = await to(krungthai.overview(alldata));
  //  console.log(alldata)

  // [err, createdOtpRecord2] = await to(krungthai.chack_info_acc(alldata));

  let dataacc2 = await krungthai.chack_info_acc(alldata);

  let datapost = {
    fromAccountRefId: dataacc2.content[0].accountRefId,
    newPayeeNameEn: body.newPayeeNameEn,
    newPayeeNameTh: body.newPayeeNameTh,
    newPayeeNickname: "",
    newPayeeBankName: body.newPayeeBankName,
    newPayeeBankCode: body.newPayeeBankCode,
    newPayeeAccountNo: body.newPayeeAccountNo,
    isSaveAsBeneficiary: false,
  };

   let dataacc22 = await krungthai.create_tranferoder(alldata, datapost);
  // console.log(dataacc22)
  let dataacc_tran = await krungthai.getdata_odertranfer(
    alldata,
    dataacc22.transferOrderId
  );

  let datatran2 = {
    fromAccountRefId: dataacc2.content[0].accountRefId,
    amount: body.amount,
    effectiveDate:moment().format("YYYY-MM-DD"),
  };
  // // //console.log(datatran2);

   let dataacc_servers = await krungthai.generateservice(alldata, datatran2,dataacc22);

   let dataacc_serversservice_tranfers = await krungthai.service_tranfers(alldata);

   

   let subService = ""
   if(body.newPayeeBankCode == "006")  {


    subService = "TRANSFER_3_PARTY"

   }else {

     subService = "TRANSFER_OTHER_BANK"
   }


   let body33 = {
    "beneficiaryId": null,
    "fromAccountRefId": dataacc_serversservice_tranfers.accounts[0].accountRefId,
    "fromAccountNo": dataacc_serversservice_tranfers.accounts[0].accountNo,
    "newPayeeNameEn": body.newPayeeNameEn,
    "newPayeeNameTh": body.newPayeeNameTh,
    "newPayeeNickname": null,
    "newPayeeBankCode": body.newPayeeBankCode,
    "newPayeeAccountNo": body.newPayeeAccountNo,
    "toAccountRefId": null,
    "isSavedAsBeneficiary": false,
    "amount": body.amount,
    "effectiveDate": moment().format("YYYY-MM-DD"),
    "isRecurringEnabled": false,
    "recurringFrequency": null,
    "noOfOccurrence": 0,
    "subService": subService,
    "transferFee": 0,
    "feeChargeTo": null,
    "note": null,
    "isWithholdingTaxEnabled": false,
    "whtPayeeName": null,
    "whtTaxId": null,
    "whtAddress": null,
    "whtProvinceCode": null,
    "whtDistrictCode": null,
    "whtSubDistrictCode": null,
    "whtPostcode": null,
    "whtCertificateNo": null,
    "whtSequence": null,
    "whtForm": null,
    "whtPayType": null,
    "invoices": [],
    "isNotificationEnabled": false,
    "notificationEmailAddress": null,
    "notificationSmsMobileNo": null,
    "branchCode": null
  }


   let dataacc_server = await krungthai.itemtranfer(alldata, body33,dataacc22);
   
   let dataacc_tRANSFER_OTHER_BANK = await krungthai.tRANSFER_OTHER_BANK(alldata);

  let pre_confirmations = await krungthai.pre_confirmation(alldata, dataacc22.transferOrderId);
 // console.log(pre_confirmations);

 
   
let dataotps = {
  "mfaRefId": pre_confirmations.mfaRefId,
  "mfaMethod": "OTP_SMS"
}

 let dataacc_serverconfirmation = await krungthai.generateOtptranfer(alldata, dataotps);

  
 let otpFound = false;
 let startTime = Date.now();
 const timeout = 100000; // 1 minute in milliseconds
 while (!otpFound && Date.now() - startTime < timeout) {
   try {
     let chackotpnow = await saveSms(dataacc_serverconfirmation.params.otpRefNo)

     if (chackotpnow) {
      otpFound = true;
      let confrom = {
        "mfaRefId": pre_confirmations.mfaRefId,
        "mfaPassphrase": chackotpnow.otp_ref_forword
      }
  
      let dataacc_serverconfirmationds = await krungthai.confrom_authentication(alldata, confrom);
  
  
      let dataacc_serverconfirmationdsconfirmation = await krungthai.confirmation(alldata, dataacc22.transferOrderId);
      let dataacc_transfer_transfer_order = await krungthai.transfer_transfer_order(alldata, dataacc22.transferOrderId);
  
      return ReS(res, {
        data: dataacc_transfer_transfer_order,
        code: 200,
        message: "Success",
      });

     }
    

    
   } catch (error) {
     console.error("Error checking OTP:", error);
     // Handle error appropriately, e.g., log it, retry, or return an error response
     return ReE(res, { message: "Error checking OTP" }, 500);
   }
 }
  return ReS(res, {
    // data: createdOtpRecord,
    // dataacc: dataacc2,
    code: 201,
    message: "Krungthai Business OTP successfully received and saved.",
  });
};

const create_tranferoderv2 = async function (req, res) {
  // let createdOtpRecord,err;
  // [err, createdOtpRecord] = await to(krungthai.overview());

  let alldata = chackotp_forword2;

  let createdOtpRecord, createdOtpRecord2;
  [err, createdOtpRecord] = await to(krungthai.overview_app(alldata));
  //  console.log(alldata)

  // [err, createdOtpRecord2] = await to(krungthai.chack_info_acc(alldata));

  let dataacc2 = await krungthai.chack_info_acc(alldata);

  let datapost = {
    fromAccountRefId: dataacc2.content[0].accountRefId,
    newPayeeNameEn: body.newPayeeNameEn,
    newPayeeNameTh: body.newPayeeNameTh,
    newPayeeNickname: "",
    newPayeeBankName: body.newPayeeBankName,
    newPayeeBankCode: body.newPayeeBankCode,
    newPayeeAccountNo: body.newPayeeAccountNo,
    isSaveAsBeneficiary: false,
  };

   let dataacc22 = await krungthai.create_tranferoder(alldata, datapost);
  // console.log(dataacc22)
  let dataacc_tran = await krungthai.getdata_odertranfer(
    alldata,
    dataacc22.transferOrderId
  );

  let datatran2 = {
    fromAccountRefId: dataacc2.content[0].accountRefId,
    amount: body.amount,
    effectiveDate:moment().format("YYYY-MM-DD"),
  };
  // // //console.log(datatran2);

   let dataacc_servers = await krungthai.generateservice(alldata, datatran2,dataacc22);

   let dataacc_serversservice_tranfers = await krungthai.service_tranfers(alldata);

   

   let subService = ""
   if(body.newPayeeBankCode == "006")  {


    subService = "TRANSFER_3_PARTY"

   }else {

     subService = "TRANSFER_OTHER_BANK"
   }


   let body33 = {
    "beneficiaryId": null,
    "fromAccountRefId": dataacc_serversservice_tranfers.accounts[0].accountRefId,
    "fromAccountNo": dataacc_serversservice_tranfers.accounts[0].accountNo,
    "newPayeeNameEn": body.newPayeeNameEn,
    "newPayeeNameTh": body.newPayeeNameTh,
    "newPayeeNickname": null,
    "newPayeeBankCode": body.newPayeeBankCode,
    "newPayeeAccountNo": body.newPayeeAccountNo,
    "toAccountRefId": null,
    "isSavedAsBeneficiary": false,
    "amount": body.amount,
    "effectiveDate": moment().format("YYYY-MM-DD"),
    "isRecurringEnabled": false,
    "recurringFrequency": null,
    "noOfOccurrence": 0,
    "subService": subService,
    "transferFee": 0,
    "feeChargeTo": null,
    "note": null,
    "isWithholdingTaxEnabled": false,
    "whtPayeeName": null,
    "whtTaxId": null,
    "whtAddress": null,
    "whtProvinceCode": null,
    "whtDistrictCode": null,
    "whtSubDistrictCode": null,
    "whtPostcode": null,
    "whtCertificateNo": null,
    "whtSequence": null,
    "whtForm": null,
    "whtPayType": null,
    "invoices": [],
    "isNotificationEnabled": false,
    "notificationEmailAddress": null,
    "notificationSmsMobileNo": null,
    "branchCode": null
  }


   let dataacc_server = await krungthai.itemtranfer(alldata, body33,dataacc22);
   
   let dataacc_tRANSFER_OTHER_BANK = await krungthai.tRANSFER_OTHER_BANK(alldata);

  let pre_confirmations = await krungthai.pre_confirmation(alldata, dataacc22.transferOrderId);
 // console.log(pre_confirmations);

 
   
let dataotps = {
  "mfaRefId": pre_confirmations.mfaRefId,
  "mfaMethod": "OTP_SMS"
}

 let dataacc_serverconfirmation = await krungthai.generateOtptranfer(alldata, dataotps);

  
 let otpFound = false;
 let startTime = Date.now();
 const timeout = 100000; // 1 minute in milliseconds
 while (!otpFound && Date.now() - startTime < timeout) {
   try {
     let chackotpnow = await saveSms(dataacc_serverconfirmation.params.otpRefNo)

     if (chackotpnow) {
      otpFound = true;
      let confrom = {
        "mfaRefId": pre_confirmations.mfaRefId,
        "mfaPassphrase": chackotpnow.otp_ref_forword
      }
  
      let dataacc_serverconfirmationds = await krungthai.confrom_authentication(alldata, confrom);
  
  
      let dataacc_serverconfirmationdsconfirmation = await krungthai.confirmation(alldata, dataacc22.transferOrderId);
      let dataacc_transfer_transfer_order = await krungthai.transfer_transfer_order(alldata, dataacc22.transferOrderId);
  
      return ReS(res, {
        data: dataacc_transfer_transfer_order,
        code: 200,
        message: "Success",
      });

     }
    

    
   } catch (error) {
     console.error("Error checking OTP:", error);
     // Handle error appropriately, e.g., log it, retry, or return an error response
     return ReE(res, { message: "Error checking OTP" }, 500);
   }
 }
  return ReS(res, {
    // data: createdOtpRecord,
    // dataacc: dataacc2,
    code: 201,
    message: "Krungthai Business OTP successfully received and saved.",
  });
};

const krungthai_verrifyuser = async function (req, res) {
  let apiToken = req.header("apiToken");
  let chackotp_forword, chackotp_forword2, err;
  [err, chackotp_forword] = await to(
    ApiUsers.findOne({
      where: {
        apiToken: apiToken, // Optionally include sender if needed for uniqueness
      },
    })
  );

  [err, chackotp_forword2] = await to(
    KrungthaiBusinessToken.findOne({
      where: {
        apiUserId: chackotp_forword.id, // Optionally include sender if needed for uniqueness
      },
      order: [["id", "DESC"]],
    })
  );

  let alldata = chackotp_forword2;

  let body = req.body;

  const axios = require("axios");

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `https://business.krungthai.com/ktb/rest/biznext-channel/v1/account/payee-funds/external?bankCode=${body.bankcode}&id=${body.accnumber}`,
    headers: {
      Accept: "application/json, text/plain, */*",
      "Accept-Language": "th-TH",
      Authorization: `Bearer ${alldata.accessToken}`,
      Connection: "keep-alive",
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "same-origin",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
      "X-Channel-ID": "WB",
      "X-Client-Version": "4.3.96",
      "X-Correlation-ID": "b621ceb3-83cb-4e4a-a232-bc3a0eb52bea-crid",
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
  };

  let response = await axios.request(config);
  return ReS(res, {
    data: response.data,
    code: 201,
    message: "Krungthai Business OTP successfully received and saved.",
  });
};

async function saveSms(ref) {
  let foundOTP = null;
  const deviceId = "ujxnWmB8hausjw63VbSVBQ"; // TODO: Consider making this configurable

  try {
    console.log(`Fetching SMS from device ${deviceId} for ref: ${ref}`);
    const smsData = await krungsriApiSms.getSMS(deviceId);

    if (!smsData || !smsData.threads) {
      console.error("Error: Failed to fetch SMS data or data format is incorrect.");
      return null; // Return null or throw an error if SMS data is invalid
    }

    // Expected Krungthai Business SMS format:
    // Krungthai Business: รหัส OTP ที่ต้องดำเนินการ รหัส OTP : 937873 รหัสอ้างอิง : W4MZV ...
    // OR (based on new example):
    // รหัส OTP ของคุณคือ 463250 (รหัสอ้างอิง 6GPYK) ... (Sender might be "Krungsri" or similar)
    const expectedSenders = ["Krungthai", "KTB", "Krungthai Business", "Krungsri", "OTP"]; // Add known sender names/addresses, including potential ones for the new format


    for (const element of smsData.threads) {
      // Ensure recipients array exists and has at least one element
      if (!element.recipients || element.recipients.length === 0) continue;

      let ti = element.recipients[0];

      // Check if the sender matches expected Krungthai senders
      if (expectedSenders.some(sender => ti.address?.includes(sender) || ti.name?.includes(sender))) {
        const text = element.latest?.body; // Check if latest exists
        if (!text) continue; // Skip if no message body

        // Updated Regex to find OTP (6 digits) after "รหัส OTP ของคุณคือ " OR "รหัส OTP : "
        const otpMatch = text.match(/(?:รหัส OTP ของคุณคือ|รหัส OTP\s*:)\s*(\d{6})/);
        // Updated Regex to find Reference Code (Alphanumeric) after "(รหัสอ้างอิง " OR "รหัสอ้างอิง : "
        const refMatch = text.match(/(?:\(รหัสอ้างอิง|รหัสอ้างอิง\s*:)\s*([A-Z0-9]+)\)?/i); // Make closing parenthesis optional

        if (otpMatch && otpMatch[1] && refMatch && refMatch[1]) {
          const extractedOTP = otpMatch[1];
          const extractedRef = refMatch[1];

          console.log(`Found KTB SMS - Ref: ${extractedRef}, OTP: ${extractedOTP}`);

          // Compare the extracted reference code with the input ref
          if (extractedRef.trim().toUpperCase() === ref.trim().toUpperCase()) {
            console.log(`Matching Ref found! OTP: ${extractedOTP}`);
            foundOTP = {
              ref: extractedRef.trim(),
              otp_ref_forword: extractedOTP.trim(), // Match the expected property name from krungthai_verification
            };
            break; // Exit the loop once the matching OTP is found
          }
        }
      }
    }
  } catch (error) {
    console.error(`Error in saveSms while fetching/processing SMS for ref ${ref}:`, error);
    // Depending on requirements, you might want to re-throw the error or just return null
    return null;
  }

  return foundOTP;
}


const instructionViewType = async function (req, res) {



  let apiToken = "7c31fe0a-60cf-4877-98c2-c34d75bb6875";
  let chackotp_forword, chackotp_forword2, err;
  [err, chackotp_forword] = await to(
    ApiUsers.findOne({
      where: {
        apiToken: apiToken, // Optionally include sender if needed for uniqueness
      },
    })
  );

  [err, chackotp_forword2] = await to(
    KrungthaiBusinessToken.findOne({
      where: {
        apiUserId: chackotp_forword.id, // Optionally include sender if needed for uniqueness
      },
      order: [["id", "DESC"]],
    })
  );

  let alldata = chackotp_forword2;

  const axios = require('axios');

  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://business.krungthai.com/ktb/rest/biznext-channel/v1/instructions/submitted?datetimeFrom=${moment().add(-4, 'days').format("YYYY-MM-DD")}&datetimeTo=${moment().add(+4, 'days').format("YYYY-MM-DD")}&pageSize=5&pageNumber=0&keyword=${req.body.instructionRefNo}&instructionViewType=ALL&listType=TRANSACTIONS`,
    headers: { 
      'Accept': 'application/json, text/plain, */*', 
      'Accept-Language': 'th-TH', 
      'Authorization': `Bearer ${alldata.accessToken}`, 
      'Connection': 'keep-alive', 
      'Sec-Fetch-Dest': 'empty', 
      'Sec-Fetch-Mode': 'cors', 
      'Sec-Fetch-Site': 'same-origin', 
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36', 
      'X-Channel-ID': 'WB', 
      'X-Client-Version': '4.3.96', 
      'X-Correlation-ID': '5294d1cd-75ea-45d0-914e-f825e7af4722-crid', 
      'X-Device-Model': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36', 
      'X-Platform': 'web/1.0', 
      'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"', 
      'sec-ch-ua-mobile': '?0', 
      'sec-ch-ua-platform': '"Windows"', 
      'Cookie': '_ga=GA1.1.564788426.1738189786; _ga_HCLW4X2PN2=GS1.1.1738189791.1.1.1738190451.60.0.0; OptanonAlertBoxClosed=2025-02-04T08:09:00.770Z; _vwo_uuid_v2=D9C810EF1DC690A751009C85A3ED680B6|82e1155661a706d5fc63e1cac6c3810e; _gcl_au=1.1.481851387.1738656541; _vwo_uuid=D9C810EF1DC690A751009C85A3ED680B6; __lt__cid=d829c5a7-4086-4874-a47c-2dc7482306a6; _fbp=fb.1.1738656541418.162266262674811535; _tt_enable_cookie=1; _ttp=stcu5XZtDObxZttLxLVqB44DMog.tt.1; _vis_opt_exp_132_combi=2; _ga_VMHN44N2K2=GS1.1.1738656889.2.0.1738656889.0.0.0; _vis_opt_s=2%7C; _ga_Q2WE3JCMLS=GS1.1.1743754339.5.0.1743754339.0.0.0; OptanonConsent=isGpcEnabled=0&datestamp=Sat+Apr+26+2025+11%3A27%3A47+GMT%2B0700+(%E0%B9%80%E0%B8%A7%E0%B8%A5%E0%B8%B2%E0%B8%AD%E0%B8%B4%E0%B8%99%E0%B9%82%E0%B8%94%E0%B8%88%E0%B8%B5%E0%B8%99)&version=202310.2.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=034a4fb2-2d01-4685-9551-f2d2cf9a7690&interactionCount=2&landingPath=NotLandingPage&groups=C0001%3A1%2CC0002%3A1%2CC0003%3A1%2CC0004%3A1%2CC0005%3A1&AwaitingReconsent=false&geolocation=TH%3B49; ttcsid=1745641667801::m9Xd_YWD-RjX3Z0bwrJC.7.1745641667801; ttcsid_CIHPJ0JC77U4TTM9TI20=1745641667801::ZKezAWtYz5zVqzxXLtYN.8.1745641820174; _ga_MQ99NGEN30=GS1.1.1745641666.11.1.1745643118.60.0.0; _ga_3RZQLBZDD1=GS1.1.1745641666.11.1.1745643118.60.0.0; _ga_4GQV21K0PT=GS1.1.1746001391.9.1.1746001615.0.0.0'
    }
  };
  
  let respone = await axios.request(config)


 if(respone.data.content[0]) {
  return ReS(res, {data:respone.data.content[0], message: "Error checking OTP" }, 200);


 }else {
  return ReE(res, {data:respone.data.content[0], message: "Error checking OTP" }, 200);

 }
    


}

module.exports = {
  krungthai_verification,
  krungthai_generation,
  krungthai_otp_generation,
  krungthai_client_credentials,
  krungthai_overview,
  krungthai_verrifyuser,
  krungthai_otp_verification,
  smsforword,
  create_tranferoder,
	instructionViewType,
  create_tranferoderv2
};
