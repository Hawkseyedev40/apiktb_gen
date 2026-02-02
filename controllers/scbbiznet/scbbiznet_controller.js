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

var moment = require("moment");
require("moment/locale/th");

async function playload(deviceId) {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "http://www.api-scb-preload.com/scbpreload/?deviceId=" + deviceId,
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
    // data: data
  };

  const response = await axios(config)
    .then((r) => r)
    .catch((e) => e.response);
  return response.data.data;
}
async function verifyuser(deviceId, payload, tag, dtag, dsig) {
  // let pid = await this.ePdidplayload(deviceId)

  try {
    let data = {
      awarenessNextQuestionDate: "",
      dtag: dtag,
      jailbreak: "0",
      isLoadGeneralConsent: "0",
      tilesVersion: tilesVersion,
      userMode: "INDIVIDUAL",
      payload: payload,
      tag: tag,
    };

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://fasteasy.scbeasy.com:8443/v3/login/preloadandresumecheck",
      headers: {
        "x-signature": "DEVTEAM-@" + "DEVTEAM",
        "accept-encoding": "gzip",
        "accept-language": "th",
        accuracy: "100.0",
        connection: "Keep-Alive",
        "content-type": "application/json; charset=UTF-8",
        dsig: dsig,
        host: "fasteasy.scbeasy.com:8443",
        latitude: "11.8898337",
        longitude: "102.7917671",
        "scb-channel": "APP",
        "th.co.scb-easy-rquid": "e4cd799f-bb1d-4c1b-8ee0-cb5e9471f39f",
        "th.co.scb-easy-sessionid": "9d8625b0-9bf6-42a1-b91d-e061f71a932e",
        "user-agent": agent,
        Cookie:
          "TS0130295e=01339ac568d1f4be0ebc26db3bf0218c01eb9d12dd0dc9c481ab9283ebba67743e129c94f557bf49847323752574ecc1b23bc9bf0d; TS01700433=012a0826e3718d038a254c9a7a035e7845038984208d94619996ddc3258d8861082a1dc483dbf5ff5f1e3f206f5a235b31268437f5",
      },
      data: data,
    };
    const response = await axios.request(config);

    // console.log(response);
    return { data: response.data, headers: response.headers };
  } catch (error) {
    return error;
  }
}
async function preAuth(auth) {
  try {
    let data = {
      loginModuleId: "PseudoFE",
    };

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://fasteasy.scbeasy.com/v1/isprint/preAuth",
      headers: {
        "x-signature": "DEVTEAM-@" + "DEVTEAM",
        "Accept-Language": "th",
        "scb-channel": "APP",
        "Api-Auth": auth,
        "user-agent": agent,
        "th.co.scb-easy-sessionid": "693efaac-f826-4227-814c-802035737ec4",
        "th.co.scb-easy-rquid": "585e6acb-c2c3-43fd-8eea-60267da2989b",
        "Content-Type": "application/json; charset=UTF-8",
        Host: "fasteasy.scbeasy.com:8443",
        Connection: "Keep-Alive",
        "Accept-Encoding": "gzip",
        Cookie:
          "TS01700433=012a0826e3718d038a254c9a7a035e7845038984208d94619996ddc3258d8861082a1dc483dbf5ff5f1e3f206f5a235b31268437f5",
      },
      data: data,
    };
    const response = await axios.request(config);
    return { data: response.data, headers: response.headers };
  } catch (error) {
    return error;
  }
}
async function fasteasylogin(deviceId, pseudoSid, pseudoPin, auth) {
  // console.log(auth)
  let dg = await playload(deviceId);

  try {
    let data = {
      dtag: dg.dtag,
      tilesVersion: tilesVersion,
      pseudoSid: pseudoSid,
      pseudoPin: pseudoPin,
    };

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://fasteasy.scbeasy.com:8443/v1/fasteasy-login",
      headers: {
        "x-signature": "DEVTEAM-@" + "DEVTEAM",
        "accept-encoding": "gzip",
        "accept-language": "th",
        accuracy: "100.0",
        "api-auth": auth,
        connection: "Keep-Alive",
        "content-type": "application/json; charset=UTF-8",
        dsig: dg.dsig,
        host: "fasteasy.scbeasy.com:8443",
        latitude: "11.8898337",
        longitude: "102.7917671",
        "scb-channel": "APP",
        "th.co.scb-easy-rquid": "37b3e6c0-8029-4f61-9951-1d461a9b6156",
        "th.co.scb-easy-sessionid": "aecf47c3-c19d-438f-91c1-dfedd862e196",
        "user-agent": agent,
        Cookie:
          "TS01700433=012a0826e339c5fe730b65d7a8ef99b76e750138b7ecd14f2b8e689549ac975e044288c5ddfe4c0903c182de0e203c017d74bb5a67",
      },
      data: data,
    };
    const response = await axios.request(config);
    return { data: response.data, headers: response.headers };
  } catch (error) {
    return error;
  }
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

