require("dotenv").config()
const express = require("express")
const app = express()


const port = 6000

app.listen(port,()=>{
    console.log(`server is running in port number: `)
    console.log(`${port}`)
})