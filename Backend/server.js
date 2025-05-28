const app = require("./app")
const connectTodb = require('./db/db')
const userRouter = require('./Route/user.route')
const express = require('express')
app.use(express.json())
app.use('/user',userRouter)

const port = process.env.PORT || 4000
connectTodb()


app.listen(port,()=>{
    console.log("The Server is running");
    
    
})
