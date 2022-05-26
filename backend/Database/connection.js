const mongoose = require("mongoose")

const ConnectToMongo = async () => {
    try {
        const success = await mongoose.connect(process.env.Mongo_URI)
        if (success) {
            console.log(`Connected to Database: ${success.connection.name}⛎`);
        }
    } catch (err) {
        console.log(err);
    }
}

module.exports = ConnectToMongo;