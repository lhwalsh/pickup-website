import React from 'react';
import './event-expanded.css';

const EventExpanded = ({ event }) =>
  <div className="event-expanded">
    <span className="title-expanded">
      {event.title}
    </span>
    <span className="description-expanded">
      {event.description}
    </span>
    <span className="description-expanded">
      {event.people}
    </span>
    <span className="description-expanded">
      {event.location}
    </span>
    <span className="description-expanded">
      {event.date}
    </span>
    <span className="description-expanded">
      {event.start_time}
    </span>
    <span className="description-expanded">
      {event.end_time}
    </span>
    <span className="description-expanded">
      {event.category}
    </span>
  </div>

export default EventExpanded;
