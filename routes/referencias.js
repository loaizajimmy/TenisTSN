let express = require('express');
let router = express.Router();
let referenciasController = require('../controllers/referenciasController');


router.route('/create/:tenisID')
    .get(referenciasController.createGET)
    .post(referenciasController.createPOST);

router.get('/details/:referenciaID', referenciasController.detailsGET);


router.route('/update/:referenciaID')
    .get(referenciasController.updateGET)
    .put(referenciasController.updatePUT);

router.delete('/delete/:referenciaID', referenciasController.deleteDELETE);

router.delete('/delete/foto/:fotoID', referenciasController.deleteFotoDELETE);

module.exports = router;