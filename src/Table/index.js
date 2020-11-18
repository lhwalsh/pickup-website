import React, { Component } from 'react';
import axios from 'axios';
import Event from '../Event';
import './index.css';

const BASE_URL = "https://pickup-app-backend.herokuapp.com/api/";

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      selectedEvent: null,
      error: null
    };

    this.fetchEvents = this.fetchEvents.bind(this)
    this.setSelectedEvent = this.setSelectedEvent.bind(this)
    this.removeEvent = this.removeEvent.bind(this)
    this.addEvent = this.addEvent.bind(this)
  }

  componentDidMount() {
    this.fetchEvents();
  }

  fetchEvents = () => {
    axios(`${BASE_URL}events`)
      .then(result => this.setState({ events: result.data, selectedEvent: result.data[0] }))
      .catch(error => this.setState({ error }))
  }

  setSelectedEvent = (selectedEvent) => () => {
    this.setState({ selectedEvent })
  }

  removeEvent = (id) =>  {
    this.setState({ events: this.state.events.filter((event) => event.id !== id) })
  }

  render() {
    const { events, selectedEvent, error } = this.state;

    return(
      <div className="table">
        <div className="events-preview">
          {error
            ? "Failed to find events"
            : events.map(event =>
              <Event
                key={event.id}
                event={event}
                removeEvent={this.removeEvent}
                preview={true}
                setSelectedEvent={this.setSelectedEvent}
              />
            )
          }
        </div>
        {selectedEvent &&
          <Event event={selectedEvent} preview={false} />
        }
      </div>
    )
  }
}

export default Table;
