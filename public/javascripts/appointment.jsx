class AppointmentForm extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <form onSubmit={this.submit.bind(this)} method="post">
                            <div className="form-group">
                                <label htmlFor="name-input">Name</label>
                                <input type="text" className="form-control" placeholder="Name" ref="name" name="name" id="name-input"></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="numOfPeople">Number of People</label>
                                <input type="text" className="form-control" placeholder="Number of people" ref="numOfPeople" name="numOfPeople" id="numOfPeople"></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input type="text" className="form-control" placeholder="Phone" ref="phone" name="phone" id="phone"></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="time-input">Date/Time</label>
                                <input type="text" placeholder="Date/Time" className="form-control date" ref="date" id="time-input" name="date"></input>
                            </div>
                            <button className="btn btn-primary" type="submit">Add</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    submit(e) {
        e.preventDefault()
        let name = React.findDOMNode(this.refs.name).value.trim(),
            numOfPeople = React.findDOMNode(this.refs.numOfPeople).value.trim(),
            phone = React.findDOMNode(this.refs.phone).value.trim(),
            date = React.findDOMNode(this.refs.date).value.trim();

        if (!name || !date || !numOfPeople || !phone) {
            toastr.error('Please fill in all the fields', 'Missing fields');
            return;
        }

        this.props.addAppointment({
            name, date, numOfPeople, phone
        });

        React.findDOMNode(this.refs.name).value = '';
        React.findDOMNode(this.refs.date).value = '';
        React.findDOMNode(this.refs.numOfPeople).value = '';
        React.findDOMNode(this.refs.phone).value = '';
        return;
    }
}

class Appointment extends React.Component {
    render() {
        let momentified = moment(this.props.appointment.date).format("MMMM Do YYYY, h:mm a");
        return (
            <tr>
                <td>{this.props.appointment.name}</td>
                <td>{this.props.appointment.phone}</td>
                <td>{this.props.appointment.numOfPeople}</td>
                <td>{momentified}</td>
                <td>
                    <div className="btn-group" role="group">
                        <button className="btn btn-primary" data-id={this.props.appointment._id} onClick={this.props.edit}>Edit</button> 
                        <button className="btn btn-danger" data-id={this.props.appointment._id} onClick={this.props.delete}>Delete</button>
                    </div>
                </td>
            </tr>

        );
    }
}

class AppointmentList extends React.Component {
    render() {
        return (
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Number of People</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    this.props.appointments.map(appointment => {
                        return (
                            <Appointment key={appointment._id} appointment={appointment} delete={this.props.delete} edit={this.props.edit} />
                        );
                    }, this)
                }
                </tbody>
            </table>
        );
    }
}

