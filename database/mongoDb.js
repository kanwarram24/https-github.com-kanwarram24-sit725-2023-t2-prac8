const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://kanwarram:kanwar12@cluster0.rxxpsnk.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

client.connect();

module.exports = client;