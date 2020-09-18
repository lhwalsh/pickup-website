import React, { Component } from 'react';
import EventExpanded from './event-expanded'
import EventPreview from './event-preview'
import './index.css'

class Event extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { event, removeEvent, preview, setSelectedEvent } = this.props;

    return (
      preview
        ? <EventPreview event={event} removeEvent={removeEvent} setSelectedEvent={setSelectedEvent} />
        : <EventExpanded event={event} />
    )
  }
}

export default Event;
