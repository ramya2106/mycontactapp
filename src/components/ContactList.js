import React from 'react'
import './Contactstyle.css'
import ContactCard from './ContactCard'
const ContactList = (props) => {
  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };
  const renderContactList = props.contacts.map((contact) => {
    return(
      <ContactCard
        contact={contact}
        clickHander={deleteConactHandler}
        key={contact.id}
      />
    )
  })
  return (
    <div className='contact-contaainer'>
     {renderContactList}
    </div>
  )
}

export default ContactList