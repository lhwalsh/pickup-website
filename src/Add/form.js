import React, { Component } from 'react';
import axios from 'axios';
import './form.css'

const BASE_URL = "https://pickup-app-backend.herokuapp.com/api/";

class Form extends Component {
  constructor(props) {
    super(props)

    this.createEvent = this.createEvent.bind(this)
  }

  createEvent(event) {
    this.props.setShowAddButtonTrue();
    const data = new FormData(event.target);
    // return (axios.post(`${BASE_URL}events?title=${event.title}&description=${event.description}`))
  }

  render() {
    return(
      <div className="form-box">
        <h1>Add Event</h1>
        <form className="add-form" onSubmit={this.createEvent}>
          <label htmlFor="title" className="form-add-item">
            Event title:
            <input type="text" id="name" name="name" />
          </label>
          <label htmlFor="description" className="form-add-item">
            Description:
            <input type="textarea" id="description" name="description" />
          </label>
          <label className="form-add-item">
            People:
            <input type="text" name="people" />
          </label>
          <label className="form-add-item">
            Location:
            <input type="text" name="location"/>
          </label>
          {/* TODO: Install datepicker package */}
          <label className="form-add-item">
            Date ( yyyy/mm/dd ):
            <input type="text" name="date" />
          </label>
          <label className="form-add-item">
            Start Time:
            <input type="text" name="start-time" />
          </label>
          <label className="form-add-item">
            End Time:
            <input type="text" name="end-time" />
          </label>
          <label className="form-add-item">
            Category:
            <input type="text" name="category" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default Form;
