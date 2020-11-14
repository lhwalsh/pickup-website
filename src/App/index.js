import React from 'react';
import Table from '../Table';
import { IoIosAddCircleOutline } from 'react-icons/io';
import "fontsource-baloo-tammudu-2/500.css";
import './index.css';

function App () {
  return (
    <div className="App">
      <div className="Header">
        <span className="home">Pickup</span>
        <div className="add-icon">
          <IoIosAddCircleOutline size={70} color="white" />
        </div>
      </div>
      <Table />
    </div>
  );
}

export default App;
