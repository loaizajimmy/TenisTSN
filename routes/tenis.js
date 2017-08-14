let router = require('express').Router();
let tenisController = require('../controllers/tenisController');

router.route('/create')
    .get(tenisController.createGET)
    .post(tenisController.createPOST);


module.exports = router;