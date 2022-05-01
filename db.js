const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://letsMakeit22:HPbInbEnIVr8Zdam@cluster0.6ljw8.mongodb.net/Dola")
module.exports = mongoose;
// const Customer = require('./model/Customer.js')

// const newCustomer = new Customer({
//   cellPhone : "573175126894@c.us",
//   messages : []
// });
// newCustomer.save();