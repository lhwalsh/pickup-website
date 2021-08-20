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
    this.sortEventsByDate = this.sortEventsByDate.bind(this)
    this.setEvents = this.setEvents.bind(this)
  }

  toggleCreate = () => {
    this.setState({ seen: !this.state.seen });
  }

  addEvent = (event) => {
    this.setState((state) => ({ events: state.events.concat(event).sort((a, b) => this.sortEventsByDate(a, b)) }))
  }

  sortEventsByDate = (a, b) => {
    if (Date.parse(a.date) === Date.parse(b.date)) {
      return Date.parse(b.start_time) - Date.parse(a.start_time)
    } else {
      return Date.parse(b.date) - Date.parse(a.date)
    }
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
