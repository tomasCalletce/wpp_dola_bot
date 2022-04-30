import mongoose from 'mongoose'

const { Schema, model } = mongoose;

const userSchema = new Schema({
    username: String,
    email: String,
    title: String,
    discordUsername : String,
    discordID : String,
    hash: String,
    salt: String
});

const User = model('User', userSchema);
export default User;