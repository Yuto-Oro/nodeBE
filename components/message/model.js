const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//definición de esquema

const mySchema = new Schema({
    user: String,
    message: {
        type: String,
        required: true
    },
    date: Date
});

// Como se va a llamar nuestra coleccion en la bd
const Model = mongoose.model('Messages', mySchema);
module.exports = Model;