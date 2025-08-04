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
      <Form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
          <label htmlFor="phone">Phone</label>
          <input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required pattern="\d{10}"/>
          <label htmlFor="email">Email</label>
          <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          <button type="submit">Add Contact</button>
      </Form>
  );
};

