const mongoose = require("../../db.js");
const Customer = require("../Customer.js")

async function SaveMessage(customer,message){
    try {
        customer.messages.push({
            message : message
        });
        await customer.save();
    } catch (error) {
        console.log(error);
    }
}

module.exports = SaveMessage;