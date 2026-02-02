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
const krungthaiclass = require("./krungthai.class");
const krungthaiclass_web = require("./krungthaiweb.class");

var moment = require("moment");

require("moment/locale/th");

const krungthai = new krungthaiclass();

const krungthaiweb = new krungthaiclass_web();

const TransferOrderRequest = require("../../path/to/your/project/models/TransferOrderRequest");
const { cond } = require("lodash");

// Removed duplicate import: const krungthaiclass = require("./krungthai.class");
async function getCurrentDateTimes() {
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

  return chackotp_forword2.accessToken;
}
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

const summary = async function (req, res) {
  try {
    // 1. ดึง access token แบบ asynchronous
    // let apiToken = "7c31fe0a-60cf-4877-98c2-c34d75bb6875";
    //   const devicesid = "76088583-0a03-4541-92be-364acf9ce599-devc";

    let get_profiles = await krungthai.overview_app(req.body.accessToken);
    // 3. ตอนนี้คุณสามารถใช้ instance 'krungthai' ได้แล้ว
    // ตัวอย่าง: เรียก method overview()
    // const overviewData = await krungthai.overview({ accessToken: accessToken }); // ส่ง token ไปยัง method ถ้าต้องการ

    if (get_profiles == "500") {
      return ReE(
        res,
        {
          data: get_profiles,
          message: "Token retrieved and class initialized (example)",
        },
        200
      ); // ตัวอย่าง response
    }
    return ReS(
      res,
      {
        data: get_profiles,
        message: "SUCCESSFULLLY",
      },
      200
    ); // ตัวอย่าง response
  } catch (error) {
    console.error("Error in summary function:", error);
    return ReE(
      res,
      { message: "Failed to process request", error: error.message },
      500
    );
  }
};
const create_tranferOder = async function (req, res) {
  try {
    const {
      accessToken,

      newPayeeNameEn,
      newPayeeNameTh,
      newPayeeBankName,
      newPayeeBankCode,
      newPayeeAccountNo,
      amount,
      // Add any other required fields here
    } = req.body;

    // Comprehensive input validation
    const requiredFields = [
      "accessToken",
      "newPayeeNameEn",
      "newPayeeNameTh",
      "newPayeeBankName",
      "newPayeeBankCode",
      "newPayeeAccountNo",
      "amount",
    ];

    const missingFields = requiredFields.filter((field) => !req.body[field]);

    if (missingFields.length > 0) {
      return ReE(
        res,
        {
          message: `Missing required fields: ${missingFields.join(", ")}`,
        },
        400
      );
    }

    // Validate amount (assuming it should be a positive number)
    if (isNaN(amount) || parseFloat(amount) <= 0) {
      return ReE(
        res,
        { message: "Invalid amount. Must be a positive number." },
        400
      );
    }

    // Fetch user profile (if needed)
    const userProfile = await krungthai.chack_info_accapp(accessToken);

    // console.log(userProfile)

    if (!userProfile) {
      return ReE(res, { message: "Failed to fetch user profile" }, 404);
    }

    // Prepare transfer order data
    const transferOrderData = {
      fromAccountRefId: userProfile.content[0].accountRefId,
      newPayeeNameEn,
      newPayeeNameTh,
      newPayeeNickname: "", // You might want to make this optional in req.body
      newPayeeBankName,
      newPayeeBankCode,
      newPayeeAccountNo,
      amount: amount,
      isSaveAsBeneficiary: false, // You might want to make this optional in req.body
      // Add any other necessary fields here
    };

    // Create transfer order
    const transferOrderResult = await krungthai.create_tranferoderapp(
      accessToken,
      transferOrderData,
      req.body.Device_Platform,
      req.body.devicesid,
      req.body.Device_Model,
      req.body.Version
    );

    // console.log(transferOrderResult)
    if (!transferOrderResult) {
      return ReE(res, { message: "Failed to create transfer order" }, 500);
    }

    const getdata_odertranferapps = await krungthai.getdata_odertranferapp(
      accessToken,
      transferOrderResult.transferOrderId,
      req.body.devicesid,
      req.body.Device_Platform,
      req.body.Device_Version,
      req.body.Device_Model
    );

    // console.log(getdata_odertranferapps)
    //console.log("getdata_odertranferapps", getdata_odertranferapps)

    let datatran2 = {
      fromAccountRefId: userProfile.content[0].accountRefId,
      amount: amount,
      effectiveDate: moment().format("YYYY-MM-DD"),
    };

    let dataacc_servers = await krungthai.generateserviceapp(
      accessToken,
      datatran2,
      transferOrderResult
    );
    // console.log("dataacc_servers", dataacc_servers)

    let dataacc_serversservice_tranfers = await krungthai.service_tranfersapp(
      accessToken
    );

    // console.log("dataacc_serversservice_tranfers", dataacc_serversservice_tranfers)

    let subService = "";
    if (newPayeeBankCode == "006") {
      subService = "TRANSFER_3_PARTY";
    } else {
      subService = "TRANSFER_OTHER_BANK";
    }

    let body33 = {
      beneficiaryId: null,
      fromAccountRefId:
        dataacc_serversservice_tranfers.accounts[0].accountRefId,
      fromAccountNo: dataacc_serversservice_tranfers.accounts[0].accountNo,
      newPayeeNameEn: newPayeeNameEn,
      newPayeeNameTh: newPayeeNameTh,
      newPayeeNickname: null,
      newPayeeBankCode: newPayeeBankCode,
      newPayeeAccountNo: newPayeeAccountNo,
      toAccountRefId: null,
      isSavedAsBeneficiary: false,
      amount: amount,
      effectiveDate: moment().format("YYYY-MM-DD"),
      isRecurringEnabled: false,
      recurringFrequency: null,
      noOfOccurrence: 0,
      subService: subService,
      transferFee: 0,
      feeChargeTo: null,
      note: null,
      isWithholdingTaxEnabled: false,
      whtPayeeName: null,
      whtTaxId: null,
      whtAddress: null,
      whtProvinceCode: null,
      whtDistrictCode: null,
      whtSubDistrictCode: null,
      whtPostcode: null,
      whtCertificateNo: null,
      whtSequence: null,
      whtForm: null,
      whtPayType: null,
      invoices: [],
      isNotificationEnabled: false,
      notificationEmailAddress: null,
      notificationSmsMobileNo: null,
      branchCode: null,
    };

    // console.log(body33)

    let dataacc_server = await krungthai.itemtranferapp(
      accessToken,
      body33,
      transferOrderResult,
      req.body.devicesid,
      req.body.Device_Platform,
      req.body.Device_Version,
      req.body.Device_Model
    );
    // console.log("dataacc_server", dataacc_server)

    let dataacc_tRANSFER_OTHER_BANK = await krungthai.transaction_tranferapp(
      accessToken
    );

    // console.log("dataacc_tRANSFER_OTHER_BANK", dataacc_tRANSFER_OTHER_BANK)

    let pre_confirmations = await krungthai.pre_confirmationapp(
      accessToken,
      transferOrderResult.transferOrderId
    );

    // console.log(pre_confirmations)

    const data_postpin = {
      mfaRefId: pre_confirmations.mfaRefId,
      mfaMethod: pre_confirmations.mfaMethods[0],
    };
    let generateOtptranferapps = await krungthai.generateOtptranferapp(
      accessToken,
      data_postpin
    );

    let loginResults = generateOtptranferapps.params;
    let verification_passwordssss = await krungthai.profile_devices(
      req.body.accessToken,
      req.body.devicesid
    );

    const pinEncrypts = await pinEncrypt(
      loginResults.e2eeSid,
      loginResults.serverRandom,
      req.body.pin,
      loginResults.oaepHashAlgo,
      loginResults.pubKey
    );

    let datapostv2 = JSON.stringify({
      mfaRefId: pre_confirmations.mfaRefId,
      mfaPassphrase: pinEncrypts,
    });

    const verification_passwords = await krungthai.verification_passwordv3(
      datapostv2,
      accessToken
      //devicesid
    );

    const confirmationapps = await krungthai.confirmationapp(
      req.body.accessToken,
      transferOrderResult.transferOrderId,
      req.body.devicesid,
      req.body.Device_Platform,
      req.body.Device_Version,
      req.body.Device_Model
    );

    const datacon = await krungthai.getdata_transfer_transfer_order(
      req.body.accessToken,
      transferOrderResult.transferOrderId
    );

    // const verification_passwords = await krungthai.verification_passwordv2(
    //   datapostv2,
    //   accessToken,
    //   req.body.devicesid
    // );

    //     //    let dataacc_serversservice_tranfers = await krungthai.service_tranfers(accessToken);

    // console.log(confirmationapps)

    // Return successful response
    return ReS(
      res,
      {
        message: "Transfer order created successfully",
        instruction: confirmationapps,
        data: datacon,
      },
      200
    );
  } catch (error) {
    console.error("Error in create_tranferOder function:", error);
    return ReE(
      res,
      {
        message: "Failed to create transfer order",
        error: error.message,
      },
      500
    );
  }
};

