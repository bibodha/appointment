var mongoose = require("mongoose");

var AppointmentSchema = mongoose.Schema({
    name: String,
    numOfPeople: Number,
    phone: String,
    date: Date,
});

module.exports = mongoose.model('Appointment', AppointmentSchema);
