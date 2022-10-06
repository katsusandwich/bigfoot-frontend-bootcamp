import axios from "axios";
import React, { useEffect, useState } from "react";
import logo from "../logo.png";
import "../App.css";
import { useForm } from "react-hook-form";
import { BACKEND_URL } from "../constants.js";
import { Navigate } from "react-router-dom";

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

  // react form submit thing should do an axios post
  const onSubmit = (data) => console.log(data);
  axios
    .post(`${BACKEND_URL}/sightings`, {
      date,
      location,
      notes,
    })
    .then(() => {
      // Clear form state
      setDate("");
      setLocation("");
      setNotes("");
      //navigate to home
      Navigate(`/`);
    })
    .catch(function (error) {
      console.log(error);
    });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("date")} type="datetime-local" />
            <input {...register("location")} placeholder="Yishun, Singapore" />
            <input
              {...register("notes")}
              placeholder="Big bear, bigger than human, walking around the park at night. Very scary."
            />
            {/* <select {...register("gender")}>
              <option value="female">female</option>
              <option value="male">male</option>
              <option value="other">other</option>
            </select> */}
            <input type="submit" />
          </form>
        </div>
      </header>
    </div>
  );
};

export default NewSightingForm;
