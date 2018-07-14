const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    _profileid: { 
        type: Schema.Types.ObjectId, ref:"Profile" },
street:{
    type: String, required: true
},

city:{
    type: String, required: true
},
state:{
    type: String, required: true
},
zip:{
    type: Number, required: true
},
active:{
    type: Boolean, require: true
}
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;