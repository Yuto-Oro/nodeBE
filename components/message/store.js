const db = require('mongoose');
const Model = require('./model');
require('dotenv').config();

//usamos las promesas nativas
db.Promise = global.Promise;

db.connect(process.env.DB_URL, { useNewUrlParser: true, 
    useUnifiedTopology: true})
    .then(() => console.log('[db] Successfully connected!'))
    .catch(err => console.error('[db]', err));


function addMessage(msg) {
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessages() {
    const messages = await Model.find();
    return messages;
}

module.exports = {
    add: addMessage,
    list: getMessages
    //get
    //update
    //delete
}