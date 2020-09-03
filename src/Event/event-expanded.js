import React from 'react';
import './event-expanded.css';

const EventExpanded = ({ event, setShowPreviewTrue }) =>
  <div key={event.id} className="event-expanded">
    <button onClick={setShowPreviewTrue}>Close</button>
    <h1 className="event-item">
      {event.title}
    </h1>
    <span style={{ fontSize: 25 }} className="item">
      {event.description}
    </span>
    <span style={{ fontSize: 25 }} className="item">
      {event.location}
    </span>
    <span style={{ fontSize: 25 }} className="item">
      {event.people}
    </span>
  </div>

export default EventExpanded;
