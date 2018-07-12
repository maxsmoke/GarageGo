const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, required: true },
    start_date: {
        type: Date, required: true
    },
    end_date: {
        type: Date, required: true
    },
    address:{
        type: String, required: true
    },
    active:{
        type: Boolean, required: true
    }
    
},{
    _id: false
});
const Event = mongoose.model("Event", eventSchema);

module.exports = Event;