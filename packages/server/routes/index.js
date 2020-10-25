var express = require('express');
var router = express.Router();
var DataService = require('../src/DataService');

/* GET home page. */
router.get('/', function(req, res, next) {
  DataService.GetGameData((data) => {
    res.send(data)
  })
});

module.exports = router;
