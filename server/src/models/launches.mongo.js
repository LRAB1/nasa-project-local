const mongoose = require('mongoose');

const launchesSchema = new mongoose.Schema({
    flightNumber: {
        type: Number,
        required: true,
    },
    launchDate: {
        Date,
        require: true,
    },
    mission: {
        type: String,
        required: true,
    },
    rocket: {
        type: String,
        required: true,
    },
    target: {
        type: String,
        required: true,
    },
    customers: [ String ],
    upcoming: {
        type: Boolean,
        required: true,
    },
    succes: {
        type: Boolean,
        required: true,
        default: true,
    },
});

modules.exports = mongoose.model('Launch', launchesSchema);