require('dotenv').config();

const mongoose = require("mongoose");
const express = require('express');

const app = express();

mongoose.connect(process.env.MONGODB_URI);
console.log('MONGODB_URI:', process.env.MONGODB_URI);


mongoose.connection.on("connected", () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});

// GET /
app.get("/", async (req, res) => {
    res.render("index.ejs");
});