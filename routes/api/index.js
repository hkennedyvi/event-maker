const router = require("express").Router();
const eventsRoutes = require("./events");
const usersRoutes = require("./users");

// Events routes
router.use("/events", eventsRoutes);

//User routes
router.use("/users", usersRoutes);

module.exports = router;