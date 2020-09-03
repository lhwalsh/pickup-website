import React, { Component } from 'react';
import './index.css'

class Event extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showPreview: true,
      test: "Test"
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
      </div>
    )
  }
}

export default Event;
