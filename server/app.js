const express=require('express')
const sendmail=require('./controllers/sos')
const app=express()
app.get('/',(req,res)=>{
    console.log("website is running");
res.end("dude whats upp")
})
app.get('/sendmail',sendmail)
app.listen(2345)