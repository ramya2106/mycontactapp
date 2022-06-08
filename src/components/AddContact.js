import React, { useState, useEffect } from "react";
import './Headerstyles.css'

const AddContact = (props) => {
  const[state, setState] = useState({
    name: "",
    email: "",
    number: ""
  })
  function handlechange(event) {
    setState({
        ...state,
        [event.target.name]:event.target.value
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if ((state.name === "" || state.email === "") || state.number === "") { 
      alert("ALl the fields are mandatory!");
      return;
    } 
    props.addContactHandler(state);
    console.log(state)
    setState({ name: "", email: "", number: "" });
  }
  console.log(state)
  return (
    <div className='addcontact'>
        <h3>
            Add Contact
        </h3>
        <div className='contact-form'>
        <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name"  value = {state.name} onChange={handlechange}/>
        <label>Email</label>
        <input type="email" name="email" value = {state.email} onChange={handlechange}/>
        <label>Mobile Number</label>
        <input type="text" name="number" value = {state.number} onChange={handlechange}/>
        <button> Save </button>
        </form>
        </div>
    </div>
  )
}

export default AddContact