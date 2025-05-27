const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const UserSchema = new mongoose.Schema({
    fullname:{
        firstname:{
        type:String,
        required : true,
        minlength: [3,"First name must be 3 characters long"]
        },
        lastname:{
            type:String,
             minlength: [3,"Last name must be 3 characters long"]

        }

    },
    email:{
        type: String,
        required:true,
        unique:true
        

    },
    password:{
        type:String,
        required:true,
        minlength:[6,'Password must be 6 characters long'],
        select:false

    }

})
UserSchema.methods.generateAuthtoken = async ()=> {
    jwt.sign
    //Ok from here the code will start
}



module.exports = UserSchema