import AddContact from './AddContact';
import { v4 as uuid } from 'uuid';
import './App.css';
import ContactList from './ContactList';
import Header from './Header';
import React, { useState, useEffect } from "react";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, {id: uuid(), ...contact}]);
  };

  useEffect(() => {
    const retriveLocalData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(retriveLocalData){
      setContacts(retriveLocalData)
    }
  }, [])

  useEffect(() => {
    if(!!contacts) { 
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
    }
  }, [contacts])
  //console.log(contacts)

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    })
    setContacts(newContactList)
  }
  return (
    <div className="app">
     <Header/>
     <AddContact addContactHandler = {addContactHandler}/>
     <ContactList contacts = {contacts} getContactId = {removeContactHandler}/>
    </div>
  );
}

export default App;
