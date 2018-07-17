const db = require("../models");

module.exports = {
    findAll: function (request, response) {
        db.Event
            .find(request.query)
            .sort({ date: -1 })
            .then(dbEvent => response.json(dbEvent))
            .catch(err => res.status(422).json(err));
    },
    findById: function (request, response) {
        db.Event
            .findById(request.params.id)
            .then(dbEvent => response.json(dbEvent))
            .catch(err => res.status(422).json(err));
    },
    create: function (request, response) {
        const event = {
            _id: request.body._id,
            start_date: request.body.start_date,
            end_date: request.body.end_date,
            //will rewrite below
            address: request.body.address,
            active: true
        }
        //need to create an address schema also need to 
        //rewrite the address part of event so that it includes a address schema
        // will rewrite below
        db.Event
            .create(event)
            .then(dbEvent => response.json(dbEvent))
            .catch(err => res.status(422).json(err));
    },
    update: function (request, response) {
        db.Event
            .findOneAndUpdate({ _id: request.params.id }, request.body)
            .then(dbEvent => response.json(dbEvent))
            .catch(err => res.status(422).json(err));
    },
    remove: function (request, response) {
        db.Event
        .findById({_id: request.params.id})
        .then(dbEvent => dbEvent.remove())
        .then(dbEvent => response.json(dbEvent))
        .catch(err => res.status(422).json(err));
    },
}