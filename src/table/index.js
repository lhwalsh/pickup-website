import React, { Component } from 'react';
import axios from 'axios';
import Event from '../Event';
import Add from '../Add';
import './index.css';

const BASE_URL = "https://pickup-app-backend.herokuapp.com/api/";

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
    };

    this.fetchEvents = this.fetchEvents.bind(this)
  }

  componentDidMount() {
    this.fetchEvents();
  }

  fetchEvents = () => {
    axios(`${BASE_URL}events`)
      .then(result => this.setState({ events: result.data }))
      .catch(error => this.setState({ error }))
  }

  render() {
    const { events, error } = this.state;

    return(
      <div className="table">
        {error
          ? "Failed to find events"
          : events.map(event =>
            <div key={event.id}>
              <Event event={event} />
            </div>
          )
        }
        <Add />
      </div>
    )
  }
}

export default Table;