const getdata_profile = async function (req, res) {
  try {
    // 1. ดึง access token แบบ asynchronous
    // let apiToken = "7c31fe0a-60cf-4877-98c2-c34d75bb6875";
    //   const devicesid = "76088583-0a03-4541-92be-364acf9ce599-devc";

    let get_profiles = await krungthai.getdata_profile(req.body.accessToken);
    // 3. ตอนนี้คุณสามารถใช้ instance 'krungthai' ได้แล้ว
    // ตัวอย่าง: เรียก method overview()
    // const overviewData = await krungthai.overview({ accessToken: accessToken }); // ส่ง token ไปยัง method ถ้าต้องการ

    if (get_profiles == "500") {
      return ReE(
        res,
        {
          data: get_profiles,
          message: "Token retrieved and class initialized (example)",
        },
        200
      ); // ตัวอย่าง response
    }
    return ReS(
      res,
      {
        data: get_profiles,
        message: "SUCCESSFULLLY",
      },
      200
    ); // ตัวอย่าง response
  } catch (error) {
    console.error("Error in summary function:", error);
    return ReE(
      res,
      { message: "Failed to process request", error: error.message },
      500
    );
  }
};

const krungthai_verrifyusers = async function (req, res) {
  try {
    const { bankCode, accountNumber, accessToken } = req.body;

    // Input validation
    if (!bankCode || !accountNumber || !accessToken) {
      return ReE(
        res,
        {
          message:
            "Missing required fields: bankCode, accountNumber, or accessToken",
        },
        400
      );
    }

    // Prepare data for verification
    const verificationData = {
      bankcode: bankCode,
      accnumber: accountNumber,
    };

    // Verify bank code and account number
    const verificationResult = await krungthai.verifyBankCode(
      accessToken,
      verificationData
    );

    if (!verificationResult) {
      return ReE(
        res,
        { message: "Verification failed or returned no data" },
        404
      );
    }

    // Log the result for debugging (consider removing in production)
    console.log("Bank verification result:", verificationResult);

    // Return successful response
    return ReS(
      res,
      {
        message: "Bank account verification successful",
        data: verificationResult,
      },
      200
    );
  } catch (error) {
    console.error("Error in krungthai_verifyUser function:", error);
    return ReE(
      res,
      {
        message: "Failed to verify bank account",
        error: error.message,
      },
      500
    );
  }
};
const login_auth = async function (req, res) {
  if (!req.body.devicesid) {
    return ReE(res, { message: "Username is required" }, 400);
  }

  const devicesid = req.body.devicesid;
  const Device_Model = req.body.Device_Model;
  const Device_Version = req.body.Device_Version;
  const Device_Platform = req.body.Device_Platform;

  const loginResult = await krungthai.getClientCredentialsToken(
    req.body.devicesid,
    Device_Platform,
    Device_Version,
    Device_Model
  );

  // console.log(loginResult)

  const access_tokens = loginResult.access_token;

  const loginResults = await krungthai.generatePinKey(
    access_tokens,
    req.body.devicesid,
    Device_Platform,
    Device_Version,
    Device_Model
  );

  const pinEncrypts = await pinEncrypt(
    loginResults.e2eeSid,
    loginResults.serverRandom,
    req.body.pin,
    loginResults.oaepHashAlgo,
    loginResults.pubKey
  );

  let datapostv2 = JSON.stringify({
    // companyId: loginResult.profile.companyId,
    // userId: loginResult.profile.userId,
    encryptedPassword: pinEncrypts,
    e2eeSid: loginResults.e2eeSid,
  });
  const verification_passwords = await krungthai.verification_passwordv2(
    datapostv2,
    access_tokens,
    devicesid
  );

  const profile_devices_data = await krungthai.profile_devices(
    access_tokens,
    devicesid
  );

  const deviceName = profile_devices_data.deviceName;

  // const loginResults_pin = await krungthai.generatePinKey(access_tokens,devicesid, req.body.Device_Platform, req.body.Device_Version, deviceName)

  // const passwordEncrypts = await pinEncrypt(
  //   loginResults.e2eeSid,
  //   loginResults.serverRandom,
  //   req.body.pin,
  //   loginResults.oaepHashAlgo,
  //   loginResults.pubKey
  // );

  // let datasetpin = {
  //   e2eeSid: loginResults_pin.e2eeSid,
  //   encryptedPin: passwordEncrypts,
  //   fcmToken: profile_devices_data.fcmToken,
  //   transactionToken: verification_passwords.transactionToken,
  //   //e2eeSid:"",

  // }

  // const auth_setpins = await krungthai.auth_setpin(access_tokens,datasetpin,devicesid, req.body.Device_Platform, req.body.Device_Version, deviceName)

  return ReS(
    res,
    {
      data: verification_passwords,
      data2: deviceName,
      profile_devices: profile_devices_data,
      message: "Successfully",
    },
    200
  );

  // console.log(verification_passwords);
  // // console.log(loginResults);
  // //  console.log(loginResults);
  // console.log(loginResults);

  // const verification_passwords = await krungthai.verification_passwordv2(
  //   datapostv2,
  //   access_tokens,
  //   devicesid
  // );

  // if (verification_passwords) {
  //   return ReS(
  //     res,
  //     { data: verification_passwords,data2:loginResult, message: "Successfully" },
  //     200
  //   );
  // } else {
  //   return ReE(res, { message: "Failed to verify" }, 500);
  // }
};

