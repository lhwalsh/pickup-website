import React, { Component } from 'react';
import EventExpanded from './event-expanded'
import EventPreview from './event-preview'
import './index.css'

class Event extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showPreview: true,
    }

    this.setShowPreviewTrue = this.setShowPreviewTrue.bind(this);
    this.setShowPreviewFalse = this.setShowPreviewFalse.bind(this);
  }

  setShowPreviewTrue() {
    this.setState({ showPreview: true})
  }

  setShowPreviewFalse() {
    this.setState({ showPreview: false})
  }

  render() {
    const { showPreview } = this.state;
    const { event } = this.props;

    return (
      <div>
        {showPreview
          ? <EventPreview event={event} setShowPreviewFalse={this.setShowPreviewFalse} />
          : <EventExpanded event={event} setShowPreviewTrue={this.setShowPreviewTrue} />
        }
      </div>
    )
  }
}

export default Event;
