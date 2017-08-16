let request = require('request');
const config = require("./config");

module.exports = {
    createGET: function (req, res) {
        res.render('tenis/create', {
            title: "Create"
        });
    },

    createPOST: function (req, res) {
        console.log(req.fields);

        request({
            url: `${config.host}:${config.port}/api/Tenis`,
            method: 'POST',
            form: {
                estanteID: req.fields.estante,
                estilo: req.fields.estilo,
                marca: req.fields.marca,
                genero: req.fields.genero,
                tiempoGarantia: req.fields.garantia
            }
        }, function (err, httpResponse, body) {
            if (err)
                console.log(err.toString());

            res.redirect('/referencias/create/' + JSON.parse(body).tenisID);
        });
    }
};
