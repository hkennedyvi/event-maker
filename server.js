const express = require('express')
const session = require("express-session");

const PORT = process.env.PORT || 3002;
const app = express();

const MONGO_URI = process.env.MONGODB_URI || "mongodb://user1:password1@ds159328.mlab.com:59328/heroku_8c1n3d87";
// const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/cahoots";
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo")(session);
const passport = require("./passport/setup");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require("path");

mongoose.connect(MONGO_URI, { useNewUrlParser: true })
.then(console.log(`MongoDB connected at ${MONGO_URI}`));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Express Session
app.use(
  session({
      secret: "cahoots-",
      resave: false,
      saveUninitialized: true,
      store: new MongoStore({ mongooseConnection: mongoose.connection })
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());


app.use(cookieParser());

// Declaring app routes
const routes = require("./routes");
const auth = require("./routes/auth");

app.use(routes);
app.use("/api/auth", auth);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
