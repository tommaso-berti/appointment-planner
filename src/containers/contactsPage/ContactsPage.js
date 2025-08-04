import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";
import {Tile} from "../../components/tile/Tile";

export const ContactsPage = ({contactList, saveContact}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
      if (name && phone && email) {
          if(!contactList.find((contact) => contact.name === name)) {
              saveContact({name, phone, email});
              setName("");
              setPhone("");
              setEmail("");
          }
          else {
                alert("Contact with this name already exists.");
          }
      }
      else {
            alert("Please fill in all fields.");
      }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
          <ContactForm handleSubmit={handleSubmit} name={name} phone={phone} email={email} setName={setName} setPhone={setPhone} setEmail={setEmail} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
      </section>
        <TileList list={contactList}/>
    </div>
  );
};
