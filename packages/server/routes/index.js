var express = require('express');
var router = express.Router();
var GameDataService = require('../src/GameDataService');

/* GET home page. */
router.get('/', function(req, res, next) {
  setTimeout(() => {
    (async() => {
      GameDataService.GetGameData((data) => {
          res.send(data)
      })
    })()
  }, 1000);
});

module.exports = router;
