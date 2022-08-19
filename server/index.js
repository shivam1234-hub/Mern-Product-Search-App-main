const express = require("express");
const app = express();
const cors = require("cors");
const searchRoute = require('./routes/routes');

app.use(express.json())
app.use(express.urlencoded())
app.use(cors());




app.use(searchRoute);

app.listen("5000", () => {
    console.log("Server is Running");
})