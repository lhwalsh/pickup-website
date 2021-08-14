import React, { Component } from 'react';
import axios from 'axios';
import Event from '../Event';
import './index.css';

const BASE_URL = "https://pickup-app-backend.herokuapp.com/api";

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedEvent: null,
      error: null,
      loading: true
    };

    this.fetchEvents = this.fetchEvents.bind(this)
    this.addEvents = this.addEvents.bind(this)
    this.setSelectedEvent = this.setSelectedEvent.bind(this)
    this.removeEvent = this.removeEvent.bind(this)
  }

  componentDidMount() {
    this.fetchEvents();
  }

  fetchEvents = () => {
    axios(`${BASE_URL}/events`)
      .then(result => this.addEvents(result))
      .catch(error => this.setState({ error, loading: false }))
  }

  addEvents = (result) => () => {
    this.props.setEvents(result.data)
    this.setState({ selectedEvent: result.data[0], loading: false })
  }

  setSelectedEvent = (selectedEvent) => () => {
    this.setState({ selectedEvent })
  }

  removeEvent = (id) =>  {
    this.setState({ events: this.state.events.filter((event) => event.id !== id) })
  }

  render() {
    const { selectedEvent, error, loading } = this.state;
    const { events } = this.props

    return(
      <div className="table">
        <div className="events-preview">
          {loading 
            ? "Loading"
            : error
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
