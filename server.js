const path = require("path");
const express = require('express')
const session = require("express-session");

const PORT = process.env.PORT || 3002;
const app = express();
const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/cahoots";
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo")(session);
const passport = require("./passport/setup");

// const Event = require("./models/event");

mongoose.connect(MONGO_URI, { useNewUrlParser: true })
.then(console.log(`MongoDB connected at ${MONGO_URI}`));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// app.post("/post-event", (req, res) => {
//   var eventData = new Event(req.body);
//   console.log(eventData);
//   eventData.save()
//       .then(item => {
//           res.send("event saved to database");
//       })
//       .catch(err => {
//           res.status(400).send("Unable to save to database");
//       });
// });

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

// Declaring app routes
const routes = require("./routes");
const auth = require("./routes/auth");

app.use(routes);
app.use("/api/auth", auth);

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
