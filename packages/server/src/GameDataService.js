var config = require('../resources/config.json');

var http = require('http');

class GameDataService {
    
    async GetGameData(callback) {
        var gameurl = "http://localhost:6119/game"; //StarCraft 2 Port
        var data;
        http.get(gameurl, (resp) => {
            resp.on('data', (chunk) => {
                data = JSON.parse(chunk);
            });
            resp.on('end', () => {
                this.ProcessGameData(data, (gamedata) => {
                    callback(gamedata);
                });
            });
        }).on("error", (err) => {
            callback("StarCraft II must be open");
        });
    }
  
    async GetPlayerInformation(playerName, callback){
        var sc2Ladder = `http://www.sc2ladder.com/api/player?query=${playerName}&limit=` + 1;
        var data;
        http.get(sc2Ladder, (resp) => {
            resp.on('data', (chunk) => {
                data = JSON.parse(chunk);
            });
            resp.on('end', () => {
                callback(data);
            });
        }).on("error", (err) => {
            callback("Error Retrieving Player information");
        });
    }

    async ProcessGameData(data, callback) {
        var players = data.players;
        console.log(players)
        for (var index in players) {
            if (players.length == 2){ // Get 2 player game
                if (!config.myNames.includes(players[index].name)) { // Get opposing player
                    this.GetPlayerInformation(players[index].name, (playerinfo) => {
                        callback(playerinfo);
                    });
                }
            }
            else{
                callback("Must be 1v1 game")
            }
        }
    }
  
}

module.exports = new GameDataService;
