import React from 'react';
import './form.css'

const Form = ({ setShowAddButtonTrue }) =>
  <div className="add-form">
    <form>
      <label class="form-add-item">
        Event title:
        <input type="text" name="name" />
      </label>
      <label class="form-add-item">
        Description:
        <input type="textarea" name="description" />
      </label>
      <label class="form-add-item">
        People:
        <input type="text" name="people" />
      </label>
      <label class="form-add-item">
        Location:
        <input type="text" name="location"/>
      </label>
      {/* TODO: Install datepicker package */}
      <label class="form-add-item">
        Date ( 2020/09/02 YEAR/MONTH/DAY ):
        <input type="text" name="date" />
      </label>
      <label class="form-add-item">
        Start Time:
      </label>
      <label class="form-add-item">
        End Time:
      </label>
      <label class="form-add-item">
        Category:
        <input type="text" name="category" />
      </label>
    </form>
    <button onClick={setShowAddButtonTrue}>Submit</button>
    Got Here
  </div>

export default Form;
