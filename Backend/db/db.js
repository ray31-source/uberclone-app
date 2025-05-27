
const mongoose = require('mongoose')
const Uri = "mongodb+srv://rayhantaj517:Dgy5XM6Rqc19ic6e@uber-app.eec638f.mongodb.net/?retryWrites=true&w=majority&appName=Uber-app"


const connectTodb = ()=>{
mongoose.connect(Uri)
.then(()=>{
    console.log("Connection Succesful")
})
.catch((err)=>{
    console.log("Failed To connect",err)
})
}

module.exports = connectTodb;