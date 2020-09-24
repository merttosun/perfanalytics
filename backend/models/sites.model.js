const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const sites_schema = new Schema({
  site_url: {
    type: String,
    required: true,
  },
});

const Sites = mongoose.model("Analysis", sites_schema);
module.exports = Sites;
