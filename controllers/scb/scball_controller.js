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

const loginauth = async function (req, res) {
  const fetchAPI = async () => {
    try {
      const payloads = await playload(req.body.deviceId);

      //console.log(payloads);

      const verifyusers = await verifyuser(
        req.body.deviceId,
        payloads.payload,
        payloads.tag,
        payloads.dtag,
        payloads.dsig
      );

      //  console.log(verifyusers);
      if (verifyusers.data.status.code == 1000) {
        const preAuths = await preAuth(verifyusers.headers["api-auth"]);

        if (preAuths.data.status.statuscode == 0) {
          const pinEncrypts = await pinEncrypt(
            preAuths.data.e2ee.pseudoSid,
            preAuths.data.e2ee.pseudoRandom,
            req.body.pin,
            preAuths.data.e2ee.pseudoOaepHashAlgo,
            preAuths.data.e2ee.pseudoPubKey
          );

          const fasteasylogins = await fasteasylogin(
            req.body.deviceId,
            preAuths.data.e2ee.pseudoSid,
            pinEncrypts,
            verifyusers.headers["api-auth"]
          );
          //console.log(fasteasylogins)
          if (fasteasylogins.data.status.code == 1000) {
            let datasave = {
              auth: fasteasylogins.headers["api-auth"],
              data: fasteasylogins.data,
              //   accountNo: req.body.accountNo,
              deviceId: req.body.deviceId,
              pin: req.body.pin,
            };

            let datasaves = JSON.stringify(datasave);

            let datgasace = await Logreq.create({
              old_data: datasaves,
              devices:req.body.deviceId
            });
            return res.send({ data: datasave });
          } else {
            res.send(fasteasylogins);
          }
        } else {
          res.send(preAuths);
        }
      } else {
        res.send(verifyusers);
      }
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

module.exports = {
  loginauth,
  checkDevices,
};
