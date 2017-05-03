const Router = require('co-router');
const router = Router();
const hotelsController = require('./hotels.controller');

router.get('/api/hotels', hotelsController.getHotels);


module.exports = router;
