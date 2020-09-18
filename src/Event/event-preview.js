import React from 'react';
import Delete from '../Delete';
import "fontsource-baloo-tammudu-2/500.css"
import './event-preview.css';

const EventPreview = ({ event, removeEvent, setSelectedEvent }) =>
  <div className="event-preview" onClick={setSelectedEvent(event)}>
    <div className="event-contents">
      <span className="title-preview">
        {event.title}
      </span>
      <span className="description-preview">
        {event.description}
      </span>
    </div>
    <Delete id={event.id} removeEvent={removeEvent} className="delete" />
  </div>

export default EventPreview;
