import React from "react";

export const ContactPicker = ({contacts, setContact, contact}) => {
  console.log("ContactPicker rendered", contact);
  return (
    <select id="contact" value={contact || ""} onChange={(e) => setContact(e.target.value)}>
      <option value="" disabled>No contact selected</option>
      {contacts.map((contact) => {
        return <option key={contact.name} value={contact.name}>
          {contact.name}
        </option>
      })}
    </select>
  );
};
