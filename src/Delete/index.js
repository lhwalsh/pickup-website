import React from 'react';
import { FaTrash } from 'react-icons/fa';
import axios from 'axios';
import './index.css'

const BASE_URL = "https://pickup-app-backend.herokuapp.com/api/";

const deleteEvent = (id, removeEvent) => () => {
  axios.delete(`${BASE_URL}events/${id}`)
    .then(() => removeEvent(id))
}


const Delete = ({ id, removeEvent }) =>
  <FaTrash className="trash" onClick={deleteEvent(id, removeEvent)} />

export default Delete;