async function getverrifyuser(praram) {
  const axios = require("axios");
  let data = `{"username":"${praram}"}`;

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://gateway-external-cpx.scb.co.th/v1/web-customer-authentication/verify-user",
    headers: {
      accept: "application/json, text/plain, */*",
      "accept-language": "th",
      "content-type": "application/json;charset=UTF-8",
      origin: "https://www.scbbusinessanywhere.com",
      platform: "WEB",
      priority: "u=1, i",
      "scb-channel": "WEB",
      "scb-visitor-id": "13d7ad5a-0b0b-4fa6-a673-f4a4931d4746",
      "sec-ch-ua":
        '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "cross-site",
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
      Cookie:
        "TS012dcdf7=01a990b48ed6fe81d9c13a21834a4733d7731bf17f1956658ea99da2b6d8003cbdd130b3ce12a3d44d97b35f9287d1858e1278c95d",
    },
    data: data,
  };

  const resp = await axios.request(config);
  return resp.data;
}

async function getpassforword_2(praram) {
  const axios = require("axios");
  let data = `{"username":"${praram}"}`;

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://gateway-external-cpx.scb.co.th/v1/web-customer-authentication/pre-auth/verify-password",
    headers: {
      accept: "application/json, text/plain, */*",
      "accept-language": "th",
      "content-type": "application/json;charset=UTF-8",
      origin: "https://www.scbbusinessanywhere.com",
      platform: "WEB",
      priority: "u=1, i",
      "scb-channel": "WEB",
      "scb-visitor-id": "13d7ad5a-0b0b-4fa6-a673-f4a4931d4746",
      "sec-ch-ua":
        '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "cross-site",
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
      Cookie:
        "TS012dcdf7=01a990b48ed6fe81d9c13a21834a4733d7731bf17f1956658ea99da2b6d8003cbdd130b3ce12a3d44d97b35f9287d1858e1278c95d",
    },
    data: data,
  };

  const resp = await axios.request(config);
  return resp.data;
}

async function getpassforword(praram) {
  const axios = require("axios");
  // let data = '{"username":"shiro2546","encryptedPassword":"0001-wOBWkVpFiqYjYVHX65AiqdXN4TMMzDT9fGsqKkTtFJPqskMjqNBNrJTEBhYfLDD_9qamGV3g1dSassLvpZaFbKPvlU,79D31333F47CEC2711EA44C3B1CC4321:89B9CDE5A691E42F9DD5092A3E829CCF61325DD6803CBCF6F369FA101B2877B9928ED74C7EC63A6A54B817E0E5DC08460F242C3286E7A35BF76CFA018C0C209F6BA82BEBA39043DA2030B4578BA3DF1566E3D620574A7062DD915AA4FF06966E7D2C2AC3BC467EDFCB4C5A96EF2C57FC7FE2EEF50F6379A659BF47AD9EE4CC4BC94A32588F4080C7A8D24C282387A4FCA9B527DE3529F89AAF8D27BEA6CC9BBA60D9748EA9169E8F149B1203C7DBB57C53C7287D8088EB12D242A1A7B45893209997D8D9013E47D25336E0960FB44FF19BCE75657A37CABAE1CCA7685E28CC8B521C3069E762684DCD865450D87F73A94FB58CE71004109B111B91FB0D06DC91"}';

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://gateway-external-cpx.scb.co.th/v1/web-customer-authentication/verify-password",
    headers: {
      accept: "application/json, text/plain, */*",
      "accept-language": "th",
      "content-type": "application/json;charset=UTF-8",
      origin: "https://www.scbbusinessanywhere.com",
      platform: "WEB",
      priority: "u=1, i",
      "scb-channel": "WEB",
      "scb-visitor-id": "13d7ad5a-0b0b-4fa6-a673-f4a4931d4746",
      "sec-ch-ua":
        '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "cross-site",
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
      Cookie:
        "TS012dcdf7=01a990b48ed6fe81d9c13a21834a4733d7731bf17f1956658ea99da2b6d8003cbdd130b3ce12a3d44d97b35f9287d1858e1278c95d",
    },
    data: praram,
  };

  const resp = await axios.request(config);

  return resp.data;
}

