const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const register = asyncHandler(async (req, res) => {
  const { fullName, email, password } = req.body;

  if (!fullName || !email || !password) {
    res.status(400);
    throw new Error("Please Enter all the Feilds");
  }

  const user = await User.findOne({ email });

  if (user) {
    res.status(400);
    throw new Error("User Already Exist!");
  }

  const usercreate = await User.create({ fullName, email, password });

  if (usercreate) {
    res.status(201).send({
      messsage: "Registration Successfull!",
      _id: usercreate._id,
      fullName: usercreate.fullName,
      email: usercreate.email,
      token: await usercreate.genereToken(),
    });
  } else {
    res.status(400);
    throw new Error("Failed to create new user!");
  }
});

const login = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).send({ message: "Invalid Credentials" });
    }

    const isPasswordValid = await user.ComparePassword(password);

    if (user && isPasswordValid) {
      res.status(201).send({
        messsage: "Login Successfull!",
        _id: user._id,
        email: user.email,
        token: await user.genereToken(),
      });
    } else {
      return res.status(400).send({ message: "Invalid Passowrd!" });
    }
  } catch (error) {
    return res.status(500).send({message: "Internal Server Error!"})
  }
});

module.exports = { register, login };
