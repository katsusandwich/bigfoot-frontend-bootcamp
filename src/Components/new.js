import axios from "axios";
import React, { useEffect, useState } from "react";
import logo from "../logo.png";
import "../App.css";
import { BACKEND_URL } from "../constants.js";

// class App extends React.Component {

const NewSightingForm = () => {
  const [sightings, setSightings] = useState([]);

  useEffect(() => {
    axios.get(`${BACKEND_URL}/sightings`).then((response) => {
      setSightings(response.data);
    });
  }, []);

  // useEffect(() => {axios.get(`${BACKEND_URL}/sightings`).then((res)=>{setSightings(res.data);});}, []);
  console.log(`This is ${sightings}`);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <p>This is a new sightings form</p>
        </p>
      </header>
    </div>
  );
};

export default NewSightingForm;
