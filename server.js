const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log('Listening on port 3000');
});

// GET /
app.get("/", async (req, res) => {
    res.render("index.ejs");
});