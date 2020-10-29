var express = require('express');
var router = express.Router();
var DataService = require('../src/DataService');
var MongoDBClient = require('../src/MongoDBClient')

MongoDBClient.Connect()

/* GET home page. */
router.get('/', function(req, res, next) {
  DataService.GetAllData()
  .then((data) => {
    MongoDBClient.FindDocuments("players", {name: data.name, race: data.race}).then((docs) => {
      res.send({...data, ...docs});
    }).catch((err) => {
      console.log(err);
      res.send({});
    })
  })  
  .catch((err) => {
    console.log(err);
    res.send({});
  })
});

module.exports = router;
