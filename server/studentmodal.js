const mongoose = require("mongoose");

const SopSchema = new mongoose.Schema({
  email: String,
  name: String,
  age: Number,
  highestedu: String,
  highestinst: String,
  study: String,
  workexp: String,
  cainst: String,
  caprog: String,
  country: String,
  goals: String,
  englistening: String,
  engreading: String,
  engspeaking: String,
  engwriting: String,
  fyrfee: Boolean,
  fee: String,
  gic: Boolean,
  gicfee: String,
});

module.exports = mongoose.model("student", SopSchema);
