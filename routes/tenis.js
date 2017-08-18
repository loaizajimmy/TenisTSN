let router = require('express').Router();
let tenisController = require('../controllers/tenisController');

router.get('/', tenisController.indexGET);

router.route('/create')
    .get(tenisController.createGET)
    .post(tenisController.createPOST);

router.get('/details/:tenisID', tenisController.detailsGET)


module.exports = router;