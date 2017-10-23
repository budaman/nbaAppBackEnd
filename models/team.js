const mongoose = require('mongoose')

const TeamSchema = mongoose.Schema({
  teamId: {
    type: String,
    required: true
  },
  abbreviation: {
    type: String,
    required: true
  },
  teamName: {
    type: String,
    required: true
  },
  simpleName: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  picUrl: {
    type: String,
    required: true
  },
  roadResults: {
    type: Object,
    required: true
  },
  homeResults: {
    type: Object,
    required: true
  }
})

const Product = module.exports = mongoose.model('Team', TeamSchema)
