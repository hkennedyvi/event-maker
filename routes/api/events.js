const router = require("express").Router();
const eventsController = require("../../controllers/eventsController");

router.route('/')
    .get(eventsController.findAll)
    .post(eventsController.create);

router.route("/:creator")
    .get(eventsController.findByID);

router.route("/:participants")
    .put(eventsController.update);

module.exports = router;