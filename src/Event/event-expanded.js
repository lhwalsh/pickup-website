import React from 'react';
import './event-expanded.css';

const formatTime = (time) => new Date(time).toLocaleTimeString([], { hour: 'numeric', minute: 'numeric' })

const EventExpanded = ({ event }) =>
  <div className="event-expanded">
    <span className="title-expanded">
      {event.title}
    </span>
    <span className="description-expanded">
      {event.description}
    </span>
    <span className="description-expanded">
      {`People: ${event.people}`}
    </span>
    <span className="description-expanded">
      {`Location: ${event.location}`}
    </span>
    <span className="description-expanded">
      {`Date: ${event.date}`}
    </span>
    <span className="description-expanded">
      {`Start Time: ${formatTime(event.start_time)}`}
    </span>
    <span className="description-expanded">
      {`Start Time: ${formatTime(event.end_time)}`}
    </span>
    <span className="description-expanded">
      {`Category: ${event.category}`}
    </span>
  </div>

export default EventExpanded;
