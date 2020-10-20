var express = require('express');
var router = express.Router();
var GameDataService = require('../src/GameDataService');

/* GET home page. */
router.get('/', function(req, res, next) {
  GameDataService.GetGameData((data) => {
    res.send(data)
  })
});

module.exports = router;
