const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const JWT_SECRET = "htjkkdssdhjj"
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
UserSchema.methods.generateAuthtoken = function () {
    const token = jwt.sign({id: this._id}, JWT_SECRET , {
        expiresIn : '1h'
    })
    return token;

    //Ok from here the code will start
}

UserSchema.methods.hashPassword = async function (){
    const hashedPassword =  await bcrypt.hash(this.password, 10)
     return hashedPassword;
}

UserSchema.statics.comparePassword = async function (password , hashedPassword){
 return await bcrypt.compare(password , hashedPassword);
}

const user = mongoose.model('User' , UserSchema) 



module.exports = user;