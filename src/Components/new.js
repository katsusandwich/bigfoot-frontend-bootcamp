import axios from "axios";
import React, { useEffect, useState } from "react";
import logo from "../logo.png";
import "../App.css";
import { useForm } from "react-hook-form";
import { BACKEND_URL } from "../constants.js";

// class App extends React.Component {

const NewSightingForm = () => {
  //useState to set every element of a new sightings post

  ////date
  const [date, setDate] = useState("");

  ///location
  const [location, setLocation] = useState("");

  ///notes
  const [notes, setNotes] = useState("");

  // write a react form box thing using react hook forms
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  // react form submit thing should do an axios post

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("date")} />
            <input {...register("location")} />
            <input {...register("notes")} />
            <select {...register("gender")}>
              <option value="female">female</option>
              <option value="male">male</option>
              <option value="other">other</option>
            </select>
            <input type="submit" />
          </form>
        </div>
      </header>
    </div>
  );
};

export default NewSightingForm;
