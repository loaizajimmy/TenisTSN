let request = require('request');
const config = require("./config");

module.exports = {
    createGET: function (req, res) {
        res.render('tenis/create', {
            title: "Create"
        });
    },

    createPOST: function (req, res) {
        console.log(req.body);
        request({
            url: `${config.host}:${config.port}/api/Tenis`,
            method: 'POST',
            form: {
                estanteID: req.body.estante,
                estilo: req.body.estilo,
                marca: req.body.marca,
                genero: req.body.genero,
                tiempoGarantia: req.body.garantia
            }
        }, function (err, httpResponse, body) {
            if (err)
                console.log(err.toString());
            res.json(JSON.parse(body));
        });
    }
};