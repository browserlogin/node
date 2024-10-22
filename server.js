//import { messageInConsole } from './helper.js'; //ES6
//add helper file
//add env file
require('dotenv').config();
const helper = require('./helper/helper');
helper.messageInConsole('server.js');

//add express
const express = require('express')
const app = express();

//request body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

//mongodb conenction
const db = require('./database/mongodb');



//add mdummy model
//const Dummy = require('./models/dummy');


//route default
app.get("/", function (req, res) {
    helper.messageInConsole('index.js');
    res.send('welcome'+helper.getUuid + process.env.MONGO_URL);
})
//import dummy router
const dummyRoutes = require('./routes/dummy');
app.use("/dummy",dummyRoutes);

//add server port by express
const PORT = process.env.PORT || 3000;  // Read from .env if not availab
app.listen(PORT, () => {
    helper.messageInConsole('server port run :' + PORT);
})
