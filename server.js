const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const path = require("path");

const passport = require("./passport/setup");
const auth = require("./routes/auth");

const mongoose = require("mongoose");
const PORT = process.env.PORT || 3002;
const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/cahoots";
const app = express();

const Event = require("./models/event");

mongoose.connect(MONGO_URI, { useNewUrlParser: true })
.then(console.log(`MongoDB connected at ${MONGO_URI}`));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/api/auth", auth);

app.post("/post-event", (req, res) => {
  var eventData = new Event(req.body);
  eventData.save()
      .then(item => {
          res.send("event saved to database");
      })
      .catch(err => {
          res.status(400).send("Unable to save to database");
      });
});

// app.post('/post-feedback', function (req, res) {
//   MONGO_URI.then(function(db) {
//       delete req.body._id; // for safety reasons
//       db.collection('feedbacks').insertOne(req.body);
//   });    
//   res.send('Data received:\n' + JSON.stringify(req.body));
// });

// app.get('/view-feedbacks',  function(req, res) {
//   MONGO_URI.then(function(db) {
//       db.collection('feedbacks').find({}).toArray().then(function(feedbacks) {
//           res.status(200).json(feedbacks);
//       });
//   });
// });

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

// Routes
app.use("/api/auth", auth);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
  
