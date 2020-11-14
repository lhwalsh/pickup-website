import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Table from '../Table';
import Create from '../Create';
import { IoIosAddCircleOutline } from 'react-icons/io';
import "fontsource-baloo-tammudu-2/500.css";
import './index.css';

export default function App () {
  return (
    <div className="App">
      <Router>
        <div  className="Header">
          <Link to="/table" className="home">Pickup</Link>
          <Link to="/create" className="add-icon">
            <IoIosAddCircleOutline size={70} color="white" />
          </Link>
        </div>
        <Switch>
          <Route path="/table">
            <Table />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
