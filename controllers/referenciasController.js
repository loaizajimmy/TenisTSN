let request = require('request');
const config = require("./config");
let mv = require('mv');

module.exports = {
    createGET: function (req, res) {
        let id = req.params.tenisID;
        request({
            url: `${config.host}:${config.port}/api/Tenis/${id}`,
            method: 'GET'
        }, function (err, httpResponse, body) {
            if (err)
                console.log(err.toString());

            let response = JSON.parse(body);
            console.log(response);
            let data = {
                tenisID: id,
                estilo: response.estilo,
                genero: response.genero,
                marca: response.marca,
                estanteID: response.estanteID,
                bodega: response.estante.bodega
            };

            console.log('Voy a enviar esto');
            console.log(data);

            res.render('referencias/create', data);
        });
    },

    createPOST: function (req, res) {
        let id = req.params.tenisID;
        console.log('llegue esto');
        console.log(req.body);
        console.log(req);
    },

    uploadImages: function (req, res) {
        console.log('llego el archivo');
        console.log(req.files.length);
        for (let files in req.files) {
            let file = req.files[files];
            console.log(file.name);
            mv(file.path, "public/images/" + file.name,
                function (err) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log('file moved successfully');
                    }
                });
        }
        res.sendStatus(200);
    }

};