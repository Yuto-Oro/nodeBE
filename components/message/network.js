//Gestionamos las peticiones desde aqui.

const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', function(req, res) {
    console.log(req.headers);
    res.header({
        "custom-header": "Nuestro valor personalizado!"
    })
    response.success(req, res, "Lista de mensajes");
});

router.post('/', function(req, res) {
    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage) => {
            response.success(req, res, 'Creado correctamente' + fullMessage, 201);
        }).catch(err => {
            response.error(req, res, 'Invalid information', 400, 'Error in controller');
        });
});

module.exports = router;