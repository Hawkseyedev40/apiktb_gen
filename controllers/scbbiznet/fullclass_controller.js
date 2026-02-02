var { BankAccount, Logreq } = require("../../models");
const axios = require("axios");
const { to, ReE, ReS, TE } = require("../../services/util.service");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const bcrypt = require("bcrypt");
//const Apiscb_helper = require("../../helpers/login.helpers");
const jwt = require("jsonwebtoken");
const CONFIG = require("../../config/config.json");
const agent = "Android/14;FastEasy/3.89.0/9217";
const tilesVersion = "90";
const ame2ee = require("./ame2ee");
var url = require("url");
// const app = require("../../services/app.service");
//const config = require("../../config/app.json")[app["env"]];
//const date = require("date-and-time");
//const now = new Date();
var md5 = require("md5");
//const value = date.format(now, "HH:mm:ss");
const multer = require("multer");
const Jimp = require("jimp");
const jsQr = require("jsqr");
var moment = require("moment");
require("moment/locale/th");

const scbeasy = require("./classscb");
const scb = new scbeasy();

const checkAuthorized = async function (req, res) {
  const transactions = await scb.checkAuthorized(req.body.api_auth);

  if (transactions.data.status.code == "1000") {
    return ReS(res, { data: transactions.data, message: "successfully" }, 200);
  } else {
    return ReE(res, { data: transactions.data, message: "error" }, 200);
  }

  // console.log(transactions.data.status.code);
};
const summary = async function (req, res) {
  if (!req.body.api_auth) {
    return ReE(res, { message: "api_auth is required" }, 200);
  }
  if (typeof req.body.api_auth !== "string") {
    return ReE(res, { message: "api_auth must be a string" }, 200);
  }

  const transactions = await scb.checkAuthorized(req.body.api_auth);
  if (transactions.data.status.code == "1000") {
    let accountNo = transactions.data.depositList[0].accountNo;

    //  console.log(accountNo)
    const summary = await scb.summary(accountNo, req.body.api_auth);

    return ReS(res, { data: summary.data, message: "successfully" }, 200);
  } else {
    return ReE(res, { data: transactions.data, message: "error" }, 200);
  }
};
const checkDevices = async function (req, res) {};

