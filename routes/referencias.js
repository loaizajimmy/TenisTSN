let express = require('express');
let router = express.Router();
let referenciasController = require('../controllers/referenciasController');


router.route('/create/:tenisID')
    .get(referenciasController.createGET)
    .post(referenciasController.createPOST);

router.post('/images', referenciasController.uploadImages);

module.exports = router;