var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProposalSchema = new Schema({
  title: {type: String, required: true },
  objective: { type: String, required: true },
  description: { type: String, required: true },
  problems: { type: String, required: true },
  contributions: { type: String, required: true },
  milestones: [{type: String}],
  scale: { type: String, required: true },
  responsible: { type: String },
  otherActors: { type: String },
  type: { type: String, required: true },
  extra: { type: String },
  topics: [{type: String}],
  contact: {
    names: { type: String, required: true },
    surnames: { type: String, required: true },
    province: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    education: { type: String },
    institution: { type: String },
    institutionSector: {type: String }
  }
});

var Proposal = mongoose.model("Proposal", ProposalSchema);
module.exports = Proposal;