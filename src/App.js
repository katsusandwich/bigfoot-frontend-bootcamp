import axios from "axios";
import React, { useEffect, useState } from "react";
import logo from "./logo.png";
import "./App.css";
import { BACKEND_URL } from "./constants.js";

// class App extends React.Component {

const App = () => {
  const [sightings, setSightings] = useState([]);

  useEffect(() => {
    axios.get(`${BACKEND_URL}/sightings`).then((response) => {
      setSightings(response.data);
    });
  }, []);

  // useEffect(() => {axios.get(`${BACKEND_URL}/sightings`).then((res)=>{setSightings(res.data);});}, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
};

export default App;
