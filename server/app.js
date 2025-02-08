const express= require("express");
const app= express();
const cors= require("cors");
const mongoose=require("mongoose");
require("dotenv").config();
const adminRoute= require("./routes/adminRoute");
const empRoute= require("./routes/employeeRoute");
const bodyparser = require('body-parser');
const dbconn=process.env.DBCONN;
const port=process.env.PORT || 8000;
mongoose.connect(dbconn).then(()=>{
    console.log("DB connected!");
})
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())


app.use("/admin", adminRoute);
app.use("/employee", empRoute);



app.listen(port, ()=>{
    console.log("Server run on 8080 port!");
})