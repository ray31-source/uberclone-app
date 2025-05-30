
const User = require('../Models/usermodel')
const userRouter = require('../Route/user.route')

async function registerUser (req,res){

    const {fullname , password , email } = req.body
   
    if(!fullname || !fullname.firstname || !password || !email){
        throw new Error(" All fields are required");
        
    }

else{
    const {firstname , lastname} = fullname
    console.log("Hey service is creating it")
    try{
    const newUser = new User({
       fullname:{
        firstname , 
        lastname
       }
       ,
        email,
        password
    })
    newUser.password =  await newUser.hashPassword()
    await newUser.save()
  
        res.status(200).json({message:"Succesfully Saved"})
}catch(err) {
res.status(400).json({message :err })
    }
}
}
module.exports = registerUser;