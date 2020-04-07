const router = require("express").Router();
const eventRoutes = require("./event");

router.use("/event", eventRoutes);

module.exports = router;