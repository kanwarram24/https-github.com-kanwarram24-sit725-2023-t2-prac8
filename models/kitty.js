let client = require('../database/mongoDb');
let collection = client.db('Animals').collection('Kitty');

function postCat(cat,callback) {
    collection.insertOne(cat,callback);
}

function getCats(callback){
    collection.find({}).toArray(callback);
}

function deleteCat(cat,callback) {
    collection.deleteOne(cat,callback);
}

module.exports = {postCat,getCats,deleteCat}