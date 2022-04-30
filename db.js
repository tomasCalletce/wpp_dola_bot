import mongoose from "mongoose";
import User from "./model/User.js"
import Customer from "./model/Customer.js"
import IsCustomer from "./model/crud/isCustomer.js"

mongoose.connect("mongodb+srv://letsMakeit22:HPbInbEnIVr8Zdam@cluster0.6ljw8.mongodb.net/Dola")

IsCustomer(Customer);


// // Create a new blog post object
// const user = new User({
//     username: "tomascalletce",
//     email: "tomascalletce@gamil.com",
//     title: "admin",
//     discordUsername : "tomas__calle",
//     discordID : "#1753",
//     hash: "hdjsjsa",
//     salt: "fs"
// });
// // Insert the article in our MongoDB database
// await user.save();