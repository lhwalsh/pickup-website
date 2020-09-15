import React from 'react';
import Delete from '../Delete';
import "fontsource-baloo-tammudu-2/500.css"
import './event-preview.css';

const EventPreview = ({ event, removeEvent, setShowPreviewFalse }) =>
  <div className="event-preview">
    <span className="title">
      {event.title}
    </span>
    <span className="description">
      {event.description}
    </span>
    <Delete id={event.id} removeEvent={removeEvent} className="delete" />
  </div>

export default EventPreview;
