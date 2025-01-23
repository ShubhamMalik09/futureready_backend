const express = require("express");
const app = express();

const userRoutes = require("./routes/User");
const blogRoutes = require("./routes/Blog");

const database = require("./config/database");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 4000;

database.connect();

app.use(express.json());
app.use(
    cors({
        origin:"*",
        credentials:true,
    })
)

app.use("/api/auth",userRoutes);
app.use("/api/blog",blogRoutes);

app.get("/", (req,res) =>{
    return res.json({
        success:true,
        message:"your server is up and running.....",
    })
});

app.listen(PORT, ()=>{
    console.log(`App is running at ${PORT}`)
})