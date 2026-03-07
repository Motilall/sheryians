const mongoose = require("mongoose");

// db.js -> how the server is connected to the database, that is written in this file

function connectToDB(){
    mongoose.connect("mongodb+srv://motilal:GFZpgWARk8DW8qKE@cluster0.7xxauyg.mongodb.net/try")
    .then(()=>{
        console.log("connected to DB");
    })
}

module.exports = connectToDB;