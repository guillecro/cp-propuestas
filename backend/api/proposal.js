const status = require('http-status')
const express = require('express')
const router = express.Router()
const Proposal = require('../db/proposal')

router.route('/')
.post(
  async (req, res, next) => {
    try{
      const newProposal = await Proposal.create(req.body)
      res.status(status.CREATED).json(newProposal)
      // res.status(status.OK)
    } catch(err) {
      next(err)
    }
  }
)
.get(
  async (req, res, next) => {
    try{
      let query = {}
      if(req.query.tags){
        query.topics = { "$in" : req.query.tags.split(',') }
      }
      const list = await Proposal.getAll(query)
      res.status(status.OK).json(list)
    } catch(err) {
      next(err)
    }
  }
)

router.route('/:id')
.get(
  async (req, res, next) => {
    try{
      const data = await Proposal.get({_id: req.params.id})
      res.status(status.OK).json(data)
    } catch(err) {
      next(err)
    }
  }
)

module.exports = router