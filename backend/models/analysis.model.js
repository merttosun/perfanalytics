const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const analysis_schema = new Schema(
  {
    targetURL: {
      type: String,
      required: true,
    },
    payload: {
      resource_data: {
        type: Array,
      },
      windowLoad: {
        type: Number,
        required: true,
      },
      domLoad: {
        type: Number,
        required: true,
      },
      ttfb_data: {
        type: Number,
        required: true,
      },
      fcp_data: {
        type: Number,
        required: true,
      },
    },
  },
  { timestamps: true }
);

const Analysis = mongoose.model("Analysis", analysis_schema);
module.exports = Analysis;
