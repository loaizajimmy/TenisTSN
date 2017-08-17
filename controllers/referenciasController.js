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
            let data = {
                tenisID: id,
                estilo: response.estilo,
                genero: response.genero,
                marca: response.marca,
                estanteID: response.estanteID,
                bodega: response.estante.bodega,
                referencias: response.referencias
            };
            res.render('referencias/create', data);
        });
    },

    createPOST: function (req, res) {
        let id = req.params.tenisID;
        request({
            url: `${config.host}:${config.port}/api/ReferenciaTenis`,
            method: 'POST',
            form: {
                tenisID: id,
                talla: req.fields.talla,
                color: req.fields.color,
                cantidad: req.fields.cantidad
            }
        }, function (err, httpResponse, body) {
            if (err)
                console.log(err.toString());

            uploadImages(req, res, JSON.parse(body).ReferenciaTenisID, id);
        });
    },

    detailsGET: function (req, res) {
        let referenciaID = req.params.referenciaID;
        request({
            url: `${config.host}:${config.port}/api/ReferenciaTenis/${referenciaID}`,
            method: 'GET'
        }, function (err, httpResponse, body) {
            let data = {
                title: "Ref Detalles",
                referencia: JSON.parse(body)
            };
            res.render('referencias/details', data);
        });
    },

    updateGET: function (req, res) {
        let referenciaID = req.params.referenciaID;
        request({
            url: `${config.host}:${config.port}/api/ReferenciaTenis/${referenciaID}`,
            method: 'GET'
        }, function (err, httpResponse, body) {
            let data = {
                title: "Ref Edit",
                referencia: JSON.parse(body)
            };
            res.render('referencias/edit', data);
        });
    },

    updatePUT: function (req, res) {
        let referenciaID = req.params.referenciaID;
        console.log(referenciaID);
        console.log(req.fields);
        request({
            url: `${config.host}:${config.port}/api/ReferenciaTenis/${referenciaID}`,
            method: 'PUT',
            form: {
                ReferenciaTenisID: referenciaID,
                tenisID: req.fields.tenisID,
                talla: req.fields.talla,
                color: req.fields.color,
                cantidad: req.fields.cantidad
            }
        }, function (err, httpResponse, body) {
            if (err)
                console.log(err);
            console.log(body);
            res.redirect('/referencias/details/' + referenciaID);
        });

    },

    deleteDELETE: function (req, res) {
        let referenciaID = req.params.referenciaID;
        request({
            url: `${config.host}:${config.port}/api/ReferenciaTenis/${referenciaID}`,
            method: 'DELETE'
        }, function (err, httpResponse, body) {
            if (err)
                console.log(err);
            res.redirect('/');
        });
    }
};


function uploadImages(req, res, id, tenisID) {
    let cont = 0;
    for (let files in req.files) {
        let file = req.files[files];
        console.log(file.name);
        const extension = file.name.split(".").pop();
        mv(file.path, `public/images/${id}_${cont}.${extension}`,
            function (err) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log('file moved successfully');
                }
            });
        cont++;
    }
    saveImages(req, res, id, tenisID);
}

function saveImages(req, res, id, tenisID) {
    let cont = 0;
    for (let files in req.files) {
        let file = req.files[files];
        const extension = file.name.split(".").pop();
        request({
            url: `${config.host}:${config.port}/api/Fotos`,
            method: 'POST',
            form: {
                ruta: `/images/${id}_${cont}.${extension}`,
                ReferenciaTenisID: id
            }
        }, function (err, httpResponse, body) {
            if (err)
                console.log(err.toString());
        });
        cont++;
    }
    res.redirect('/referencias/create/' + tenisID);
}