var express = require('express');
var router = express.Router();
var Appointment = require('../model/appointment');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Appointment'
    });
});

router.get('/getAppointments', function(req, res) {
    var appointments = [];
    Appointment.find(function(err, items) {
        if (items.length !== 0) {
            var appointments = items.map(function(item) {
                return item.toJSON();
            });
            res.setHeader('Content-Type', 'application/json');
            res.send(appointments);
        }
    });
});

router.post('/editAppointment', function(req, res) {
    var appointment = req.body;
    Appointment.findById(appointment.id, function(err, appt) {
        appt.name = appointment.name;
        appt.numOfPeople = appointment.numOfPeople;
        appt.date = appointment.date;
        appt.phone = appointment.phone;

        appt.save(function(err) {
            if (err) {
                console.log(err);
                return;
            }
            res.setHeader('Content-Type', 'application/json');
            res.send(appt);
        });
    });
});

router.post('/addAppointment', function(req, res) {
    var newAppointment = new Appointment({
        name: req.body.name,
        date: req.body.date,
        phone: req.body.phone,
        numOfPeople: req.body.numOfPeople
    });
    newAppointment.save(function(err) {
        var appointment;
        if (err) {
            console.log(err);
        } else {
            appointment = {
                _id: newAppointment._id,
                name: newAppointment.name,
                date: newAppointment.date,
                phone: newAppointment.phone,
                numOfPeople: newAppointment.numOfPeople
            };
        }
        res.setHeader('Content-Type', 'application/json');
        res.send(appointment);
    });
});

router.post('/deleteAppointment', function(req, res) {
    var id = req.body.id;
    Appointment.remove({ _id: id }, function(err, item) {
        if (err) {
            console.log(err);
            return;
        }
        res.setHeader('Content-Type', 'application/json');
        res.send({id: id});
    });
});

module.exports = router;
