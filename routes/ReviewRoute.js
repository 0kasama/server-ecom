const router = require('express').Router();
const reviewController = require('../controllers/ReviewController');
const { authentication } = require('../middlewares/auth');

router.get('/', reviewController.findAll);
router.get('/:id', reviewController.findOne);
router.use(authentication);
router.post('/', reviewController.create);
router.put('/:id', reviewController.update);
router.delete('/:id', reviewController.destroy);

module.exports = router;
