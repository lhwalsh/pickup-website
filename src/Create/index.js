import React, { Component } from 'react';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import './index.css'

const BASE_URL = "https://pickup-app-backend.herokuapp.com/api/";

const formatTime = (time) => {
  if (time == null) return ""

  return time.toISOString();
}

const formatDate = (date) => {
  if (date == null) return ""

  return (date.toString())
}

class Create extends Component {
  constructor(props) {
    super(props)

    this.state = {
      start_time: null,
      end_time: null,
      date: null
    }

    this.title = React.createRef();
    this.description = React.createRef();
    this.people = React.createRef();
    this.location = React.createRef();
    this.date = React.createRef();
    this.category = React.createRef();

    this.createEvent = this.createEvent.bind(this)
    this.changeStartTime = this.changeStartTime.bind(this)
    this.changeEndTime = this.changeEndTime.bind(this)
    this.changeDate = this.changeDate.bind( this )
  }

  createEvent(event) {
    event.preventDefault();

    const { addEvent, toggle } = this.props
    const {
      start_time,
      end_time,
      date
    } = this.state;

    const post_params = {
      title: this.title.current.value,
      description: this.description.current.value,
      people: this.people.current.value,
      location: this.location.current.value,
      date: formatDate(date),
      start_time: formatTime(start_time),
      end_time: formatTime(end_time),
      category: this.category.current.value
    }

    axios.post(`${BASE_URL}events/`, post_params)
      .then((response) => {
        toggle();
        addEvent(response.data);
      })
      .catch(error => console.log(`Failed to create event. Error: ${error}`))
  }

  changeStartTime(value) {
    this.setState({ start_time: value })
  }

  changeEndTime(value) {
    this.setState({ end_time: value })
  }

  changeDate( value ) {
    this.setState( {date: value } )
  }

  render() {
    return(
      <div className="modal">
        <div className="form-box">
          <h1>Add Event</h1>
          <form className="add-form" onSubmit={this.createEvent}>
            <label className="form-add-item">
              Title:
              <input type="text" ref={this.title} />
            </label>
            <label className="form-add-item">
              Description:
              <input type="textarea" ref={this.description} />
            </label>
            <label className="form-add-item">
              People:
              <input type="text" ref={this.people} />
            </label>
            <label className="form-add-item">
              Location:
              <input type="text" ref={this.location} />
            </label>
            <label className="form-add-item">
              Date:
              <DatePicker
                name="date"
                selected={ this.state.date }
                onChange={ this.changeDate }
                className="date-picker"
              />
            </label>
            <label className="form-add-item">
              Start Time:
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardTimePicker
                  style={{ width: 150 }}
                  margin="normal"
                  label=""
                  value={this.state.start_time}
                  onChange={this.changeStartTime}
                  KeyboardButtonProps={{
                    "aria-label": "change time"
                  }}
                />
              </MuiPickersUtilsProvider>
            </label>
            <label className="form-add-item">
              End Time:
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardTimePicker
                  style={{ width: 150 }}
                  margin="normal"
                  label=""
                  value={this.state.end_time}
                  onChange={this.changeEndTime}
                  KeyboardButtonProps={{
                    "aria-label": "change time"
                  }}
                />
              </MuiPickersUtilsProvider>
            </label>
            <label className="form-add-item">
              Category:
              <input type="text" ref={this.category} />
            </label>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Create;
