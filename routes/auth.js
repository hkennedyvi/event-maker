const express = require("express");
const router = express.Router();
const passport = require("passport");

//Right now, this looks for a user, confirms password if user exists, or creates
//a new user and logs them in. I'd like to break this out into two post
router.post("/register", (req, res, next) => {
   
    passport.authenticate("local", function(err, user, info) {
        console.log("REGISTER TEST");
        if (err) {
            return res.status(400).json({ errors: err });
        }
        if (!user) {
            return res.status(400).json({ errors: "No user found" });
        }
        req.logIn(user, function(err) {
            if (err) {
                return res.status(400).json({ errors: err });
            }
            return res.status(200).json({ success: true });
        });
    })(req, res, next);
});

router.post("/login", (req, res, next) => {
   
    passport.authenticate("local", function(err, user, info) {
        console.log("LOGIN TEST");
        if (err) {
            return res.status(400).json({ errors: err });
        }
        if (!user) {
            return res.status(400).json({ errors: "No user found" });
        }
        req.logIn(user, function(err) {
            if (err) {
                return res.status(400).json({ errors: err });
            }
            return res.status(200).json({ success: true });
        });
    })(req, res, next);
});


module.exports = router;