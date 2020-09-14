import React from 'react';
import Delete from '../Delete';
import { FaExpandAlt } from 'react-icons/fa';
import './event-preview.css';

const EventPreview = ({ event, removeEvent, setShowPreviewFalse }) =>
  <div className="event-preview">
    <FaExpandAlt onClick={setShowPreviewFalse} className="expand" />
    <h1 className="item">
      {event.title}
    </h1>
    <span style={{ fontSize: 25 }} className="event-item">
      {event.description}
    </span>
    <Delete id={event.id} removeEvent={removeEvent} className="delete" />
  </div>

export default EventPreview;
