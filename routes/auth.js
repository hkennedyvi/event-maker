const express = require("express");
const router = express.Router();
const passport = require("passport");
var jwt = require('jsonwebtoken');
var secret = 'appname-secret';

const withAuth = function (req, res, next) {
  const token =
    req.body.token ||
    req.query.token ||
    req.headers['x-access-token'] ||
    req.cookies.token;
  if (!token) {
    res.status(401).send('Unauthorized: No token provided');
  } else {
    jwt.verify(token, secret, function (err, decoded) {
      if (err) {
        res.status(401).send('Unauthorized: Invalid token');
      } else {
        req.email = decoded.email;
        next();
      }
    });
  }
}

//Right now, this looks for a user, confirms password if user exists, or creates
//a new user and logs them in. I'd like to break this out into two post
router.post("/register", (req, res, next) => {

  passport.authenticate("local", function (err, user, info) {
    console.log("REGISTER TEST");
    console.log(req)
    console.log(res)
    if (err) {
      return res.status(400).json({ errors: err });
    }
    if (!user) {
      return res.status(400).json({ errors: "No user found" });
    }
    req.logIn(user, function (err) {
      if (err) {
        return res.status(400).json({ errors: err });
      }
      const email = req.body.email;
      // Issue token
      const payload = { email };
      const token = jwt.sign(payload, secret, {
        expiresIn: '1h'
      });
      res.cookie("emailaddress", email);
      return res.cookie('token', token, { httpOnly: true })
        .status(200).json({ success: true });
    });
  })(req, res, next);
});

router.post("/login", (req, res, next) => {

  passport.authenticate("local", function (err, user, info) {
    console.log(user);
    console.log(req.body.email);
    if (!user) {
      return res.status(400).json({ errors: "No user found" });
    }
    const email = req.body.email;
    // Issue token
    const payload = { email };
    const token = jwt.sign(payload, secret, {
      expiresIn: '1h'
    });
    res.cookie("emailaddress", email);
    return res.cookie('token', token, { httpOnly: true })
      .status(200).json({ success: true });
    // console.log("LOGIN TEST");
    // if (err) {
    //     return res.status(400).json({ errors: err });
    // }
    // if (!user) {
    //     return res.status(400).json({ errors: "No user found" });
    // }
    // req.logIn(user, function(err) {
    //     if (err) {
    //         return res.status(400).json({ errors: err });
    //     }
    //     return res.status(200).json({ success: true });
    // });
  })(req, res, next);
});

router.get("/logout", function (req, res) {
  res.clearCookie("emailaddress");
  res.clearCookie('token').send('cookie has been deleted');
});

router.get("/checkToken", withAuth, function (req, res) {
  res.sendStatus(200);
});

module.exports = router;