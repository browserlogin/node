const helper = require('../helper/helper');
//const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
//mongodb url with database 'mongodb://localhost:27017/databasename'
const MONGO_URL = 'mongodb://localhost:27017/rohit';
helper.messageInConsole('mongo file');
//const m =process.env.MONGO_URL;
mongoose.connect(MONGO_URL, {
                
            });
const db = mongoose.connection;
db.on('connected',() =>{
    helper.messageInConsole('mongo db server connect');
});
db.on('error',(err) =>{
    helper.messageInConsole('mongo db server Error'+err);
});
db.on('disconnected',() =>{
    helper.messageInConsole('mongo db server disconnect');
});
module.exports = db;