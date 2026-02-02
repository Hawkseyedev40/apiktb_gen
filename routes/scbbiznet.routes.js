const express = require("express");
const AuthRouter = express.Router();


const passport = require("passport");

const userMidd = require("../middleware/app.user");
require("../middleware/passport")(passport);

const { checkUserApi } = require("../middleware/authenticate");

const Auth_controller = require("../controllers/auth/auth_controller");
const Scbbiznet_controller = require("../controllers/scbbiznet/scbbiznet_controller");
const ScbAllclass_controller = require("../controllers/scb/fullclass_controller");

//AuthRouter.post("/create-admin",passport.authenticate("jwt", { session: false }), userMidd.checkUser, Auth_controller.create_admin);
AuthRouter.post("/verify-password", checkUserApi, Scbbiznet_controller.verify_password); // Example of a protected route
AuthRouter.post("/loginscbbiznet", checkUserApi, Scbbiznet_controller.loginscbbiznet); // Example of a protected route
AuthRouter.post("/verify_accnumber", checkUserApi, Scbbiznet_controller.verify_accnumber); // Example of a protected route

// AuthRouter.post("/create_accounts", Auth_controller.create_account);loginauth
// AuthRouter.post("/history", Auth_controller.chack_history);
//AuthRouter.post("/generate_api_key", Auth_controller.generateApiKey);

//AuthRouter.post("/some-protected-route", checkUserApi, Auth_controller.someProtectedFunction); // Example of a protected route

module.exports = AuthRouter;
