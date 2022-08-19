const express = require("express");
const app = express();
const searchRoute = require('./routes/routes');

app.use(express.json())
app.use(express.urlencoded())




app.use(searchRoute);

app.listen("5000", () => {
    console.log("Server is Running");
})