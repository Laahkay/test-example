const { response } = require("express");
const User = require("../models/user");
const { encryptPassword, comparePassword } = require("../security/encryption");

const userRoute = (app) => {
  app.get("/", (req, res) => {
    res.send("Hello world");
  });

  app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
      const foundUser = await User.find({ email: email });
      if (foundUser.length > 0) {
        console.log("email correct");
        const isPasswordCorrect = await comparePassword(
          password,
          foundUser[0].hashedPassword
        );
        console.log("isPasswordCorrect" , isPasswordCorrect)
        if (isPasswordCorrect === true) {
          console.log("password correct");
          return res.send(200);
         }
      }

      return res.send("password or email is incorrect");
    } catch (e) {
      res.send(500);
    }
  });

  app.post("/register", async (req, res) => {
    const { email, password } = req.body;
    try {
      var hashedPassword = await encryptPassword(password);
      console.log("hashedPassword", hashedPassword);
      const user = User({
        hashedPassword: hashedPassword,
        email: email,
      });

      await user.save();
      return res.send(200);
    } catch (e) {
      console.log("e", e);
      return res.send(500);
    }
  });
};

module.exports = { userRoute };
