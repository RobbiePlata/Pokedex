const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

class MongoDBClient {
  
  constructor() {
    this.username = process.env.MONGOUSERNAME;
    this.password = process.env.MONGOPASSWORD;
    this.dbname = process.env.DBNAME;
    this.uri = `mongodb+srv://${this.username}:${this.password}@${this.dbname}.mbhau.mongodb.net/${this.dbname}?retryWrites=true&w=majority`
    this.client = new MongoClient(this.uri, {useNewUrlParser: true, useUnifiedTopology: true});
    this.db;
  }
  
  async Connect() {
    return new Promise((resolve, reject) => {
      return this.client.connect((err, client) => {
        if(err) { reject(err); }
        else{ 
          this.client = client; 
          this.db = client.db(this.dbname);
          resolve(client);
        }
      })
    })
  }

  async FindDocuments(collectionname, filter) {
    return new Promise((resolve, reject) => {
      const collection = this.db.collection(collectionname);
      collection.find(filter).toArray((err, docs) => {
        if(err) reject(err);
        if(docs.length > 0){
          resolve(docs[0]);
        }
        else{
          reject("Player name not in DB");
        }
      });
    });
  }

}

module.exports = new MongoDBClient;