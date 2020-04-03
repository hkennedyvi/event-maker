const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  category: { type: String, required: true },
  subgategory: { type: String, required: true },
  participants: { type: Number, required: true},
  location: {type: String, required: true},
  duration: {type: Number, required: true}
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;