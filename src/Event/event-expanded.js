import React from 'react';
import { FaCompressAlt } from 'react-icons/fa';
import './event-expanded.css';

const EventExpanded = ({ event, setShowPreviewTrue }) =>
  <div className="event-expanded">
    <FaCompressAlt onClick={setShowPreviewTrue} className="compress" />
    <h1 className="event-item">
      {event.title}
    </h1>
    <span style={{ fontSize: 25 }}>
      {event.description}
    </span>
    <span style={{ fontSize: 25 }}>
      {event.people}
    </span>
    <span style={{ fontSize: 25 }}>
      {event.location}
    </span>
    <span style={{ fontSize: 25 }}>
      {event.date}
    </span>
    <span style={{ fontSize: 25 }}>
      {event.start_time}
    </span>
    <span style={{ fontSize: 25 }}>
      {event.end_time}
    </span>
    <span style={{ fontSize: 25 }}>
      {event.category}
    </span>
  </div>

export default EventExpanded;
