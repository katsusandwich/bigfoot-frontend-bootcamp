import axios from "axios";
// import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./logo.png";
import "./App.css";
// import { BACKEND_URL } from "./constants.js";
import NewSightingForm from "./Components/new.js";
import Home from "./Components/home.js";

// class App extends React.Component {

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route that provides base app UI */}
        {/* <Route path="/" element={<App />}> */}
        {/* Route that renders home content */}
        <Route index element={<Home />} />
        {/* Route that renders new sighting form */}
        <Route path="new" element={<NewSightingForm />} />
        {/* Route that renders individual sightings */}
        {/* <Route path="sightings/:sightingId" element={<Sighting />} /> */}
        {/* Route that matches all other paths */}
        <Route path="*" element={"Nothing here!"} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