async function forword_bank(praram, sessionid) {
  const axios = require("axios");
  // let data = '{"username":"shiro2546","encryptedPassword":"0001-wOBWkVpFiqYjYVHX65AiqdXN4TMMzDT9fGsqKkTtFJPqskMjqNBNrJTEBhYfLDD_9qamGV3g1dSassLvpZaFbKPvlU,79D31333F47CEC2711EA44C3B1CC4321:89B9CDE5A691E42F9DD5092A3E829CCF61325DD6803CBCF6F369FA101B2877B9928ED74C7EC63A6A54B817E0E5DC08460F242C3286E7A35BF76CFA018C0C209F6BA82BEBA39043DA2030B4578BA3DF1566E3D620574A7062DD915AA4FF06966E7D2C2AC3BC467EDFCB4C5A96EF2C57FC7FE2EEF50F6379A659BF47AD9EE4CC4BC94A32588F4080C7A8D24C282387A4FCA9B527DE3529F89AAF8D27BEA6CC9BBA60D9748EA9169E8F149B1203C7DBB57C53C7287D8088EB12D242A1A7B45893209997D8D9013E47D25336E0960FB44FF19BCE75657A37CABAE1CCA7685E28CC8B521C3069E762684DCD865450D87F73A94FB58CE71004109B111B91FB0D06DC91"}';

  let data = `{"accountIdentificationType":"ACCOUNT","accountNumber":"${praram.accountNumber}","bankCode":"${praram.bankCode}"}`;

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://gateway-external-cpx.scb.co.th/v1/web-customer-recipient/create-recipient-profile/validate-recipient-account",
    headers: {
      accept: "application/json, text/plain, */*",
      "accept-language": "th",
      "content-type": "application/json;charset=UTF-8",
      origin: "https://www.scbbusinessanywhere.com",
      platform: "WEB",
      priority: "u=1, i",
      "scb-channel": "WEB",
      "scb-visitor-id": "bc51c122-5316-424c-a699-e678d3cb3515",
      "sec-ch-ua":
        '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "cross-site",
      sessionid: sessionid,
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
      Cookie:
        "TS012dcdf7=01a990b48e1f7f961e3d5c867fed17a0547581e89aad481d62bd4b4305853218a2d3ff050c605320c10e8ddce5450525862c7d23aa",
    },
    data: data,
  };
  const resp = await axios.request(config);
  return resp.data;
}

const verify_password = async function (req, res) {
  const fetchAPI = async () => {
    try {
      // if (!req.body.deviceId) {
      //   return ReE(res, { message: "deviceId is required" }, 400);
      // } else if (!req.body.pin) {
      //   return ReE(res, { message: "pin is required" }, 400);
      // }

      const body = req.body;

      const payloads = await getverrifyuser(req.body.deviceId);

      if (!payloads.status.code == 1000) {
        return ReE(res, { message: "deviceId is required" }, 400);
      }

      const preAuths = await getpassforword_2(req.body.deviceId);

      const pinEncrypts = await pinEncrypt(
        preAuths.data.e2ee.e2eeSid,
        preAuths.data.e2ee.serverRandom,
        req.body.pin,
        preAuths.data.e2ee.oaepHashAlgo,
        preAuths.data.e2ee.pubKey
      );

      let datapostver = {
        username: req.body.deviceId,
        encryptedPassword: pinEncrypts,
      };

      // console.log(datapostver);

      const getpassforwords = await getpassforword(datapostver);

      return getpassforwords.data;

    } catch (error) {
      console.log(error);
      next();
    }
  };

  fetchAPI();
};

const checkDevices = async function (req, res) {
  const payloads = await playload(req.body.deviceId);

  const verifyusers = await verifyuser(
    req.body.deviceId,
    payloads.payload,
    payloads.tag,
    payloads.dtag,
    payloads.dsig
  );
  if (verifyusers.data.status.code == 1000) {
    return ReS(res, { data: verifyusers.data, message: "successfully" }, 200);
  } else {
    return ReE(res, { data: verifyusers.data, message: "error" }, 200);
  }
};

const loginscbbiznet = async function (req, res) {
  let body = req.body;

  try {
    if (!body.deviceId) {
      return ReE(res, { message: "deviceId is required" }, 400);
    } else if (!body.pin) {
      return ReE(res, { message: "pin is required" }, 400);
    }

    const payloads = await getverrifyuser(body.deviceId);

    if (!payloads.status.code == 1000) {
      return ReE(res, { message: "deviceId is required" }, 400);
    }

    const preAuths = await getpassforword_2(req.body.deviceId);

    const pinEncrypts = await pinEncrypt(
      preAuths.data.e2ee.e2eeSid,
      preAuths.data.e2ee.serverRandom,
      req.body.pin,
      preAuths.data.e2ee.oaepHashAlgo,
      preAuths.data.e2ee.pubKey
    );
    let datapostver = {
      username: req.body.deviceId,
      encryptedPassword: pinEncrypts,
    };

    const getpassforwords = await getpassforword(datapostver);

    console.log(getpassforwords)

    return ReS(res, { data: getpassforwords.data, message: "successfully" }, 200);

  } catch (error) {
    console.log(error);
  }
};

const verify_accnumber = async function (req, res) {
  let body = req.body;

  try {
    if (!body.accountNumber) {
      return ReE(res, { message: "accountNumber is required" }, 400);
    } else if (!body.bankCode) {
      return ReE(res, { message: "bankCode is required" }, 400);
    }else if (!body.sessionId) {
      return ReE(res, { message: "sessionId is required" }, 400);
    }

  let datapost = {
    accountNumber:req.body.accountNumber,
    bankCode:req.body.bankCode,
  }

    const preAuths = await forword_bank(datapost,req.body.sessionId);

   

    //console.log(preAuths)
    return ReS(res, { data: preAuths.data, message: "successfully" }, 200);

  } catch (error) {

    return ReE(res, { message: "accountNumber is required" }, 200);

    console.log(error);
  }
};

module.exports = {
  verify_password,
  checkDevices,
  loginscbbiznet,
  verify_accnumber
};
