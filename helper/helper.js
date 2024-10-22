//uuid 
const uuid = require('uuid');
const getUuid = uuid.v4();

const messageInConsole = function (fileName = 'default.js') {
    console.log(fileName);
}
const consoleError = function (error) {
    console.error("ERROR : " + error);
}

module.exports = {
    messageInConsole,
    consoleError,
    getUuid
}
