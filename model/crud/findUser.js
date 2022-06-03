const mongoose = require("../db.js");
const User = require("../User.js");
const Customer = require("../Customer.js");

async function findUser(discordID){
    const user = await User.findOne({ "discordID" : discordID }).exec();
    const customer = await Customer.findOne({ "user" : user._id })
    return customer;
}

module.exports = findUser;