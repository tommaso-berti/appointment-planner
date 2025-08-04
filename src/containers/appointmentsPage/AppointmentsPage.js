import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({appointmentList, contactList, saveAppointment}) => {
  /*
  Define state variables for 
  appointment info
  */
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [appointmentContact, setAppointmentContact] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
      if (!appointmentList.find((appointment) => appointment.title === title)) {
          saveAppointment({title, name: appointmentContact, date, time });
          setName("");
          setTitle("");
          setDate("");
          setTime("");
          setAppointmentContact("")
      }
      else {
            alert("Appointment with this title already exists.");
      }
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
          <AppointmentForm handleSubmit={handleSubmit} {...{ name, title, date, time, setName, setTitle, setDate, setTime }} contacts={contactList} contact={appointmentContact} setContact={setAppointmentContact}/>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
          <TileList list={appointmentList} />
      </section>
    </div>
  );
};