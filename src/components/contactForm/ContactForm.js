import React from "react";
import {Form} from "react-router-dom";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" value={name} onChange={(e) => setName(e.target.value)} />
          <label htmlFor="phone">Phone</label>
          <input id="phone" value={name} onChange={(e) => setPhone(e.target.value)} />
          <label htmlFor="email">Email</label>
          <input id="email" value={name} onChange={(e) => setEmail(e.target.value)} />
      </form>
  );
};

