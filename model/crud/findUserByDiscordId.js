const User = require("../User.js");



async function findUserByDiscordId(id){
    const user = await User.findOne({ "discordID" : id }).exec();
    return user;
}

module.exports = findUserByDiscordId;