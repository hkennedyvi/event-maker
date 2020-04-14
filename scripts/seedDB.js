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
      name: "Tennis",
      participants: 4,
      location: "Laurelhurst",
      duration: "2 hours",
      notes: "bring your own racket",
      creator: "hkenvi@yahoo.com",
      attendees: ["sarah@email.com", "howard@email.com", "jenni@email.com", "laurie@email.com"],
      created_at: "2020-04-01 12:33:21"
    },
    {
      category: "trivia",
      name: "Trivia Night",
      participants: 2,
      location: "Pizza Schmizza",
      duration: "2 hours",
      notes: "theme tonight is harry potter!",
      creator: "hkenvi@yahoo.com",
      attendees: ["sarah@email.com", "howard@email.com", "jenni@email.com", "laurie@email.com"],
      created_at: "2020-04-06 2:45:21"
    },
    {
      category: "sports",
      name: "Softball",
      participants: 18,
      location: "Laurelhurst",
      duration: "2 1/2 hours",
      notes: "we have balls and bats",
      creator: "hkenvi@yahoo.com",
      attendees: ["jenni@email.com", "laurie@email.com"],
      created_at: "2020-04-12 2:00:21"
    },
    {
      category: "entertainment",
      name: "Jam Sesh",
      participants: 5,
      location: "Raleigh Hills",
      duration: "5 hours",
      notes: "bring the funk",
      creator: "different@yahoo.com",
      attendees: ["sarah@email.com", "hkenvi@yahoo.com"],
      created_at: "2020-04-14 5:19:21"
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
