import React from "react";
import {ContactPicker} from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title"> Title</label>
      <input
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        />
        <label htmlFor="date">Contact</label>
        <input id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            min={getTodayString()}
        />
        <label htmlFor="time">Time</label>
        <input id="time"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
        />
      <label htmlFor="contact">Contact</label>
      <ContactPicker contacts={contacts} setContact={setContact} contact={contact}/>
      <button type="submit">Add Appointment</button>
    </form>
  );
};