const getClientCredentialsToken = async function (req, res) {
  const chackotp_forword = req.body;
  const loginResult = await krungthaiweb.getClientCredentialsToken();

  const access_tokens = loginResult.access_token;

  // console.log(access_tokens);


  let verification_passwords = ""

  const loginResults = await krungthaiweb.generatePasswordKey(access_tokens);

  const pinEncrypts = await pinEncrypt(
    loginResults.e2eeSid,
    loginResults.serverRandom,
    chackotp_forword.password,
    loginResults.oaepHashAlgo,
    loginResults.pubKey
  );

  let datapostv2 = JSON.stringify({
    companyId: chackotp_forword.companyId,
    userId: chackotp_forword.userId,
    encryptedPassword: pinEncrypts,
    e2eeSid: loginResults.e2eeSid,
  });

    verification_passwords = await krungthaiweb.verification_password(
    datapostv2
  );


  if(verification_passwords.success == false) {

   return ReE(
    res,
    { data: verification_passwords, message: "Error" },
    200
  );


  }



  verification_passwords = verification_passwords.data

 // console.log(verification_passwords)

  // verification_password

  let dataverification = JSON.stringify({
    deliveryMethod: "OTP_SMS",
    userId: chackotp_forword.userId,
    companyId: chackotp_forword.companyId,
    transactionToken: verification_passwords.transactionToken,
  });

  const verification_generateOtp = await krungthaiweb.generateOtp(
    dataverification
  );



  // if(verification_generateOtp)

  let dataverifyOtp = {
    otp: verification_generateOtp.otpRefNo, // This seems to be the Reference, not the OTP itself
    tokenUuid: verification_generateOtp.tokenUuid,
    transactionToken: verification_passwords.transactionToken,
  };

  console.log("Data for OTP verification step:", dataverifyOtp);
  return ReS(
    res,
    { data: dataverifyOtp, data2: loginResult, message: "Successfully" },
    200
  );
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
const confirmation_otp = async function (req, res) {
  let body = req.body;

  let datapost = {
    otp: body.otp,
    tokenUuid: body.tokenUuid,
    transactionToken: body.transactionToken,
    access_tokens: body.access_tokens,
  };

  const verification_passw = await verrify_otps(datapost);

  // console.log(verification_passw.data)

  let bodd = {
    transactionToken: body.transactionToken,
  };

  const transactionToken = await krungthaiweb.client_credentials(bodd);

  let get_profiles = await krungthaiweb.getdata_get_profile(
    transactionToken.access_token
  );

  return ReS(
    res,
    {
      data: get_profiles.devices,
      datalogin: transactionToken,
      message: "Successfully",
    },
    200
  );
};



const instructionViewType = async function (req, res) {



  const verification_passwords = await krungthai.instructionViewType(
    req.body.accessToken,
    req.body.instructionRefNo
  );

  return ReS(
    res,
    { data: verification_passwords, message: "Successfully" },
    200
  );
};

const profile_devices = async function (req, res) {
  const verification_passwords = await krungthai.profile_devices(
    req.body.accessToken,
    req.body.devicesid
  );

  return ReS(
    res,
    { data: verification_passwords, message: "Successfully" },
    200
  );
};
const get_transaction_history = async function (req, res) {

  try {
    const userProfile = await krungthai.chack_info_accapp(req.body.accessToken);

    // let get_profiles = await krungthai.getdata_profile(req.body.accessToken);

    let transactionType = "deposit"
    let maxAmount = req.body.maxAmount ? req.body.maxAmount : 1000000

    const verification_passwords = await krungthai.get_transaction_history(
      req.body.accessToken,
      userProfile.content[0].accountRefId, transactionType, req.body.page ? req.body.page : 10, maxAmount
    );

    return ReS(
      res,
      { data: verification_passwords, message: "Successfully" },
      200
    );
  } catch (error) {
    //console.log(error.response)
    // Log detailed error if available
    if (error.response) {
      return ReE(
        res,
        { message: error.response.data.message },
        200
      );
      // return ("data:", error.response.status);
      //  return("Headers:", error.response.headers);
    }
    throw error;
  }
};



const profile_refresh_token = async function (req, res) {
  const verification_passwords = await krungthai.profile_refresh_token(
    req.body.accessToken,
    req.body.devicesid,
    req.body.Device_Platform,
    req.body.Device_Version,
    req.body.Device_Model
  );

  // const verification_passwordss = await krungthai.profile_biometric_client_credentials(req.body.accessToken, req.body.devicesid,req.body.Device_Platform ,req.body.Device_Version, req.body.Device_Model,verification_passwords.biometricUuid)

  return ReS(
    res,
    { data: verification_passwords, message: "Successfully" },
    200
  );
};
const pinEncrypt_password = async function (req, res) {



   let loginResults = req.body



  const pinEncrypts = await pinEncrypt(
    loginResults.e2eeSid,
    loginResults.serverRandom,
    loginResults.password,
    loginResults.oaepHashAlgo,
    loginResults.pubKey
  );



  // const verification_passwordss = await krungthai.profile_biometric_client_credentials(req.body.accessToken, req.body.devicesid,req.body.Device_Platform ,req.body.Device_Version, req.body.Device_Model,verification_passwords.biometricUuid)

  return ReS(
    res,
    { pinEncrypts},
    200
  );
};

const pinEncrypt_pin = async function (req, res) {


  const pinEncrypts = await pinEncrypt(
    loginResults.e2eeSid,
    loginResults.serverRandom,
    chackotp_forword.password,
    loginResults.oaepHashAlgo,
    loginResults.pubKey
  );


  const verification_passwords = await krungthai.profile_refresh_token(
    req.body.accessToken,
    req.body.devicesid,
    req.body.Device_Platform,
    req.body.Device_Version,
    req.body.Device_Model
  );

  // const verification_passwordss = await krungthai.profile_biometric_client_credentials(req.body.accessToken, req.body.devicesid,req.body.Device_Platform ,req.body.Device_Version, req.body.Device_Model,verification_passwords.biometricUuid)

  return ReS(
    res,
    { data: verification_passwords, message: "Successfully" },
    200
  );
};





const profile_resetpin = async function (req, res) {
  let get_profiles = await krungthai.getdata_profile(req.body.accessToken);
  // let get_profiles = await krungthai.profile_devices(req.body.accessToken, req.body.devicesid)

  const get_profiles_devicesids = await krungthai.profile_devicesverification(
    req.body.accessToken,
    get_profiles.devices[0].deviceId
  );

  //   const devicesid = get_profiles_devicesid.deviceId
  //   const fcmToken = get_profiles_devicesid.fcmToken
  //   const deviceName = get_profiles_devicesid.deviceName

  //   // const datareset = {
  //   //   companyId:get_profiles.companyId,
  //   //   e2eeSid:e2eeSid,
  //   //   encryptedPassword:encryptedPassword,
  //   //   userId:userId,
  //   // }

  //   const pinEncrypts = await pinEncrypt(
  //     loginResults.e2eeSid,
  //     loginResults.serverRandom,
  //     req.body.pin,
  //     loginResults.oaepHashAlgo,
  //     loginResults.pubKey
  //   );

  //   let datapostv2 = JSON.stringify({
  //     companyId: get_profiles.companyId,
  //     e2eeSid: loginResults.e2eeSid,
  //     encryptedPassword: pinEncrypts,
  //     userId: get_profiles.userId
  //     // userId: get_profiles.userId,
  //     // encryptedPassword: pinEncrypts,
  //     // e2eeSid: loginResults.e2eeSid,
  //   });
  //  console.log(datapostv2)

  //   const reset_verifications = await krungthai.reset_verification(req.body.accessToken, datapostv2, req.body.devicesid, req.body.Device_Platform, req.body.Device_Version, req.body.Device_Model)

  // console.log(get_profiles)
  //    console.log(reset_verifications)

  // const verification_passwordss = await krungthai.profile_biometric_client_credentials(req.body.accessToken, req.body.devicesid,req.body.Device_Platform ,req.body.Device_Version, req.body.Device_Model,verification_passwords.biometricUuid)

  // let datapost = {
  //   fcmToken: verification_passwords.fcmToken
  // }

  // const verification_profile_resetpin = await krungthai.notification_registration(req.body.accessToken, datapost, req.body.devicesid, req.body.Device_Platform, req.body.Device_Version, req.body.Device_Model)

  return ReS(
    res,
    { data: get_profiles_devicesids, message: "Successfully" },
    200
  );
};

module.exports = {
  summary,
  getClientCredentialsToken,
  getdata_profile,
  krungthai_verrifyusers,
  create_tranferOder,
  profile_devices,
  profile_refresh_token,
  profile_resetpin,
  login_auth,
  confirmation_otp,
  instructionViewType,
  get_transaction_history,
  pinEncrypt_password,
  pinEncrypt_pin
};
