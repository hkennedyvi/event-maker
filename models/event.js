const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  category: { type: String, required: true },
  name: { type: String, required: true },
  location: {type: String, required: true},
  participants: { type: Number, required: true},
  duration: {type: Number, required: true},
  notes: {type: String, required: false},
  creator: {type: String, required: true}
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;