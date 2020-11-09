![redux](https://i.imgur.com/GDZs6bN.png)
# Requirements
[NodeJS](https://nodejs.org/en/)
[Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable)
# Instructions
[Pokedex](https://github.com/RobbiePlata/Pokedex/archive/master.zip)
```
cd pokedex
yarn install
```
```
/packages/server/.env -> 
MONGOUSERNAME="yourusername"
MONGOPASSWORD="yourpassword"
DBNAME="yourdbname"
```
```
/packages/server/resources/config ->
"myNames": "scnickname"
```

![MongoDB](https://i.imgur.com/pUOSIkm.png)
## MongoDB Player Schema
```
validator: { 
    $jsonSchema: { 
      bsonType: "object", 
      required: [ "name", "type", "description", "image" ], 
      properties: { 
        name: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        type: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        description: {
          bsonType: "string",
          description: "must be a string and is required"
        },
	race: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        image: {
          bsonType: "string",
          description: "must be a string and is required"
        },
      }
    }
  }
  ```
![example](packages/client/public/example.gif)
