const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const sites_schema = new Schema({
  siteURL: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
});

const Sites = mongoose.model("Sites", sites_schema);

module.exports = Sites;
