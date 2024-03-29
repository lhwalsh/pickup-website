import React from 'react';
import EventExpanded from './event-expanded'
import EventPreview from './event-preview'
import './index.css'

const Event = ({ event, removeEvent, preview, setSelectedEvent, selected }) => {
  return (
    preview
      ? <EventPreview event={event} removeEvent={removeEvent} setSelectedEvent={setSelectedEvent} selected={selected} />
      : <EventExpanded event={event} />
  );
}

export default Event;
