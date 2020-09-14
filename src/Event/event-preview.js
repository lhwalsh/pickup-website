import React from 'react';
import { FaExpandAlt } from 'react-icons/fa';
import './event-preview.css';

const EventPreview = ({ event, setShowPreviewFalse }) =>
  <div className="event-preview">
    <FaExpandAlt onClick={setShowPreviewFalse} className="expand" />
    <h1 className="item">
      {event.title}
    </h1>
    <span style={{ fontSize: 25 }} className="event-item">
      {event.description}
    </span>
  </div>

export default EventPreview;
