import React, { Component } from 'react';
import TimePicker from 'rc-time-picker';
import moment from 'moment'
import 'rc-time-picker/assets/index.css';
import axios from 'axios';
import './form.css'

const BASE_URL = "https://pickup-app-backend.herokuapp.com/api/";

const format = 'hh:mm a';
const now = moment().hour(0).minute(0);

const formatTime = (moment) => {
  if (moment == null) return ""
  return (moment.utcOffset("-07:00").format("HH:mm:00"))
}

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      start_time: null,
      end_time: null
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
  }

  createEvent() {
    const {
      start_time,
      end_time
    } = this.state;

    const post_params = {
      title: this.title.current.value,
      description: this.description.current.value,
      people: this.people.current.value,
      location: this.location.current.value,
      date: this.date.current.value,
      start_time: formatTime(start_time),
      end_time: formatTime(end_time),
      category: this.category.current.value
    }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  changeStartTime(value) {
    this.setState({ start_time: value })
  }

  changeEndTime(value) {
    this.setState({ end_time: value })
  }

  render() {
    return(
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
            <input type="text" ref={this.date} />
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
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Form;
