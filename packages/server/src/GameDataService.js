let config = require("../resources/config.json")

var http = require('http');
var https = require('https');

class GameDataService {
    
    async GetGameData(callback) {
        var gameurl = "http://localhost:6119/game"; //StarCraft 2 Port
        var data;
        http.get(gameurl, (resp) => {
            resp.on('data', (chunk) => {
                var parsedData = JSON.parse(chunk);
                var data = JSON.parse(chunk);
                console.log(parsedData);
                var pokedexInfo = this.processGameData(parsedData);
                //console.log(pokedexInfo);
            });
            resp.on('end', () => {
                callback(data)
            });
        }).on("error", (err) => {
            callback("StarCraft II must be open");
        });
    }
    getPlayerInformation(playerName){
        //var = "https://us.api.blizzard.com/sc2/legacy/profile/1/1/2380853/matches?access_token=USYvFLcIcSmH1ICg3GeXjNTTAS5Dw0a74J"
        var sc2Ladder = "http://www.sc2ladder.com/api/player?query="+playerName+"&limit="+1;
        var data;
        http.get(sc2Ladder, (resp) => {
            resp.on('data', (chunk) => {
                data = JSON.parse(chunk);
                console.log(data);
            });
            resp.on('end', () => {
                return data;
            });
        }).on("error", (err) => {
            return "Error Retrieving Player information";
        });
    }

    processGameData(data) {
        var playersList=data.players;
        //console.log("playerList:" + playerList);
        for (var index in playersList){
            var player = playersList[index];
            if (player.name == config.myName) {
                var result = this.getPlayerInformation(player.name);
                console.log(result);
                return result;
            }
        }
        

    }
}

module.exports = new GameDataService;
