const helper = require('../helper/helper');
require('dotenv').config();
const mongoose = require('mongoose');
//mongodb url with database 'mongodb://localhost:27017/databasename'
//const MONGO_URL = 'mongodb://localhost:27017/rohit';//local
helper.messageInConsole('mongo file');
//const MONGO_URL = process.env.MONGO_URL;
mongoose.connect(process.env.MONGO_URL, {

});
const db = mongoose.connection;
db.on('connected', () => {
    helper.messageInConsole('mongo db server connect');
});
db.on('error', (err) => {
    helper.messageInConsole('mongo db server Error' + err);
});
db.on('disconnected', () => {
    helper.messageInConsole('mongo db server disconnect');
});
module.exports = db;