import React, { Component } from 'react';
import axios from 'axios';
import './form.css'

const BASE_URL = "https://pickup-app-backend.herokuapp.com/api/";

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      description: '',
      people: '',
      location: '',
      date: '',
      start_time: '',
      end_time: '',
      category: '',
    };

    this.createEvent = this.createEvent.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  createEvent() {
    const {
      title,
      description,
      people,
      location,
      date,
      start_time,
      end_time,
      category
    } = this.state;
    this.props.setShowAddButtonTrue();
    return (axios.post(`${BASE_URL}events?title=${title}&description=${description}&people=${people}&location=${location}&date=${date}&start_time=${start_time}&end_time=${end_time}&category=${category}`))
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return(
      <div className="form-box">
        <h1>Add Event</h1>
        <form className="add-form" onSubmit={this.createEvent}>
          <label htmlFor="title" className="form-add-item">
            Title:
            <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
          </label>
          <label htmlFor="description" className="form-add-item">
            Description:
            <input type="textarea" name="description" value={this.state.description} onChange={this.handleChange} />
          </label>
          <label className="form-add-item">
            People:
            <input type="text" name="people" value={this.state.people} onChange={this.handleChange} />
          </label>
          <label className="form-add-item">
            Location:
            <input type="text" name="location" value={this.state.location} onChange={this.handleChange} />
          </label>
          {/* TODO: Install datepicker package */}
          <label className="form-add-item">
            Date:
            <input type="text" name="date" value={this.state.date} onChange={this.handleChange} />
          </label>
          <label className="form-add-item">
            Start Time:
            <input type="text" name="start_time" value={this.state.start_time} onChange={this.handleChange} />
          </label>
          <label className="form-add-item">
            End Time:
            <input type="text" name="end_time" value={this.state.end_time} onChange={this.handleChange} />
          </label>
          <label className="form-add-item">
            Category:
            <input type="text" name="category" value={this.state.category} onChange={this.handleChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Form;
