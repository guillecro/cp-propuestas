// const { Types: { ObjectId } } = require('mongoose')
const Proposal = require('../models/proposal')

exports.get = async function get (query) {
  return Proposal.findOne(query)
}

exports.getAll = async function getAll (query) {
  return Proposal.find(query)
}

exports.create = async function create (data) {
  return (new Proposal(data)).save()
}