const history = async function (req, res) {
  if (!req.body.accountNo) {
    return ReE(res, { message: "accountNo is required" }, 200);
  }
  if (typeof req.body.accountNo !== "string") {
    return ReE(res, { message: "accountNo must be a string" }, 200);
  }

  if (!req.body.startdate) {
    return ReE(res, { message: "startdate is required" }, 200);
  }
  if (typeof req.body.startdate !== "string") {
    return ReE(res, { message: "startdate must be a string" }, 200);
  }

  if (!req.body.enddate) {
    return ReE(res, { message: "enddate is required" }, 200);
  }
  if (typeof req.body.enddate !== "string") {
    return ReE(res, { message: "enddate must be a string" }, 200);
  }

  if (!req.body.api_auth) {
    return ReE(res, { message: "api_auth is required" }, 200);
  }
  if (typeof req.body.api_auth !== "string") {
    return ReE(res, { message: "api_auth must be a string" }, 200);
  }

 

  // let Logreqs = await Logreq.findOne({
  //   where: {
  //     devices: req.body.deviceId,
  //   },
  // })

  // let old_data = JSON.parse(Logreqs.old_data)
  // let datajson = JSON.parse(old_data)

  //console.log(datajson)

  const transactions = await scb.transactions(
    req.body.accountNo,
    req.body.startdate,
    req.body.enddate,
    req.body.api_auth,
    req.body.nextPageNumber ? req.body.nextPageNumber :1
  );

  if (transactions.data.status.code == 1000) {
    return ReS(res, { data: transactions.data, message: "successfully" }, 200);
  } else {
    return ReE(
      res,
      { data: transactions.data, message: "nextPageNumber must be a string" },
      200
    );
  }
};
const transfer_verification = async function (req, res) {
  console.log("Request Body:", req.body); // Log the entire request body

  // Check for required fields and their types
  if (!req.body.accountTo) {
    return ReE(res, { message: "accountTo is required" }, 400);
  }
  if (typeof req.body.accountTo !== "string") {
    return ReE(res, { message: "accountTo must be a string" }, 400);
  }

  if (!req.body.amount) {
    return ReE(res, { message: "amount is required" }, 400);
  }
  if (
    typeof req.body.amount !== "string" &&
    typeof req.body.amount !== "number"
  ) {
    return ReE(res, { message: "amount must be a string or number" }, 400);
  }
  // Convert amount to string if it's a number
  const amount =
    typeof req.body.amount === "number"
      ? req.body.amount.toString()
      : req.body.amount;

  if (!req.body.accountNo) {
    return ReE(res, { message: "accountNo is required" }, 400);
  }
  if (typeof req.body.accountNo !== "string") {
    return ReE(res, { message: "accountNo must be a string" }, 400);
  }

  if (!req.body.accountToBankCode) {
    return ReE(res, { message: "accountToBankCode is required" }, 400);
  }
  if (typeof req.body.accountToBankCode !== "string") {
    return ReE(res, { message: "accountToBankCode must be a string" }, 400);
  }

  if (!req.body.api_auth) {
    return ReE(res, { message: "api_auth is required" }, 400);
  }
  if (typeof req.body.api_auth !== "string") {
    return ReE(res, { message: "api_auth must be a string" }, 400);
  }

  // Determine transferType
  let transferType = "";
  if (req.body.accountToBankCode === "014") {
    transferType = "3RD";
  } else {
    transferType = "ORFT";
  }

  // Call the transferverification function
  try {
    const transferverification = await scb.transferverification(
      req.body.accountTo,
      amount,
      transferType,
      req.body.accountNo,
      req.body.accountToBankCode,
      req.body.api_auth
    );
    return ReS(
      res,
      { data: transferverification.data, message: "successfully" },
      200
    );
  } catch (error) {
    console.error("Error in transfer_verification:", error);
    return ReE(
      res,
      {
        message: "An error occurred during transfer verification",
        error: error,
      },
      500
    );
  }
};
const confirmation_verification = async function (req, res) {
  console.log("Request Body:", req.body); // Log the entire request body

  // Check for required fields and their types
  if (!req.body.accountNo) {
    return ReE(res, { message: "accountNo is required" }, 400);
  }
  if (typeof req.body.accountNo !== "string") {
    return ReE(res, { message: "accountNo must be a string" }, 400);
  }

  if (!req.body.accountTo) {
    return ReE(res, { message: "accountTo is required" }, 400);
  }
  if (typeof req.body.accountTo !== "string") {
    return ReE(res, { message: "accountTo must be a string" }, 400);
  }

  if (!req.body.accountToName) {
    return ReE(res, { message: "accountToName is required" }, 400);
  }
  if (typeof req.body.accountToName !== "string") {
    return ReE(res, { message: "accountToName must be a string" }, 400);
  }

  if (!req.body.amount) {
    return ReE(res, { message: "amount is required" }, 400);
  }
  if (
    typeof req.body.amount !== "string" &&
    typeof req.body.amount !== "number"
  ) {
    return ReE(res, { message: "amount must be a string or number" }, 400);
  }
  // Convert amount to string if it's a number
  const amount =
    typeof req.body.amount === "number"
      ? req.body.amount.toString()
      : req.body.amount;

  if (!req.body.transactionToken) {
    return ReE(res, { message: "transactionToken is required" }, 400);
  }
  if (typeof req.body.transactionToken !== "string") {
    return ReE(res, { message: "transactionToken must be a string" }, 400);
  }

  if (!req.body.accountToBankCode) {
    return ReE(res, { message: "accountToBankCode is required" }, 400);
  }
  if (typeof req.body.accountToBankCode !== "string") {
    return ReE(res, { message: "accountToBankCode must be a string" }, 400);
  }

  if (!req.body.transferType) {
    return ReE(res, { message: "transferType is required" }, 400);
  }
  if (typeof req.body.transferType !== "string") {
    return ReE(res, { message: "transferType must be a string" }, 400);
  }

  if (!req.body.accountFromName) {
    return ReE(res, { message: "accountFromName is required" }, 400);
  }
  if (typeof req.body.accountFromName !== "string") {
    return ReE(res, { message: "accountFromName must be a string" }, 400);
  }

  if (!req.body.api_auth) {
    return ReE(res, { message: "api_auth is required" }, 400);
  }
  if (typeof req.body.api_auth !== "string") {
    return ReE(res, { message: "api_auth must be a string" }, 400);
  }

  try {
    const transferconfirmation = await scb.transferconfirmation(
      req.body.accountNo,
      req.body.accountTo,
      req.body.accountToName,
      req.body.pccTraceNo,
      amount,
      req.body.feeType,
      req.body.sequence,
      req.body.transactionToken,
      req.body.accountToBankCode,
      req.body.terminalNo,
      req.body.transferType,
      req.body.accountFromName,
      req.body.api_auth
    );

    if (
      transferconfirmation.data.status.code === 1000 ||
      transferconfirmation.data.status.code === 8101 ||
      transferconfirmation.data.status.code === 8102
    ) {
      return ReS(
        res,
        { data: transferconfirmation.data, message: "successfully" },
        200
      );
    } else {
      return ReE(
        res,
        { data: transferconfirmation.data, message: "error" },
        200
      );
    }
  } catch (error) {
    console.error("Error in confirmation_verification:", error);
    return ReE(
      res,
      {
        message: "An error occurred during transfer confirmation",
        error: error,
      },
      500
    );
  }
};

