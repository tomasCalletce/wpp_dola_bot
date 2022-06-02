const mongoose = require("../db.js");
const Customer = require("../Customer.js");
const User = require("../User.js");


async function IsCustomer(cell,id){
    const customer = await Customer.findOne({ "cellPhone" : cell }).exec();
    if(customer){
        return 0;
    }else{
        const user = await User.findOne({"user" : id});
        if(user){
            const newCustomer = new Customer({
                user : id,
                cellPhone : cell,
                messages : []
            });
            await newCustomer.save();
            return 1;
        }
        return 2;
    }
}

module.exports = IsCustomer;