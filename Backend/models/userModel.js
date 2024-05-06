const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    token: {
      type: String
    }
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) {
    return next(); // if current password not modified then move on to the next middleware
  }

  try {
    const saltRound = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, saltRound);
    user.password = hashedPassword;
  } catch (error) {
    return next(error);
  }
});


userSchema.methods.genereToken = async function () {
  try {
    return jwt.sign(
      {
        userID: this._id.toString(),
        email: this.email,
      },
      process.env.SECERET_KEY,
      {
        expiresIn: "30d",
      }
    );
  } catch (error) {
    console.log(error);
  }
};
userSchema.methods.ComparePassword = async function (password) {
  try {
    return bcrypt.compare(password, this.password)
  } catch (error) {
    console.log(error);
  }
};

const User = mongoose.model("User", userSchema);

module.exports = User;
