const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const euroPalletSchema = new Schema({
    ID_Worker: {
        type: String,
        Required: 'Please enter'
    },
    KeyPallet: {
        type: Number,
        Required: 'Please enter'
    },
    Quantity: {
        type: Number,
        Required: 'Please enter'
    },
    Nestet: {
        type: String,
        Required: 'Please enter'
    },
    Depertment: {
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