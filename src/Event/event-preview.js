import React from 'react';
import './event-preview.css';

const EventPreview = ({ event, setShowPreviewFalse }) =>
  <div className="event-preview">
    <button onClick={setShowPreviewFalse}>Expand</button>
    <h1 className="item">
      {event.title}
    </h1>
    <span style={{ fontSize: 25 }} className="event-item">
      {event.description}
    </span>
  </div>

export default EventPreview;
