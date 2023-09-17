const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
name:String,
address: String,
contact:Number
})

const UserModal = mongoose.model("Users", UserSchema);
module.exports = UserModal;