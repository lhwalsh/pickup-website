import React, { Component} from 'react';
import Table from '../Table';
import Create from '../Create';
import { IoIosAddCircleOutline, IoIosCloseCircleOutline } from 'react-icons/io';
import "fontsource-baloo-tammudu-2/500.css";
import './index.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seen: false,
      events: []
    }

    this.toggleCreate = this.toggleCreate.bind(this)
    this.addEvent = this.addEvent.bind(this)
    this.setEvents = this.setEvents.bind(this)
  }

  toggleCreate = () => {
    this.setState({ seen: !this.state.seen });
  }

  addEvent = (event) => {
    this.setState({ events: this.state.events.concat(event) })
  }

  setEvents = (events) => {
    this.setState({ events })
  }

  render() {
    return (
      <div className="App">
          <div  className="Header">
            <div className="home">Pickup</div>
            {this.state.seen
              ? <IoIosCloseCircleOutline size={70} color="white" onClick={this.toggleCreate} className="icon" />
              : <IoIosAddCircleOutline size={70} color="white" onClick={this.toggleCreate} className="icon" />
            }
          </div>
          {this.state.seen ? <Create toggle={this.toggleCreate} addEvent={this.addEvent} /> : null}
          <Table events={this.state.events} setEvents={this.setEvents} />
      </div>
    );
  }
}

export default App;
