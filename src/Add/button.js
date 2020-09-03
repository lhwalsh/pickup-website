import React from 'react';
import './button.css';

const Button = ({ setShowAddButtonFalse }) =>
  <div className="add-button">
    <button onClick={setShowAddButtonFalse}>+</button>
  </div>

export default Button;
