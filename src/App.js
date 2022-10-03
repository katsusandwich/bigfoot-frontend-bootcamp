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
  console.log(`This is ${sightings}`);

  // sightings rendering function

  let sightingItems = (sightings) => {
    return (
      <table>
        <thead>
          <tr>
            <th>Sighting ID </th>
            <th>Date </th>
            <th>Location </th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {sightings.map((sightings) => {
            return (
              <tr>
                <td>{sightings.id}</td>
                <td>{sightings.date}</td>
                <td>{sightings.location}</td>
                <td>{sightings.notes}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <p>{sightingItems(sightings)}</p>
        </p>
      </header>
    </div>
  );
};

export default App;
