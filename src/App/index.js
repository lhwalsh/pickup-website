import React, { Component} from 'react';
import Table from '../Table';
import Create from '../Create';
import { IoIosAddCircleOutline, IoIosCloseCircleOutline } from 'react-icons/io';
import "fontsource-baloo-tammudu-2/500.css";
import './index.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { seen: false }

    this.toggleCreate = this.toggleCreate.bind(this)
  }

  toggleCreate = () => {
    this.setState({ seen: !this.state.seen });
  }

  render() {
    return (
      <div className="App">
          <div  className="Header">
            <div className="home">Pickup</div>
            {this.state.seen
              ? <IoIosCloseCircleOutline size={70} color="white" onClick={this.toggleCreate} />
              : <IoIosAddCircleOutline size={70} color="white" onClick={this.toggleCreate} />
            }
          </div>
          {this.state.seen ? <Create toggle={this.toggleCreate} /> : null}
          <Table />
      </div>
    );
  }
}

export default App;
