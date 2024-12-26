const mongoose = require("mongoose");


async function connectMongoDB(url) {
 //Connection to Mongo DB: 
 return mongoose.connect(url)
 .then(()=>console.log("Connection Created"))
 .catch(err => console.log('Mongo error', err))

}


module.exports ={
    connectMongoDB
};