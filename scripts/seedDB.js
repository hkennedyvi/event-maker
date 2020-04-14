const mongoose = require("mongoose");
const db = require("../models");
const MONGO_URI = process.env.MONGODB_URI || "mongodb://user1:password1@ds159328.mlab.com:59328/heroku_8c1n3d87";

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
      location: "Tualitin Hills",
      duration: "2 hours",
      notes: "bring your own racket",
      creator: "cahootsguy@email.com",
      attendees: ["sarah@email.com", "howard@email.com", "jenni@email.com", "laurie@email.com"],
      created_at: "2020-04-14 6:33:21"
    },
    {
      category: "trivia",
      name: "Trivia Night",
      participants: 2,
      location: "Pizza Schmizza",
      duration: "2 hours",
      notes: "theme tonight is harry potter!",
      creator: "cahootsguy@email.com",
      attendees: ["sarah@email.com", "howard@email.com", "jenni@email.com", "laurie@email.com"],
      created_at: "2020-04-14 2:45:21"
    },
    {
      category: "sports",
      name: "Softball",
      participants: 18,
      location: "Pioneer Park",
      duration: "2.5 hours",
      notes: "we have balls and bats",
      creator: "cahootsguy@email.com",
      attendees: ["jenni@email.com", "laurie@email.com"],
      created_at: "2020-04-14 5:00:21"
    },
    {
      category: "entertainment",
      name: "Jam Sesh",
      participants: 5,
      location: "Raleigh Hills",
      duration: "5 hours",
      notes: "bring the funk",
      creator: "different@yahoo.com",
      attendees: ["sarah@email.com", "cahootsguy@email.com"],
      created_at: "2020-04-14 6:19:21"
    },
    {
      category: "entertainment",
      name: "Block Party",
      participants: 15,
      location: "4789 SW Allen Blvd",
      duration: "5 hours",
      notes: "byob",
      creator: "different@yahoo.com",
      attendees: ["sarah@email.com", "cahootsguy@email.com"],
      created_at: "2020-04-14 6:19:21"
    },
    {
      category: "outdoors",
      name: "Shakespeare in the park",
      participants: 15,
      location: "Barsotti Park",
      duration: "3 hours",
      notes: "come in costume",
      creator: "different@yahoo.com",
      attendees: ["sarah@email.com", "cahootsguy@email.com"],
      created_at: "2020-04-14 4:19:21"
    },
    {
      category: "music",
      name: "Neighborhood Concert",
      participants: 15,
      location: "6711 Hall Blvd",
      duration: "2 hours",
      notes: "byob",
      creator: "cahootsguy@email.com",
      attendees: ["sarah@email.com", "jenni@email.com"],
      created_at: "2020-04-14 3:19:21"
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
