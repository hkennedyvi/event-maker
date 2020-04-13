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
      location: "Pioneer Park",
      duration: 2,
      notes: "bring your own racket",
      creator: "cahootsguy@email.com",
      attendees: ["sarah@email.com", "howard@email.com", "jenni@email.com", "laurie@email.com"]
    },
    {
      category: "entertainment",
      name: "trivia",
      participants: 2,
      location: "Pizza Schmizza",
      duration: 2,
      notes: "theme tonight is harry potter!",
      creator: "cahootsguy@email.com",
      attendees: ["sarah@email.com", "howard@email.com", "jenni@email.com", "laurie@email.com"]
    },
    {
      category: "sports",
      name: "softball",
      participants: 18,
      location: "Hyland Forest Park",
      duration: 2,
      notes: "we have balls and bats",
      creator: "cahootsguy@email.com",
      attendees: ["jenni@email.com", "laurie@email.com"]
    },
    {
      category: "sports",
      name: "volleyball",
      participants: 8,
      location: "Garden Home Rec",
      duration: 2,
      notes: "playing indoors",
      creator: "different@yahoo.com",
      attendees: ["sarah@email.com", "cahootsguy@email.com"]
    },
    {
      category: "music",
      name: "jam session",
      participants: 4,
      location: "4561 Allen Blvd",
      duration: 2,
      notes: "loud amps only",
      creator: "different@yahoo.com",
      attendees: ["jenni@email.com", "cahootsguy@email.com"]
    },
    {
      category: "entertainment",
      name: "block party",
      participants: 4,
      location: "3220 Scholls Ferry Rd",
      duration: 2,
      notes: "loud amps only",
      creator: "different@yahoo.com",
      attendees: ["jenni@email.com", "cahootsguy@email.com"]
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
