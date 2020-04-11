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
    findOneAndUpdate: function(req, res) {
        db
        .findById({ _id: req.params._id })
        .update( {$dec: { participants: 1 }})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    }
    // findOneEmail: function(req, res) {
    //     db
    //     .findById({ email: req.params.user })
    //     .then(dbModel => res.json(dbModel))
    //     .catch(err => res.status(422).json(err));
    // }
};