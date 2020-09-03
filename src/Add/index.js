import React, { Component } from 'react';
import Button from './button';
import Form from './form';

class Add extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showAddButton: true,
    }

    this.setShowAddButtonTrue = this.setShowAddButtonTrue.bind(this);
    this.setShowAddButtonFalse = this.setShowAddButtonFalse.bind(this);
  }

  setShowAddButtonTrue() {
    this.setState({ showAddButton: true})
  }

  setShowAddButtonFalse() {
    this.setState({ showAddButton: false})
  }

  render() {
    const { showAddButton } = this.state

    return (
      <div>
        {showAddButton
          ? <Button setShowAddButtonFalse={this.setShowAddButtonFalse} />
          : <Form setShowAddButtonTrue={this.setShowAddButtonTrue} />
        }
      </div>
    )
  }
}

export default Add;
