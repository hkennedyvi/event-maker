const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  category: { type: String, required: false },
  name: { type: String, required: false },
  location: {type: String, required: false},
  participants: { type: Number, required: false},
  duration: {type: Number, required: false},
  notes: {type: String, required: false},
  creator: {type: String, required: false},
  attendees: {type: Array, required: false}
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;