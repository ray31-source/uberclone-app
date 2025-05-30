const express = require('express')
const userRouter = express.Router()
const User = require('../Models/usermodel')
const {body} = require('express-validator')
const registerUser = require('../services/user.service')
const userController = require('../Controllers/user.controller')
userRouter.get('/register',(req,res)=>{
    res.send("Hey Hello")
})

userRouter.post('/register',[
    body('fullname.firstname').isLength({min:3}).withMessage('Firstname must be 3 characters long'),
    body('email').isEmail().withMessage('Email must be valid'),
    body('password').isLength({min:6}).withMessage('Password must be 6 characters long')
],
userController,
registerUser

)

module.exports = userRouter;