const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, required: true },
    img_name:{
        type: String, required: true
    },
    path:{
        type: String, required: true
    }
},{
    _id: false
});

const Image = mongoose.model("Image", imageSchema);

module.exports = Image;