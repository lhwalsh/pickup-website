import React from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';
import './button.css';

const Button = ({ setShowAddButtonFalse }) =>
  <div className="add-button">
    <IoIosAddCircleOutline size={50} onClick={setShowAddButtonFalse} />
  </div>

export default Button;