const allconfirmation_verification = async function (req, res) {
  console.log("Request Body:", req.body); // Log the entire request body

  // Check for required fields and their types
  if (!req.body.accountTo) {
    return ReE(res, { message: "accountTo is required" }, 400);
  }
  if (typeof req.body.accountTo !== "string") {
    return ReE(res, { message: "accountTo must be a string" }, 400);
  }

  if (!req.body.amount) {
    return ReE(res, { message: "amount is required" }, 400);
  }
  if (
    typeof req.body.amount !== "string" &&
    typeof req.body.amount !== "number"
  ) {
    return ReE(res, { message: "amount must be a string or number" }, 400);
  }
  // Convert amount to string if it's a number

  if (!req.body.accountNo) {
    return ReE(res, { message: "accountNo is required" }, 400);
  }
  if (typeof req.body.accountNo !== "string") {
    return ReE(res, { message: "accountNo must be a string" }, 400);
  }

  if (!req.body.accountToBankCode) {
    return ReE(res, { message: "accountToBankCode is required" }, 400);
  }
  if (typeof req.body.accountToBankCode !== "string") {
    return ReE(res, { message: "accountToBankCode must be a string" }, 400);
  }

  if (!req.body.api_auth) {
    return ReE(res, { message: "api_auth is required" }, 400);
  }
  if (typeof req.body.api_auth !== "string") {
    return ReE(res, { message: "api_auth must be a string" }, 400);
  }

  // Determine transferType
  let transferType = "";
  if (req.body.accountToBankCode === "014") {
    transferType = "3RD";
  } else {
    transferType = "ORFT";
  }

  try {
    let amount =
      typeof req.body.amount === "number"
        ? req.body.amount.toString()
        : req.body.amount;

    const transferverification = await scb.transferverification(
      req.body.accountTo,
      amount,
      transferType,
      req.body.accountNo,
      req.body.accountToBankCode,
      req.body.api_auth
    );

    // console.log(transferverification.data);
    if (
      transferverification.data.status.code === 1000 ||
      transferverification.data.status.code === 1899 ||
      transferverification.data.status.code === 5009 ||
      transferverification.data.status.code === 1999 ||
      transferverification.data.status.code === 426
    ) {
      const transferconfirmation = await scb.transferconfirmation(
        req.body.accountNo,
        req.body.accountTo,
        transferverification.data.data.accountToName,
        transferverification.data.data.pccTraceNo,
        amount,
        transferverification.data.data.feeType,
        transferverification.data.data.sequence,
        transferverification.data.data.transactionToken,
        req.body.accountToBankCode,
        transferverification.data.data.terminalNo,
        transferType,
        transferverification.data.data.accountFromName,
        req.body.api_auth
      );
      if (
        transferconfirmation.data.status.code === 1000 ||
        transferconfirmation.data.status.code === 8101 ||
        transferconfirmation.data.status.code === 8102
      ) {
        return ReS(
          res,
          { data: transferconfirmation.data, message: "successfully" },
          200
        );
      } else {
        return ReE(
          res,
          { data: transferconfirmation.data, message: "error" },
          200
        );
      }
    } else {
      return ReE(
        res,
        { data: transferverification.data, message: "error" },
        200
      );
    }
  } catch (error) {
    console.error("Error in allconfirmation_verification:", error);
    return ReE(
      res,
      { message: "Error in allconfirmation_verification", error: error },
      500
    );
  }
};




