const mongoose = require("mongoose");

// const DB = "mongodb://awesomeharrysingh:awesomeharrysingh@ac-rcvyzk0-shard-00-00.3jmxzok.mongodb.net:27017,ac-rcvyzk0-shard-00-01.3jmxzok.mongodb.net:27017,ac-rcvyzk0-shard-00-02.3jmxzok.mongodb.net:27017/mernApp?ssl=true&replicaSet=atlas-7e55en-shard-0&authSource=admin&retryWrites=true&w=majority"
const DB = process.env.DATABASE;
// mongoose.connect(DB, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
// }).then(() => {}).catch((err) => console.log(err.reason))

// mongoose.connect(DB).then(()=>console.log("database connected"))
// .catch(error => handleError(error));\

mongoose.connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then(
    () => { console.log("DataBase Connected") },
    err => { console.log(err.reason) }
);