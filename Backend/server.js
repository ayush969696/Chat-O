require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/db");
const userRouter = require("./router/userRoutes");
const Conversation = require("./models/conversation");
const User = require("./models/userModel");

const option = {
  origin: "http://localhost:5173/",
  methods: "GET,PUT,POST,DELETE",
  credential: true,
};
app.use(cors(option));

app.use(express.json());

connectDB();

app.use("/api/user", userRouter);

app.post("/api/conversation", async (req, res) => {
  try {
    const { senderId, receiverId } = req.body;
    const newCoversations = new Conversation({
      members: [senderId, receiverId],
    });
    await newCoversations.save();
    res.status(200).send({
      message: "Conversation created Successfully!!",
    });
  } catch (error) {
    console.log(error);
  }
});

app.get("/api/conversation/:userId", async (req, res) => {
    try {
      const userId = req.params.userId;
      const conversations = await Conversation.find({
        members: { $in: [userId] },
      }); // $in -> includes
  
      const conversationUserData = await Promise.all(
        conversations.map(async (conversation) => {
          const receiverId = conversation.members.find(
            (member) => member !== userId
          );
          const user = await User.findById(receiverId)
          return {user: {email: user.email, fullName: user.fullName}, conversationId:conversation._id }
        })
      );
  
      res.status(200).json(conversationUserData);
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  });
  
const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server Started at Port ${PORT}`));
