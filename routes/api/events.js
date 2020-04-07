const router = require("express").Router();
const eventsController = require("../../controllers/eventsController");

router.route('/')
    .get(eventsController.findAll)
    .post(eventsController.create);

router.route("/:id")
    .delete(eventsController.remove);

module.exports = router;