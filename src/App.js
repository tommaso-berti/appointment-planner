import React, {useState, useEffect} from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
     const [contactList, setContactList] = useState([]);
     const saveContact = (obj) => {
         setContactList([...contactList, obj]);
     }
     const [appointmentList, setAppointmentList] = useState([]);
     const saveAppointment = (obj) => {
        setAppointmentList([...appointmentList, obj]);
     }
        // Log the contactList to the console whenever it changes
     useEffect(() => {
         console.log(contactList)
     }, [contactList]);
    useEffect(() => {
        console.log(appointmentList)
    }, [appointmentList]);
     /*
  Define state variables for 
  contacts and appointments 
  */

  /*
  Implement functions to add data to
  contacts and appointments
  */

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage saveContact={saveContact} contactList={contactList}/> /* Add props to ContactsPage */ }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage saveAppointment={saveAppointment} appointmentList={appointmentList} contactList={contactList}/> /* Add props to AppointmentsPage */ }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
