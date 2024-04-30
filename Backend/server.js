require('dotenv').config();
const express = require('express');
const chats = require('./data/data');
const app = express();
const cors = require('cors')

const option = {
    origin: "http://localhost:5173/",
    methods: "GET,PUT,POST,DELETE",
    credential: true,
}

app.use(cors(option))

app.get('/api/chat/:id', (req, res) => {
    const singleChat = chats.find(c=>c._id === req.params.id)
    res.send(singleChat)
})

const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`Server Started at Port ${PORT  }`))