const transfer_promtpay = async function (req, res) {
  console.log("Request Body:", req.body); // Log the entire request body

  // Check for required fields and their types
  if (!req.body.amount) {
    return ReE(res, { message: "amount is required" }, 400);
  }
  if (typeof req.body.amount !== "string" && typeof req.body.amount !== "number") {
    return ReE(res, { message: "amount must be a string or number" }, 400);
  }
  // Convert amount to string if it's a number
  const amount = typeof req.body.amount === "number" ? req.body.amount.toString() : req.body.amount;

  if (!req.body.accountNo) {
    return ReE(res, { message: "accountNo is required" }, 400);
  }
  if (typeof req.body.accountNo !== "string") {
    return ReE(res, { message: "accountNo must be a string" }, 400);
  }

  if (!req.body.phone) {
    return ReE(res, { message: "phone is required" }, 400);
  }
  if (typeof req.body.phone !== "string") {
    return ReE(res, { message: "phone must be a string" }, 400);
  }

  if (!req.body.api_auth) {
    return ReE(res, { message: "api_auth is required" }, 400);
  }
  if (typeof req.body.api_auth !== "string") {
    return ReE(res, { message: "api_auth must be a string" }, 400);
  }

  try {
    const transferpromtpay = await scb.transferpromtpay(
      amount,
      req.body.accountNo,
      req.body.phone,
      req.body.api_auth
    );

    if (transferpromtpay.data.status.code === 1000) {
      return ReS(res, { data: transferpromtpay.data, message: "successfully" }, 200);
    } else {
      return ReE(res, { data: transferpromtpay.data, message: "error" }, 200);
    }
  } catch (error) {
    console.error("Error in transfer_promtpay:", error);
    return ReE(res, { message: "An error occurred during transfer promtpay", error: error }, 500);
  }
};

const transfer_confirmpromtpay = async function (req, res) {


  const confirmpromtpay = await scb.confirmpromtpay(
    req.body.amount,
    req.body.accountNo,
    req.body.accountTo,
    req.body.accountToName,
    req.body.pccTraceNo,
    req.body.accountToDisplayName,
    req.body.promptPayID,
    req.body.sequence,
    req.body.transactionToken,
    req.body.accountToBankCode,
    req.body.terminalNo,
    req.body.accountFromName,
    req.body.api_auth
  );
  if (confirmpromtpay.data.status.code === 1000) {
    return ReS(res, { data: confirmpromtpay.data, message: "successfully" }, 200);

  } else {
    return ReE(res, { data: confirmpromtpay.data, message: "error" }, 200);

  }


}



