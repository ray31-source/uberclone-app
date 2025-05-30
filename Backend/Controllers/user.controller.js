
const {validationResult} = require('express-validator')


function userController(req,res,next){
const errors = validationResult(req)

if(!errors.isEmpty()){
    return res.status(400).json({errors : errors.array()})
}
else{
    console.log("Hey Controller is goging")
next()
}
}

module.exports = userController;