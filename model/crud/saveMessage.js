const mongoose = require("../db.js");
const Customer = require("../Customer.js")

async function SaveMessage(customer,message,author){
    try {
        customer.messages.push({
            message : message,
            author : author
        });
        await customer.save();
    } catch (error) {
        console.log(error);
    }
}

module.exports = SaveMessage;