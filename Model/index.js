const mongoose = require("mongoose");

let URL = process.env.db_url;
let dev_URL = process.env.dev_db

mongoose.connect(dev_URL)
    .then((data)=>{
        console.log("connected to database");
    })
    .catch((err=>{
        console.log("Error");
        console.log(err);
    }))