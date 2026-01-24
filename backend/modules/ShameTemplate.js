const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeesSchema = new Schema({
    first_name: {
        type: String,
        Required: true
    },
    last_name: {
        type: String,
        Required: true
    },
    ID_number: {
        type: String,
        Required: true
    },
    Department: {
        type: String,
        Required: true
    },
    // DisabledOption: {
    //     type: Boolean,
    //     Required: true
    // }
}, {timestamps: true});

const Employees = mongoose.model('Employee', employeesSchema);
module.exports = Employees; 