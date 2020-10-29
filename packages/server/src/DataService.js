const config = require('../resources/config.json');
const http = require('http');
const MongoDBClient = require('./MongoDBClient');

class DataService {
    
    async GetAllData() {
        return new Promise((resolve, reject) => {
            this.GetGameData()
            .then((gamedata) => {
                this.RetrieveOpponentData(gamedata)
                .then((opponent) => {
                    resolve(opponent);
                })
                .catch((err) => {
                    reject(err);
                });
             })
            .catch((err) => {
                reject(err);
            });
        });
    }

    async GetGameData() {
        return new Promise((resolve, reject) => {
            var gameurl = "http://localhost:6119/game"; //StarCraft 2 Port
            var gamedata;
            http.get(gameurl, (resp) => {
                resp.on('data', (chunk) => {
                    gamedata = JSON.parse(chunk);
                });
                resp.on('end', () => {
                    if(gamedata.isReplay !== true) {
                        if(gamedata.players.length !== 0) {
                            if(gamedata.players[0].result === 'Undecided') {
                                resolve(gamedata);
                            }
                            else{
                                reject("Game is not undecided")
                            }
                        }
                        else{
                            reject("No games played yet")
                        }
                    }
                    else{
                        reject("Currently in replay")
                    }
                });
            }).on("error", (err) => {
                reject("StarCraft must be open. ", err);
            });
        })
    }

    async RetrieveMMR(playerName){
        return new Promise((resolve, reject) => {
            var sc2Ladder = `http://www.sc2ladder.com/api/player?query=${playerName}&limit=` + 1;
            var data;
            http.get(sc2Ladder, (resp) => {
                resp.on('data', (chunk) => {
                    data = JSON.parse(chunk);
                });
                resp.on('end', () => {
                    resolve({mmr: data});
                }); 
            }).on("error", (err) => {
                reject(err);
            });
        })
    }

    async RetrieveOpponentData(data) {
        return new Promise((resolve, reject) => {
            var players = data.players;
            if(players.length == 2) {
                if(config.myNames.length > 0) {
                    if (players[0].name !== players[1].name) {
                        var opponentdata = !config.myNames.includes(players[0].name) ? players[0] : players[1];
                        this.RetrieveMMR(opponentdata.name).then((mmr) => {
                            resolve({...opponentdata, ...mmr});
                        })
                        .catch((err) => { reject(err); });
                    } 
                    else{ reject("Opponent name matches a config name"); }
                }
                else{ reject("No names found in config"); }
            }
            else { reject("Game does not contain exactly 2 players"); }
        })
    }

}

module.exports = new DataService;
