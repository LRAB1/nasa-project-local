const mongoose = require('mongoose');

const launchesSchema = new mongoose.Schema({
    flightNumber: {
        type: Number,
        required: true,
    },
    launchDate: {
        Date,
        //required: true, //seems to be depricated
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

module.exports = mongoose.model('Launch', launchesSchema);