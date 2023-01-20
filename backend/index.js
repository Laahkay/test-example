const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const {userRoute} = require('./routes/user');


app.use(bodyParser.json())


const  url = 
mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});



userRoute(app)

app.listen(4005 , () => {
   console.log("port running on port 4004")
})