/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*****************!*\
  !*** multi app ***!
  \*****************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./public/javascripts/appointment.jsx */1);


/***/ },
/* 1 */
/*!********************************************!*\
  !*** ./public/javascripts/appointment.jsx ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var AppointmentForm = (function (_React$Component) {
	    function AppointmentForm() {
	        _classCallCheck(this, AppointmentForm);
	
	        if (_React$Component != null) {
	            _React$Component.apply(this, arguments);
	        }
	    }
	
	    _inherits(AppointmentForm, _React$Component);
	
	    _createClass(AppointmentForm, [{
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "div",
	                { className: "container" },
	                React.createElement(
	                    "div",
	                    { className: "row" },
	                    React.createElement(
	                        "div",
	                        { className: "col-md-6" },
	                        React.createElement(
	                            "form",
	                            { onSubmit: this.submit.bind(this), method: "post" },
	                            React.createElement(
	                                "div",
	                                { className: "form-group" },
	                                React.createElement(
	                                    "label",
	                                    { htmlFor: "name-input" },
	                                    "Name"
	                                ),
	                                React.createElement("input", { type: "text", className: "form-control", placeholder: "Name", ref: "name", name: "name", id: "name-input" })
	                            ),
	                            React.createElement(
	                                "div",
	                                { className: "form-group" },
	                                React.createElement(
	                                    "label",
	                                    { htmlFor: "numOfPeople" },
	                                    "Number of People"
	                                ),
	                                React.createElement("input", { type: "text", className: "form-control", placeholder: "Number of people", ref: "numOfPeople", name: "numOfPeople", id: "numOfPeople" })
	                            ),
	                            React.createElement(
	                                "div",
	                                { className: "form-group" },
	                                React.createElement(
	                                    "label",
	                                    { htmlFor: "phone" },
	                                    "Phone Number"
	                                ),
	                                React.createElement("input", { type: "text", className: "form-control", placeholder: "Phone", ref: "phone", name: "phone", id: "phone" })
	                            ),
	                            React.createElement(
	                                "div",
	                                { className: "form-group" },
	                                React.createElement(
	                                    "label",
	                                    { htmlFor: "time-input" },
	                                    "Date/Time"
	                                ),
	                                React.createElement("input", { type: "text", placeholder: "Date/Time", className: "form-control date", ref: "date", id: "time-input", name: "date" })
	                            ),
	                            React.createElement(
	                                "button",
	                                { className: "btn btn-primary", type: "submit" },
	                                "Add"
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }, {
	        key: "submit",
	        value: function submit(e) {
	            e.preventDefault();
	            var name = React.findDOMNode(this.refs.name).value.trim(),
	                numOfPeople = React.findDOMNode(this.refs.numOfPeople).value.trim(),
	                phone = React.findDOMNode(this.refs.phone).value.trim(),
	                date = React.findDOMNode(this.refs.date).value.trim();
	
	            if (!name || !date || !numOfPeople || !phone) {
	                toastr.error("Please fill in all the fields", "Missing fields");
	                return;
	            }
	
	            this.props.addAppointment({
	                name: name, date: date, numOfPeople: numOfPeople, phone: phone
	            });
	
	            React.findDOMNode(this.refs.name).value = "";
	            React.findDOMNode(this.refs.date).value = "";
	            React.findDOMNode(this.refs.numOfPeople).value = "";
	            React.findDOMNode(this.refs.phone).value = "";
	            return;
	        }
	    }]);
	
	    return AppointmentForm;
	})(React.Component);
	
	var Appointment = (function (_React$Component2) {
	    function Appointment() {
	        _classCallCheck(this, Appointment);
	
	        if (_React$Component2 != null) {
	            _React$Component2.apply(this, arguments);
	        }
	    }
	
	    _inherits(Appointment, _React$Component2);
	
	    _createClass(Appointment, [{
	        key: "render",
	        value: function render() {
	            var momentified = moment(this.props.appointment.date).format("MMMM Do YYYY, h:mm a");
	            return React.createElement(
	                "tr",
	                null,
	                React.createElement(
	                    "td",
	                    null,
	                    this.props.appointment.name
	                ),
	                React.createElement(
	                    "td",
	                    null,
	                    this.props.appointment.phone
	                ),
	                React.createElement(
	                    "td",
	                    null,
	                    this.props.appointment.numOfPeople
	                ),
	                React.createElement(
	                    "td",
	                    null,
	                    momentified
	                ),
	                React.createElement(
	                    "td",
	                    null,
	                    React.createElement(
	                        "div",
	                        { className: "btn-group", role: "group" },
	                        React.createElement(
	                            "button",
	                            { className: "btn btn-primary", "data-id": this.props.appointment._id, onClick: this.props.edit },
	                            "Edit"
	                        ),
	                        React.createElement(
	                            "button",
	                            { className: "btn btn-danger", "data-id": this.props.appointment._id, onClick: this.props["delete"] },
	                            "Delete"
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	
	    return Appointment;
	})(React.Component);
	
	var AppointmentList = (function (_React$Component3) {
	    function AppointmentList() {
	        _classCallCheck(this, AppointmentList);
	
	        if (_React$Component3 != null) {
	            _React$Component3.apply(this, arguments);
	        }
	    }
	
	    _inherits(AppointmentList, _React$Component3);
	
	    _createClass(AppointmentList, [{
	        key: "render",
	        value: function render() {
	            var _this = this;
	
	            return React.createElement(
	                "table",
	                { className: "table table-striped table-hover" },
	                React.createElement(
	                    "thead",
	                    null,
	                    React.createElement(
	                        "tr",
	                        null,
	                        React.createElement(
	                            "th",
	                            null,
	                            "Name"
	                        ),
	                        React.createElement(
	                            "th",
	                            null,
	                            "Phone Number"
	                        ),
	                        React.createElement(
	                            "th",
	                            null,
	                            "Number of People"
	                        ),
	                        React.createElement(
	                            "th",
	                            null,
	                            "Date"
	                        ),
	                        React.createElement(
	                            "th",
	                            null,
	                            "Action"
	                        )
	                    )
	                ),
	                React.createElement(
	                    "tbody",
	                    null,
	                    this.props.appointments.map(function (appointment) {
	                        return React.createElement(Appointment, { key: appointment._id, appointment: appointment, "delete": _this.props["delete"], edit: _this.props.edit });
	                    }, this)
	                )
	            );
	        }
	    }]);
	
	    return AppointmentList;
	})(React.Component);
	
	var DeleteModal = (function (_React$Component4) {
	    function DeleteModal() {
	        _classCallCheck(this, DeleteModal);
	
	        if (_React$Component4 != null) {
	            _React$Component4.apply(this, arguments);
	        }
	    }
	
	    _inherits(DeleteModal, _React$Component4);
	
	    _createClass(DeleteModal, [{
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "div",
	                { className: "modal fade", id: "deleteModal" },
	                React.createElement(
	                    "div",
	                    { className: "modal-dialog" },
	                    React.createElement(
	                        "div",
	                        { className: "modal-content" },
	                        React.createElement(
	                            "div",
	                            { className: "modal-header" },
	                            React.createElement(
	                                "button",
	                                { type: "button", className: "close", "data-dismiss": "modal", "aria-label": "Close" },
	                                React.createElement(
	                                    "span",
	                                    { "aria-hidden": "true" },
	                                    "×"
	                                )
	                            ),
	                            React.createElement(
	                                "h4",
	                                { className: "modal-title" },
	                                "Delete Event"
	                            )
	                        ),
	                        React.createElement(
	                            "div",
	                            { className: "modal-body" },
	                            React.createElement(
	                                "p",
	                                null,
	                                "Are you sure you want to delete the appointment?"
	                            ),
	                            React.createElement("input", { type: "hidden", val: "", name: "id-delete", id: "id-delete" })
	                        ),
	                        React.createElement(
	                            "div",
	                            { className: "modal-footer" },
	                            React.createElement(
	                                "button",
	                                { type: "button", className: "btn btn-default", "data-dismiss": "modal" },
	                                "Close"
	                            ),
	                            React.createElement(
	                                "button",
	                                { type: "button", className: "btn btn-danger", "data-dismiss": "modal", onClick: this.props["delete"] },
	                                "Delete"
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	
	    return DeleteModal;
	})(React.Component);
	
	var EditModal = (function (_React$Component5) {
	    function EditModal() {
	        _classCallCheck(this, EditModal);
	
	        if (_React$Component5 != null) {
	            _React$Component5.apply(this, arguments);
	        }
	    }
	
	    _inherits(EditModal, _React$Component5);
	
	    _createClass(EditModal, [{
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "div",
	                { className: "modal fade", id: "editModal" },
	                React.createElement(
	                    "div",
	                    { className: "modal-dialog" },
	                    React.createElement(
	                        "div",
	                        { className: "modal-content" },
	                        React.createElement(
	                            "div",
	                            { className: "modal-header" },
	                            React.createElement(
	                                "button",
	                                { type: "button", className: "close", "data-dismiss": "modal", "aria-label": "Close" },
	                                React.createElement(
	                                    "span",
	                                    { "aria-hidden": "true" },
	                                    "×"
	                                )
	                            ),
	                            React.createElement(
	                                "h4",
	                                { className: "modal-title" },
	                                "Edit Event"
	                            )
	                        ),
	                        React.createElement(
	                            "div",
	                            { className: "modal-body" },
	                            React.createElement("input", { type: "hidden", className: "form-control", id: "id-edit", value: "" }),
	                            React.createElement(
	                                "label",
	                                { htmlFor: "name-input" },
	                                "Name"
	                            ),
	                            React.createElement("input", { type: "text", className: "form-control", placeholder: "Name", ref: "name", name: "name", id: "name-edit" }),
	                            React.createElement(
	                                "label",
	                                { htmlFor: "numOfPeople" },
	                                "Number of People"
	                            ),
	                            React.createElement("input", { type: "text", className: "form-control", placeholder: "Number of people", ref: "numOfPeople", name: "numOfPeople", id: "numOfPeople-edit" }),
	                            React.createElement(
	                                "label",
	                                { htmlFor: "phone" },
	                                "Phone Number"
	                            ),
	                            React.createElement("input", { type: "text", className: "form-control", placeholder: "Phone", ref: "phone", name: "phone", id: "phone-edit" }),
	                            React.createElement(
	                                "label",
	                                { htmlFor: "time-input" },
	                                "Date/Time"
	                            ),
	                            React.createElement("input", { type: "text", placeholder: "Date/Time", className: "form-control date", ref: "date", id: "date-edit", name: "date" })
	                        ),
	                        React.createElement(
	                            "div",
	                            { className: "modal-footer" },
	                            React.createElement(
	                                "button",
	                                { type: "button", className: "btn btn-default", "data-dismiss": "modal" },
	                                "Close"
	                            ),
	                            React.createElement(
	                                "button",
	                                { type: "button", onClick: this.props.edit, "data-dismiss": "modal", className: "btn btn-success" },
	                                "Save"
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	
	    return EditModal;
	})(React.Component);
	
	var AppointmentBox = (function (_React$Component6) {
	    function AppointmentBox(props) {
	        _classCallCheck(this, AppointmentBox);
	
	        _get(Object.getPrototypeOf(AppointmentBox.prototype), "constructor", this).call(this, props);
	        this.state = {
	            appointments: []
	        };
	    }
	
	    _inherits(AppointmentBox, _React$Component6);
	
	    _createClass(AppointmentBox, [{
	        key: "showNotification",
	        value: function showNotification(appointment) {
	            toastr.info(moment(appointment.date).format("MMMM Do YYYY, h:mm a"), appointment.name);
	        }
	    }, {
	        key: "addAllNotifications",
	        value: function addAllNotifications() {
	            var _this2 = this;
	
	            _.each(this.state.appointments, function (appointment) {
	                var dateInMilli = Date.parse(appointment.date);
	                setTimeout(function () {
	                    _this2.showNotification(appointment);
	                }, dateInMilli - Date.now(), appointment);
	            });
	        }
	    }, {
	        key: "addOneNotification",
	        value: function addOneNotification(appointment) {
	            var _this3 = this;
	
	            var dateInMilli = Date.parse(appointment.date);
	            setTimeout(function () {
	                _this3.showNotification(appointment);
	            }, dateInMilli - Date.now(), appointment);
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            this.getAppointments();
	        }
	    }, {
	        key: "getAppointments",
	        value: function getAppointments() {
	            var _this4 = this;
	
	            $.ajax({
	                url: "/getAppointments",
	                type: "GET",
	                datatype: "json",
	                success: (function (items) {
	                    _this4.setState({
	                        appointments: items
	                    });
	                    _this4.addAllNotifications();
	                }).bind(this),
	                error: (function (xhr, status, err) {
	                    console.log(status, err.toString());
	                }).bind(this)
	            });
	        }
	    }, {
	        key: "deleteItem",
	        value: function deleteItem(e) {
	            var _this5 = this;
	
	            e.stopPropagation();
	
	            var targetId = $("#id-delete").val();
	            $.ajax({
	                url: "/deleteAppointment",
	                type: "POST",
	                datatype: "json",
	                data: { id: targetId },
	                success: (function (item) {
	                    var oldState = _this5.state.appointments;
	                    var newState = _.remove(oldState, function (i) {
	                        return i._id === item.id;
	                    });
	                    _this5.setState(newState);
	                }).bind(this),
	                error: (function (xhr, status, err) {
	                    console.error(status, err.toString());
	                }).bind(this)
	            });
	        }
	    }, {
	        key: "showEditModal",
	        value: function showEditModal(e) {
	            e.preventDefault();
	            var id = e.target.dataset.id;
	            var item = _.find(this.state.appointments, function (item) {
	                return item._id === id;
	            });
	
	            $("#id-edit").val(item._id);
	            $("#name-edit").val(item.name);
	            $("#numOfPeople-edit").val(item.numOfPeople);
	            $("#phone-edit").val(item.phone);
	            $("#date-edit").datetimepicker({
	                defaultDate: new Date(item.date),
	                sideBySide: true
	            });
	            $("#date-edit").val(moment(item.date).format("MM/DD/YYYY h:mm A"));
	            $("#editModal").modal("show");
	        }
	    }, {
	        key: "showDeleteModal",
	        value: function showDeleteModal(e) {
	            e.preventDefault();
	            var id = e.target.dataset.id;
	            var item = _.find(this.state.appointments, function (item) {
	                return item._id === id;
	            });
	
	            $("#id-delete").val(item._id);
	            $("#deleteModal").modal("show");
	        }
	    }, {
	        key: "addAppointment",
	        value: function addAppointment(data) {
	            var _this6 = this;
	
	            $.ajax({
	                url: "/addAppointment",
	                dataType: "json",
	                type: "POST",
	                data: data,
	                success: (function (item) {
	                    var state = _this6.state.appointments;
	                    state.push(item);
	                    _this6.setState({
	                        appointments: state
	                    });
	                    _this6.addOneNotification(item);
	                    $("#calendar").fullCalendar("rerenderEvents");
	                }).bind(this),
	                error: (function (xhr, status, err) {
	                    console.log(status, err.toString());
	                }).bind(this)
	            });
	        }
	    }, {
	        key: "editAppointment",
	        value: function editAppointment() {
	            var _this7 = this;
	
	            var data = {
	                id: $("#id-edit").val(),
	                name: $("#name-edit").val(),
	                numOfPeople: $("#numOfPeople-edit").val(),
	                phone: $("#phone-edit").val(),
	                date: $("#date-edit").val()
	            };
	
	            $.ajax({
	                url: "/editAppointment",
	                datatype: "json",
	                type: "POST",
	                data: data,
	                success: (function (item) {
	                    var state = _this7.state.appointments;
	                    _this7.setState({
	                        appointments: _.map(_this7.state.appointments, function (appt) {
	                            if (appt._id === item._id) {
	                                return item;
	                            } else {
	                                return appt;
	                            }
	                        })
	                    });
	                }).bind(this),
	                error: (function (xhr, status, err) {
	                    console.log(status, err.toString());
	                }).bind(this)
	            });
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "div",
	                { className: "container" },
	                React.createElement(AppointmentForm, { addAppointment: this.addAppointment.bind(this) }),
	                " ",
	                React.createElement(
	                    "div",
	                    { role: "tabpanel" },
	                    React.createElement(
	                        "ul",
	                        { className: "nav nav-tabs", role: "tablist" },
	                        React.createElement(
	                            "li",
	                            { role: "presentation", className: "active" },
	                            React.createElement(
	                                "a",
	                                { "data-toggle": "tab", role: "tab", href: "#tableTab" },
	                                "Table"
	                            )
	                        ),
	                        React.createElement(
	                            "li",
	                            { role: "presentation" },
	                            React.createElement(
	                                "a",
	                                { "data-toggle": "tab", role: "tab", href: "#calendarTab" },
	                                "Calendar"
	                            )
	                        )
	                    ),
	                    React.createElement(
	                        "div",
	                        { className: "tab-content" },
	                        React.createElement(
	                            "div",
	                            { role: "tabpanel", id: "tableTab", className: "tab-pane fade in active" },
	                            React.createElement(AppointmentList, { appointments: this.state.appointments, edit: this.showEditModal.bind(this), "delete": this.showDeleteModal.bind(this) })
	                        ),
	                        React.createElement(
	                            "div",
	                            { role: "tabpanel", id: "calendarTab", className: "tab-pane fade" },
	                            " ",
	                            React.createElement("div", { id: "calendar" })
	                        )
	                    )
	                ),
	                React.createElement(EditModal, { edit: this.editAppointment.bind(this) }),
	                React.createElement(DeleteModal, { "delete": this.deleteItem.bind(this) })
	            );
	        }
	    }]);
	
	    return AppointmentBox;
	})(React.Component);
	
	React.render(React.createElement(AppointmentBox, null), content);
	$("#time-input").datetimepicker({
	    sideBySide: true
	});
	
	toastr.options = {
	    closeButton: true,
	    debug: false,
	    newestOnTop: false,
	    progressBar: false,
	    positionClass: "toast-top-right",
	    preventDuplicates: false,
	    onclick: null,
	    showDuration: "300",
	    hideDuration: "1000",
	    timeOut: "0",
	    extendedTimeOut: "0",
	    showEasing: "swing",
	    hideEasing: "linear",
	    showMethod: "fadeIn",
	    hideMethod: "fadeOut"
	};
	
	$("#calendar").fullCalendar({
	    header: {
	        left: "prev,next today",
	        center: "title",
	        right: "month,agendaWeek,agendaDay"
	    },
	    timezone: "local",
	    eventRender: function eventRender() {
	        console.log("calendar rendered");
	    },
	    editable: true,
	    events: function events(start, end, timezone, callback) {
	        $.ajax({
	            url: "/getAppointments",
	            dataType: "json",
	            type: "GET",
	            success: function success(items) {
	                var events = [];
	                _.each(items, function (item) {
	                    events.push({
	                        title: item.name,
	                        start: item.date
	                    });
	                });
	                callback(events);
	            }
	        });
	    }
	});
	
	$("a[data-toggle=\"tab\"]").on("shown.bs.tab", function (e) {
	    $("#calendar").fullCalendar("render");
	});

/***/ }
/******/ ]);
//# sourceMappingURL=appointment.js.map