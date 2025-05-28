const {validationResult} = require('express-validator')
const user = require('../Models/usermodel')
const userRouter = require('../Route/user.route')

async function registerUser(req,res){
const errors = validationResult(req)

if(!errors.isEmpty()){
    return res.status(401).json({errors : errors.array()})
}
else{
    const newUser = new user({
       fullname:
       { firstname:req.body.fullname.firstname,
        lastname:req.body.fullname.lastname
       },
        email:req.body.email,
        password:req.body.password
    })
    newUser.password =  await newUser.hashPassword()
    await newUser.save()
    .then(()=>{
        res.status(200).json({message:"Succesfully Saved"})
    })
    .catch((err)=>{
res.status(400).json({message:err})
    })
}
}
module.exports = registerUser;