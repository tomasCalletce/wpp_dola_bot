const Customer = require("../Customer.js");

async function findCustomerByID(userID){
    const customer = await Customer.findOne({
        "user" : userID
    })
    return customer;
}

module.exports = findCustomerByID;