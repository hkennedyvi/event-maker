const mongoose = require("mongoose");
const db = require("../models");
const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/cahoots";

mongoose.connect(MONGO_URI, { useNewUrlParser: true })
.then(console.log(`MongoDB connected at ${MONGO_URI}`));

const userSeed = [
  {
    email: "fakeuser@email.com",
    password: "fake_password",
    date: new Date(Date.now())
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  const eventSeed = [
    {
      category: "sports",
      name: "tennis",
      participants: 4,
      location: "Laurelhurst",
      duration: 2,
      creator: "hkenvi@yahoo.com"
    },
    {
      category: "trivia",
      name: "history",
      participants: 2,
      location: "Pizza Schmizza",
      duration: 2,
      creator: "hkenvi@yahoo.com"
    },
    {
      category: "sports",
      name: "softball",
      participants: 18,
      location: "Laurelhurst",
      duration: 2,
      creator: "hkenvi@yahoo.com"
    },
    {
      category: "sports",
      name: "softball",
      participants: 18,
      location: "Laurelhurst",
      duration: 2,
      creator: "different@yahoo.com"
    }

  ];
  
  db.Event
    .remove({})
    .then(() => db.Event.collection.insertMany(eventSeed))
    .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
