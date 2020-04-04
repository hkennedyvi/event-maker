const router = require("express").Router();
const controller = require("../../controllers/eventsController");

router.route("/home")
    .get(controller.findAll)
    .put(controller.create);

module.exports = router;