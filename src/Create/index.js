import React, { Component } from 'react';
import TimePicker from 'rc-time-picker';
import DatePicker from 'react-datepicker';
import { Redirect } from "react-router-dom";
import moment from 'moment'
import 'rc-time-picker/assets/index.css';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import './index.css'

const BASE_URL = "https://pickup-app-backend.herokuapp.com/api/";

const format = 'hh:mm a';
const now = moment().hour(0).minute(0);

const formatTime = (moment) => {
  if (moment == null) return ""
  return (moment.utcOffset("-07:00").format("HH:mm:00"))
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
      date: null,
      redirect: false
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

    this.props.toggle();
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
              <TimePicker
                name="start_time"
                value={this.state.start_time}
                onChange={this.changeStartTime}
                className="time-picker"
                showSecond={false}
                defaultValue={now}
                format={format}
                use12Hours
                inputReadOnly
              />
            </label>
            <label className="form-add-item">
              End Time:
              <TimePicker
                name="end_time"
                value={this.state.end_time}
                onChange={this.changeEndTime}
                className="time-picker"
                showSecond={false}
                defaultValue={now}
                format={format}
                use12Hours
                inputReadOnly
              />
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
