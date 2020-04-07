const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

const isAuthenticated = require("../passport/isAuthenticated");
// API Routes
router.use("/api", apiRoutes)

router.get("/home", isAuthenticated, function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

router.get("/myprofile", isAuthenticated, function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});



module.exports = router;