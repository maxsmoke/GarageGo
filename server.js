const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

//body parser for AJAX requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//serve up static assets
if (process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
}

app.use(routes);

//connect to Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/garageGoDB"
);

app.listen(PORT, ()=>{
    console.log(`API server now listening on PORT ${PORT}.`)
})