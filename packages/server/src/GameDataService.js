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
                if(data.isReplay == false){
                    callback(data)
                }
                else{
                    callback("Not ingame/In Replay");
                }
            });
        }).on("error", (err) => {
            callback("StarCraft II must be open");
        });
    }
}

module.exports = new GameDataService;
