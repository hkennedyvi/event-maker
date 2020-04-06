// var express = require("express");
// var app = express();

// export default {
//     create: function() {
//         app.post("/post-event", (req, res) => {
//             var eventData = new Event(req.body);
//             eventData.save()
//                 .then(item => {
//                     res.send("event saved to database");
//                 })
//                 .catch(err => {
//                     res.status(400).send("Unable to save to database");
//                 });
//         });
//     }
// }