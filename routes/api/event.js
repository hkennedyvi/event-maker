const router = require("express").Router();
const controller = require("../../controllers/eventsController");

// router.route("/home")
//     .get(controller.findAll)
//     .put(controller.create);

// router.route("/:id")
//     .get(controller.findByID)
//     .delete(controller.remove);

router.route("/event")
    .post(controller.create);

module.exports = router;