const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tagSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, required: true },
tag_name:{
    type: String, required: true
},
active_tags:{
    type: Number
}
},{
    _id: false
});

const Tag = mongoose.model("Tag", tagSchema);

module.exports = Tag;