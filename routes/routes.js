let express = require('express');
let router = express.Router();
let homeController = require('../controllers/homeController');

router.get('/', homeController.index);
router.get('/alerts', homeController.about);


module.exports = router;