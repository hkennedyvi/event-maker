const db = require("../models/event");

module.exports = {
    findAll: function(req, res) {
        db
        .find(req.query)
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findByID: function(req, res) {
        db
        .findById({ creator: req.params.user })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findByIdAndUpdate: function(req, res) {
        console.log(req.body);
        db
        .findById({ _id: req.body._id })
        .update( {$inc: { participants: -1 }})
        .update( {$push: {attendees: req.body.user}} )
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    }
};