class DeleteModal extends React.Component {
    render() {
        return (
            <div className="modal fade" id="deleteModal">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 className="modal-title">Delete Event</h4>
                  </div>
                  <div className="modal-body">
                    <p>Are you sure you want to delete the appointment?</p>
                    <input type="hidden" val="" name="id-delete" id="id-delete"></input>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={this.props.delete}>Delete</button>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}

class EditModal extends React.Component {
    render() {
        return (
            <div className="modal fade" id="editModal">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 className="modal-title">Edit Event</h4>
                  </div>
                  <div className="modal-body">
                    <input type="hidden" className="form-control" id="id-edit" value=""></input>
                    <label htmlFor="name-input">Name</label>
                    <input type="text" className="form-control" placeholder="Name" ref="name" name="name" id="name-edit"></input>
                    <label htmlFor="numOfPeople">Number of People</label>
                    <input type="text" className="form-control" placeholder="Number of people" ref="numOfPeople" name="numOfPeople" id="numOfPeople-edit"></input>
                    <label htmlFor="phone">Phone Number</label>
                    <input type="text" className="form-control" placeholder="Phone" ref="phone" name="phone" id="phone-edit"></input>
                    <label htmlFor="time-input">Date/Time</label>
                    <input type="text" placeholder="Date/Time" className="form-control date" ref="date" id="date-edit" name="date"></input>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" onClick={this.props.edit} data-dismiss="modal" className="btn btn-success">Save</button>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}

class AppointmentBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            appointments: []
        };
    }

    showNotification(appointment) {
        toastr.info(moment(appointment.date).format("MMMM Do YYYY, h:mm a"), appointment.name)
    }

    addAllNotifications() {
        _.each(this.state.appointments, appointment => {
            let dateInMilli = Date.parse(appointment.date);
            setTimeout(() => {
                this.showNotification(appointment);
            }, dateInMilli - Date.now(), appointment);
        });
    }

    addOneNotification(appointment) {
        let dateInMilli = Date.parse(appointment.date);
        setTimeout(() => {
            this.showNotification(appointment);
        }, dateInMilli - Date.now(), appointment);
    }

    componentDidMount() {
        this.getAppointments();
    }

    getAppointments() {
        $.ajax({
            url: '/getAppointments',
            type: 'GET',
            datatype: 'json',
            success: items => {
                this.setState({
                    appointments: items
                });
                this.addAllNotifications();
            }.bind(this),
            error: (xhr, status, err) => {
                console.log(status, err.toString());
            }.bind(this)
        });
    }

    deleteItem(e) {
        e.stopPropagation();

        let targetId = $('#id-delete').val();
        $.ajax({
            url: '/deleteAppointment',
            type: 'POST',
            datatype: 'json',
            data: {id: targetId},
            success: item => {
                let oldState = this.state.appointments;
                let newState = _.remove(oldState, i => {
                    return i._id === item.id;
                });
                this.setState(newState);
            }.bind(this),
            error: (xhr, status, err) => {
                console.error(status, err.toString());
            }.bind(this)
        });
    }

    showEditModal(e) {
        e.preventDefault();
        let id = e.target.dataset.id;
        let item = _.find(this.state.appointments, item => {
            return item._id === id;
        });

        $('#id-edit').val(item._id);
        $('#name-edit').val(item.name);
        $('#numOfPeople-edit').val(item.numOfPeople);
        $('#phone-edit').val(item.phone);
        $('#date-edit').datetimepicker({
            defaultDate: new Date(item.date),
            sideBySide: true
        });
        $('#date-edit').val(moment(item.date).format("MM/DD/YYYY h:mm A"));
        $('#editModal').modal('show');
    }

    showDeleteModal(e) {
        e.preventDefault();
        let id = e.target.dataset.id;
        let item = _.find(this.state.appointments, item => {
            return item._id === id;
        });

        $('#id-delete').val(item._id);
        $('#deleteModal').modal('show');
    }

    addAppointment(data) {
        $.ajax({
            url: '/addAppointment',
            dataType: 'json',
            type: 'POST',
            data: data,
            success: item => {
                let state = this.state.appointments;
                state.push(item);
                this.setState({
                    appointments: state
                });
                this.addOneNotification(item);
                $('#calendar').fullCalendar('rerenderEvents');
            }.bind(this),
            error: (xhr, status, err) => {
                console.log(status, err.toString());
            }.bind(this)
        });
    }

    editAppointment() {
        let data = {
            id: $('#id-edit').val(),
            name: $('#name-edit').val(),
            numOfPeople: $('#numOfPeople-edit').val(),
            phone: $('#phone-edit').val(),
            date: $('#date-edit').val()
        };

        $.ajax({
            url: '/editAppointment',
            datatype: 'json',
            type: 'POST',
            data: data,
            success: item => {
                let state = this.state.appointments;
                this.setState({
                    appointments: _.map(this.state.appointments, appt => {
                        if (appt._id === item._id) {
                            return item;
                        } else {
                            return appt;
                        }
                    })
                });
            }.bind(this),
            error: (xhr, status, err) => {
                console.log(status, err.toString());
            }.bind(this)
        });
    }

    render() {
        return (
            <div className="container"> 
                <AppointmentForm addAppointment={this.addAppointment.bind(this)}/>
                &nbsp;
                <div role="tabpanel">
                    <ul className="nav nav-tabs" role="tablist">
                        <li role="presentation" className="active"><a data-toggle="tab" role="tab" href="#tableTab">Table</a></li>
                        <li role="presentation"><a data-toggle="tab" role="tab" href="#calendarTab">Calendar</a></li>
                    </ul>
                    <div className="tab-content">
                        <div role="tabpanel" id="tableTab" className="tab-pane fade in active">
                            <AppointmentList  appointments={this.state.appointments} edit={this.showEditModal.bind(this)} delete={this.showDeleteModal.bind(this)}/>
                        </div>
                        <div role="tabpanel" id="calendarTab" className="tab-pane fade">
                            &nbsp;
                            <div id="calendar"></div>
                        </div>
                    </div>
                </div>
                <EditModal edit={this.editAppointment.bind(this)} />
                <DeleteModal delete={this.deleteItem.bind(this)}/>
            </div>
        );
    }
}

React.render(<AppointmentBox />, content);
$('#time-input').datetimepicker({
    sideBySide: true
});

toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "0",
    "extendedTimeOut": "0",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}

$('#calendar').fullCalendar({
    header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
    },
    timezone: 'local',
    eventRender: function() {
        console.log('calendar rendered');
    },
    editable: true,
    events: (start, end, timezone, callback) => {
        $.ajax({
            url: '/getAppointments',
            dataType: 'json',
            type: 'GET',
            success: items => {
                let events = [];
                _.each(items, item => {
                    events.push({
                        title: item.name,
                        start: item.date
                    });
                });
                callback(events);
            }
        })
    }
});

$('a[data-toggle="tab"]').on('shown.bs.tab', e => {
    $('#calendar').fullCalendar('render');
});
