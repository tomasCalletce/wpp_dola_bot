const mongoose = require("../../db.js");
const Customer = require("../Customer.js");
const User = require("../User.js");


async function IsCustomer(msg){
    const customer = await Customer.findOne({ "cellPhone" : msg.to }).exec();
    if(customer){
        return 0;
    }else if(mongoose.isValidObjectId(msg.body)){
        const user = await User.findOne({ "_id" : msg.body }).exec();
        const newCustomer = new Customer({
        cellPhone : user.from,
        messages : []
        });
        await newCustomer.save();
        return 1;
    }else{
        return 3;
    }
}

module.exports = IsCustomer;