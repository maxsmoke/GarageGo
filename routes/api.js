var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/garage_db');
var address = require('../models/address.js');
var events = require('../models/events.js');
var images = require('../models/images.js');
// var profiles = require('../models/profiles.js');
// var tags = require('../models/tags.js');

var testObject = { street: "1208 High Meadow Dr.",
city: "Allen",
state: "TX",
zip: 75002,
active: true
}


router.get('/', function(req, res, next) {
    // console.log("/");
    var thisAddress = address.find({},function(err, data){
        console.log(data);
    });
});

router.post("/create", function(req, res, next) {
    console.log("/create");
    address.create(testObject);
});

module.exports = router;