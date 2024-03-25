const express = require("express")
const Product = require("./models/product")
const User = require("./models/user")
const Message = require("./models/message")
const cors = require("cors")

const app = express()
const port = 8000

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(port,() => {
    console.log(`Server running on port ${port}`)
})

// Routes

app.get("/api/products",async (req,res) => {
    const products = await Product.findAll()
    res.json({products:products})
})

app.post("/api/user",async(req,res) => {
    const {username,email} = req.body
    await User.create({
        username,
        email
    })
    res.json({message:"User created"})
})

app.post("/api/message",async(req,res) => {
    const {username,email,phone,message} = req.body
    await Message.create({
        username,
        email,
        phone,
        message
    })
    res.json({message:"Message created"})
})

app.get("/api/message",async(req,res) => {
    const messages = await Message.findAll()
    res.json({message:messages})
})