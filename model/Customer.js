const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const customerSchema = new Schema({
    cellPhone : String,
    messages : [
        {
            user : { type: Schema.Types.ObjectId, ref: 'User' },
            time : { type : Date, default: Date.now },
            message : String
        }
    ]
});

const Customer = model('Costumer', customerSchema);
module.exports = Customer;