const router = require("express").Router();
const listController = require("../../controllers/listController")

// Add controller here
router.route("/")
    .get(listController.findLists)

module.exports = router