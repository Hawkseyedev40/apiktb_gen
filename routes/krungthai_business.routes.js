const express = require("express");
const KrungthaiRouter = express.Router();


const passport = require("passport");

const userMidd = require("../middleware/app.user");
require("../middleware/passport")(passport);

const { checkUserApi } = require("../middleware/authenticate");

const Auth_controller = require("../controllers/auth/auth_controller");
const krungthai_generation_controller = require("../controllers/krungthai_busines/krungthai_business_controller");
const krungthai_controller = require("../controllers/krungthai_busines/krungthai_createwithdrow");

//KrungthaiRouter.post("/create-admin",passport.authenticate("jwt", { session: false }), userMidd.checkUser, Auth_controller.create_admin);
KrungthaiRouter.post("/krungthai_verification", checkUserApi, krungthai_generation_controller.krungthai_verification); // Example of a protected route
KrungthaiRouter.post("/krungthai_verification_Otp", checkUserApi, krungthai_generation_controller.krungthai_otp_verification); // Example of a protected route
KrungthaiRouter.get("/krungthai_overview", checkUserApi, krungthai_generation_controller.krungthai_overview); // Example of a protected route
//KrungthaiRouter.post("/loginscbbiznet", checkUserApi, krungthai_generation_controller.loginscbbiznet); // Example of a protected route
//KrungthaiRouter.post("/verify_accnumber", checkUserApi, krungthai_generation_controller.verify_accnumber); // Example of a protected route
KrungthaiRouter.post("/krungthai_verrifyusers", checkUserApi, krungthai_controller.krungthai_verrifyusers);
KrungthaiRouter.post("/pinEncrypt_password", krungthai_controller.pinEncrypt_password);


// Example of a protected route
KrungthaiRouter.post("/create_tranferoder", checkUserApi, krungthai_controller.create_tranferOder); // Example of a protected route
KrungthaiRouter.post("/krungthai_overview", checkUserApi, krungthai_generation_controller.krungthai_overview); // Example of a protected route


KrungthaiRouter.post("/summary", checkUserApi, krungthai_controller.summary);
KrungthaiRouter.post("/getdata_profile", checkUserApi, krungthai_controller.getdata_profile);



KrungthaiRouter.post("/getClientCredentialsToken", checkUserApi, krungthai_controller.getClientCredentialsToken);
KrungthaiRouter.post("/login_auth", checkUserApi, krungthai_controller.login_auth);
KrungthaiRouter.post("/confirmation_otp", checkUserApi, krungthai_controller.confirmation_otp);
KrungthaiRouter.post("/genared_scb", checkUserApi, krungthai_controller.confirmation_otp);




KrungthaiRouter.post("/profile_devices", checkUserApi, krungthai_controller.profile_devices);
KrungthaiRouter.post("/chack_instructionViewType", checkUserApi, krungthai_controller.instructionViewType);
KrungthaiRouter.post("/get_transaction_history", checkUserApi, krungthai_controller.get_transaction_history);

KrungthaiRouter.post("/profile_refresh_token", checkUserApi, krungthai_controller.profile_refresh_token);
KrungthaiRouter.post("/resetpin", checkUserApi, krungthai_controller.profile_resetpin);




// Example of a protected route



KrungthaiRouter.post("/smsforword", krungthai_generation_controller.smsforword); // Example of a protected route

// KrungthaiRouter.post("/create_accounts", Auth_controller.create_account);loginauth
// KrungthaiRouter.post("/history", Auth_controller.chack_history);
//KrungthaiRouter.post("/generate_api_key", Auth_controller.generateApiKey);

//KrungthaiRouter.post("/some-protected-route", checkUserApi, Auth_controller.someProtectedFunction); // Example of a protected route

module.exports = KrungthaiRouter;
