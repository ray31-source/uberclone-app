const app = require("./app")
const connectTodb = require('./db/db')


const port = process.env.PORT || 4000
connectTodb()


app.listen(port,()=>{
    console.log("The Server is running");
    
    
})
