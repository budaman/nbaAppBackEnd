var express = require('express');
var router = express.Router();
const Team = require('../models/team');


/* GET users listing. */
router.get('/getTeams', function(req, res, next) {
  Team.find({}, function (err, foundData) {
    if(err) {
      console.log(err)
      res.status(500).send()
    } else {
        foundData
      res.send(foundData)
    }
  })
});

module.exports = router;
