let request = require('request');
const config = require("./config");

module.exports = {

    indexGET: function (req, res) {
        request({
            url: `${config.host}:${config.port}/api/Tenis`,
            method: 'GET'
        }, function (err, httpResponse, body) {
            if (err)
                console.log(err);

            let data = {
                title: "Tenis",
                listaTenis: JSON.parse(body)
            };
            res.render('tenis/index', data);
        });
    },

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
    },

    detailsGET: function (req, res) {
        let tenisID = req.params.tenisID;
        request({
            url: `${config.host}:${config.port}/api/Tenis/${tenisID}`,
            method: 'GET'
        }, function (err, httpResponse, body) {
            if (err)
                console.log(err);
            let data = {
                title: "Tenis Detalles",
                tenis: JSON.parse(body)
            };
            res.render('tenis/details', data);
        });
    }
};
