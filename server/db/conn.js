const mongoose = require("mongoose");


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
