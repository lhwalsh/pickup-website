import React from 'react';
import "fontsource-baloo-tammudu-2/500.css"
import { IoIosAddCircleOutline } from 'react-icons/io';
import './index.css';

function Header () {
  return (
    <div className="Header">
      <span className="home">Pickup</span>
      <div className="add-icon">
        <IoIosAddCircleOutline size={70} color="white" />
      </div>
    </div>
  );
}

export default Header;
