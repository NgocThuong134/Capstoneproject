const mongoose = require("mongoose");

const tableSchema = new mongoose.Schema({
  // for seats
  seatNumber: {
    type: Number,
    required: true,
  },
  // status
  status: {
    type: String,
    required: true,
    enum: ["available", "occupied", "reserved"],
    default: "available",
  },
  // note
  note: {
    type: String,
  },
  // createAT
  createAt: {
    type: Date,
    default: Date.now,
  },
  // updateAt
  updateAt: {
    type: Date,
    default: Date.now,
  },
});

const Table = mongoose.model("table", tableSchema);

module.exports = Table;