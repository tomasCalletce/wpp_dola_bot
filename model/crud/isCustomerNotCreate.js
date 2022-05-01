const mongoose = require("../../db.js");
const Customer = require("../Customer.js");



async function IsCustomerNotCreate(cell){
    try {
        const customer = await Customer.findOne({ "cellPhone" : cell }).exec();
        return customer;
    } catch (error) {
        console.log(error);
    }
}

module.exports = IsCustomerNotCreate;