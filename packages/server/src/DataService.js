var config = require('../resources/config.json');
var http = require('http');

class DataService {

    async GetGameData(callback) {
        var gameurl = "http://localhost:6119/game"; //StarCraft 2 Port
        var data;
        http.get(gameurl, (resp) => {
            resp.on('data', (chunk) => {
                data = JSON.parse(chunk);
            });
            resp.on('end', () => {
                if(data.players[0].result !== 'Victory' 
                && data.players[0].result !== 'Defeat' 
                && data.isReplay !== true){
                    this.RetrieveOpponentMMR(data, (ladder) => {
                        callback({...data, ...ladder});
                    });
                }
                else{
                    callback({})
                }
            });
        }).on("error", (err) => {
            console.log("StarCraft must be open");
            callback({});
        });
    }

    async RetrieveMMR(playerName, callback){
        var sc2Ladder = `http://www.sc2ladder.com/api/player?query=${playerName}&limit=` + 1;
        var data;
        http.get(sc2Ladder, (resp) => {
            resp.on('data', (chunk) => {
                data = JSON.parse(chunk);
            });
            resp.on('end', () => {
                callback({mmr: data});
            });
        }).on("error", (err) => {
            console.log("Error Retrieving Player information")
            callback({});
        });
    }

    async RetrieveOpponentMMR(data, callback) {
        var players = data.players;
        if(players.length == 2){
            for (var index in players) {
                if (!config.myNames.includes(players[index].name)) { // Get opposing player
                    this.RetrieveMMR(players[index].name, (mmr) => {
                        callback(mmr);
                    });
                }
            }
        }
        else{
            callback({})
        }
        
    }

    async RetrieveOpponentData() {

    }

}

module.exports = new DataService;
