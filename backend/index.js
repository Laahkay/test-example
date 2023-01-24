const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const { userRoute } = require("./routes/user");
const { blogRoute } = require("./routes/blogs");
const cors  = require("cors");

app.use(bodyParser.json());
app.use(cors())
const url =
  "mongodb+srv://kgothatsoKgatho:kgothatso24@cluster0.bp4ew.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});

blogRoute(app);
userRoute(app);

app.listen(4000, () => {
  console.log("port running on port 4000");
});
