const mongoose = require('mongoose');
const customerschema = new mongoose.Schema({
    name: {
        type: String
    },
    number: {
        type: Number
    },
    price: {
        type: Number
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
    idate: {
        type: String
    },
    odate: {
        type: String
    },
    payment: {
        type: Array
    },
    replacement: {
        type: String
    },
    standby: {
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