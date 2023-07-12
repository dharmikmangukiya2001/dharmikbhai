const mongoose = require('mongoose');
const customerschema = new mongoose.Schema({
    name: {
        type: String
    },
    number: {
        type: Number
    },
    email: {
        type: String
    },
    address: {
        type: Array
    },
    customerid: {
        type: String
    },
    servics: {
        type: String
    },
    otherservics: {
        type: String
    },
    date: {
        type: String
    },
    pcnumber: {
        type: String
    },
    reference: {
        type: String
    },
    work: {
        type: String
    }
});

module.exports = mongoose.model('customer', customerschema);