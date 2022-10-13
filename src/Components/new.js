import axios from "axios";
import React, { useEffect, useState } from "react";
import logo from "../logo.png";
import "../App.css";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { BACKEND_URL } from "../constants.js";

const NewSightingForm = () => {
  //useState to set every element of a new sightings post

  // ////date
  // const [date, setDate] = useState("");

  // ///location
  // const [location, setLocation] = useState("");

  // ///notes
  // const [notes, setNotes] = useState("");

  // write a react form box thing using react hook forms
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { isSubmitSuccessful },
  } = useForm();

  // react form submit thing should do an axios post
  const onSubmit = (data) => {
    const { date, location, notes } = data;
    axios
      .post(`${BACKEND_URL}/sightings`, {
        date,
        location,
        notes,
      })
      .then(() => {
        // Clear form state
        // setDate("");
        // setLocation("");
        // setNotes("");
        //navigate to home
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ date: "", location: "", notes: "" });
    }
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
