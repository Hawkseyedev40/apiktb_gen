const express = require("express");
const AuthRouter = express.Router();


const passport = require("passport");

const userMidd = require("../middleware/app.user");
require("../middleware/passport")(passport);

const { checkUserApi } = require("../middleware/authenticate");

const Auth_controller = require("../controllers/auth/auth_controller");
const Scb_controller = require("../controllers/scb/scball_controller");
const ScbAllclass_controller = require("../controllers/scb/fullclass_controller");

//AuthRouter.post("/create-admin",passport.authenticate("jwt", { session: false }), userMidd.checkUser, Auth_controller.create_admin);
AuthRouter.post("/some-protected-route", checkUserApi, Auth_controller.someProtectedFunction); // Example of a protected route

 AuthRouter.post("/get_Token_generate", Auth_controller.get_Token_generate);
AuthRouter.post("/login_auth", checkUserApi,Scb_controller.loginauth);
AuthRouter.post("/checkAuthorized", checkUserApi,ScbAllclass_controller.checkAuthorized);
AuthRouter.post("/summary", checkUserApi,ScbAllclass_controller.summary);
AuthRouter.post("/checkDevices", checkUserApi,Scb_controller.checkDevices);
AuthRouter.post("/history", checkUserApi,ScbAllclass_controller.history);
AuthRouter.post("/transfer_verification", checkUserApi,ScbAllclass_controller.transfer_verification);
AuthRouter.post("/confirmation_verification", checkUserApi,ScbAllclass_controller.confirmation_verification);
AuthRouter.post("/allconfirmation_verification", checkUserApi,ScbAllclass_controller.allconfirmation_verification);
AuthRouter.post("/transfer_promtpay", checkUserApi,ScbAllclass_controller.transfer_promtpay);
AuthRouter.post("/transfer_confirmpromtpay", checkUserApi,ScbAllclass_controller.transfer_confirmpromtpay);
AuthRouter.post("/payments_bill_scanupload", checkUserApi,ScbAllclass_controller.payments_bill_scanupload);
AuthRouter.post("/payments_bill_scanurl", checkUserApi,ScbAllclass_controller.payments_bill_scanurl);
AuthRouter.post("/payments_bill_scanqrsting", checkUserApi,ScbAllclass_controller.payments_bill_scanqrsting);
AuthRouter.post("/eligiblebanks", checkUserApi,ScbAllclass_controller.eligiblebanks);

// AuthRouter.post("/create_accounts", Auth_controller.create_account);loginauth
// AuthRouter.post("/history", Auth_controller.chack_history);
//AuthRouter.post("/generate_api_key", Auth_controller.generateApiKey);

//AuthRouter.post("/some-protected-route", checkUserApi, Auth_controller.someProtectedFunction); // Example of a protected route

module.exports = AuthRouter;
