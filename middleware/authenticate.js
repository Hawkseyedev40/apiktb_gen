const { ApiUsers} = require('../models');
const { ReE,ReS } = require('../services/util.service');
const { Op } = require('sequelize');

// ... other imports ...

let checkUserApi = async function (req, res, next) {
    let apiToken = req.header('apiToken'); // Get apiToken from header
   // console.log(apiToken);

    if (!apiToken) {
        return ReE(res, { message: "apiToken is required" }, 401);
    }

    let user = await ApiUsers.findOne({
        where: {
            apiToken: apiToken
        }
    });

    if (!user) return ReE(res, { message: "Invalid apiToken" }, 401);

 

    req.apiUser = user; // Add the user to the request object
      // if (user) return ReS(res, { data: user }, 200);
    next();
    
}

// ... rest of the code ...

module.exports.checkUserApi = checkUserApi;