const payments_bill_scanupload = async function (req, res, next) {



  const upload = multer().single("image");
  upload(req, res, async function (err) {
    if (err) {
      console.error("Error during file upload:", err);
      return ReE(res, { message: "Error during file upload", error: err }, 500);
    }

    if (!req.file) {
      return ReE(res, { message: "No image file provided" }, 400);
    }

    if (!req.body.api_auth) {
      return ReE(res, { message: "api_auth is required" }, 400);
    }
    if (typeof req.body.api_auth !== "string") {
      return ReE(res, { message: "api_auth must be a string" }, 400);
    }

    try {
      const jimp = await Jimp.read(req.file.buffer);
      const qr = jsQr(
        jimp.bitmap.data,
        jimp.bitmap.width,
        jimp.bitmap.height
      );

      if (qr) {
        const paymentsbillscan = await scb.paymentsbillscan(
          qr.data,
          req.body.api_auth
        );
        if (
          paymentsbillscan.data.status.code === 1000 ||
          paymentsbillscan.data.status.code === 3024 ||
          paymentsbillscan.data.status.code === 3009
        ) {
          return ReS(res, { data: paymentsbillscan.data, message: "successfully" }, 200);
        } else {
          return ReE(res, { data: paymentsbillscan.data, message: "error" }, 200);
        }
      } else {
        return ReE(res, { message: "No QR code found in the image" }, 400);
      }
    } catch (error) {
      console.error("Error processing image or API call:", error);
      return ReE(res, { message: "Error processing image or API call", error: error }, 500);
    }
  });
};
const payments_bill_scanurl = async function (req, res, next) {
  const imageUrl = req.body.img_url;
  const apiAuth = req.body.api_auth;

  if (!imageUrl) {
    return ReE(res, { message: "Image URL is required" }, 400);
  }

  if (!apiAuth) {
    return ReE(res, { message: "api_auth is required" }, 400);
  }

  if (typeof apiAuth !== "string") {
    return ReE(res, { message: "api_auth must be a string" }, 400);
  }

  try {
    const qr = require("qrcode-reader");
    const Jimp = require("jimp");
    const axios = require("axios");

    const response = await axios.get(imageUrl, {
      responseType: "arraybuffer",
    });

    const image = await Jimp.read(response.data);
    const qrCode = new qr();
    qrCode.callback = async function (err, value) {
      if (err) {
        console.error("Error decoding QR code:", err);
        return ReE(res, { message: "Could not decode QR code", error: err }, 400);
      }
      if (value && value.result) {
        console.log("Decoded QR code text:", value.result);
        try {
          const paymentsbillscan = await scb.paymentsbillscan(
            value.result,
            apiAuth
          );
          if (
            paymentsbillscan.data.status.code === 1000 ||
            paymentsbillscan.data.status.code === 3024 ||
            paymentsbillscan.data.status.code === 3009
          ) {
            return ReS(res, { data: paymentsbillscan.data, message: "successfully" }, 200);
          } else {
            return ReE(res, { data: paymentsbillscan.data, message: "error" }, 200);
          }
        } catch (error) {
          console.error("Error calling paymentsbillscan:", error);
          return ReE(res, { message: "Error calling paymentsbillscan", error: error }, 500);
        }
      } else {
        console.log("Could not decode QR code.");
        return ReE(res, { message: "Could not decode QR code" }, 400);
      }
    };
    qrCode.decode(image.bitmap);
  } catch (error) {
    console.error("Error processing image or API call:", error);
    return ReE(res, { message: "Error processing image or API call", error: error }, 500);
  }
};

const payments_bill_scanqrsting = async function (req, res) {
  const qrString = req.body.qrsting;
  const apiAuth = req.body.api_auth;

  if (!qrString) {
    return ReE(res, { message: "QR string is required" }, 400);
  }
  if (typeof qrString !== "string") {
    return ReE(res, { message: "QR string must be a string" }, 400);
  }

  if (!apiAuth) {
    return ReE(res, { message: "api_auth is required" }, 400);
  }
  if (typeof apiAuth !== "string") {
    return ReE(res, { message: "api_auth must be a string" }, 400);
  }

  try {
    const paymentsbillscan = await scb.paymentsbillscan(qrString, apiAuth);

    if (
      paymentsbillscan.data.status.code === 1000 ||
      paymentsbillscan.data.status.code === 3024 ||
      paymentsbillscan.data.status.code === 3009
    ) {
      return ReS(
        res,
        { data: paymentsbillscan.data, message: "successfully" },
        200
      );
    } else {
      return ReE(
        res,
        { data: paymentsbillscan.data, message: "error" },
        200
      );
    }
  } catch (error) {
    console.error("Error calling paymentsbillscan:", error);
    return ReE(
      res,
      { message: "Error calling paymentsbillscan", error: error },
      500
    );
  }
};

const eligiblebanks = async function (req, res) {


  const fetchAPI = async () => {
    try {
      const summary = await scb.eligiblebanks(req.body.api_auth);
      return res.send(summary.data);
    } catch (error) {
      console.log(error);
      next();
    }
  };
  fetchAPI();





}

module.exports = {
  checkAuthorized,
  summary,
  checkDevices,
  history,
  transfer_verification,
  confirmation_verification,
  allconfirmation_verification,
  transfer_promtpay,
  transfer_confirmpromtpay,
  payments_bill_scanupload,
  payments_bill_scanurl,
  payments_bill_scanqrsting,
  eligiblebanks
  // transactions,
  // login_auth,
  // checkDevices,
  // checkAuthorized,
  // summary,
  // scan_barcodeurl,
};
