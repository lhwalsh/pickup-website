import React from 'react';
import './form.css'

const Form = ({ setShowAddButtonTrue }) =>
  <div className="add-form">
    <button onClick={setShowAddButtonTrue}>Submit</button>
    Got Here
  </div>

export default Form;
