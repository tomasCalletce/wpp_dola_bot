const mongoose = require("../db.js");
const User = require("../User.js");
const Customer = require("../Customer.js");

async function findUser(userName){
    console.log("gdgdgdg")
    const user = await User.findOne({ "discordUsername" : userName }).exec();
    const customer = await Customer.findOne({ "user" : user._id })

    return customer;
}

module.exports = findUser;