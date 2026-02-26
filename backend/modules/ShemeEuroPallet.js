const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const euroPalletSchema = new Schema({
    ID_number: {
        type: String,
        Required: 'Please enter'
    },
    KeyPallet: {
        type: String,
        Required: 'Please enter'
    },
    Quantity: {
        type: String,
        Required: 'Please enter'
    },
    Nestet: {
        type: String,
        Required: 'Please enter'
    },
    Department: {
        type: String,
        Required: 'Please enter'
    },
    Location: {
        type: String,
        Required: 'Please enter'
    },
}, {timestamps: true});

const EuroPallets = mongoose.model('EuroPallet', euroPalletSchema);
module.exports = EuroPallets;