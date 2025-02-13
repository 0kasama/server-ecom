const router = require('express').Router();
const cityController = require("../controllers/CityController")

router.get("/provinces", cityController.findProvinces)
router.get("/", cityController.findAll)
router.get("/:id", cityController.findOne)

module.exports = router