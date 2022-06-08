import React from 'react'
import './Contactstyle.css'
import { FaTrashAlt } from 'react-icons/fa'
import { FaUserCircle } from 'react-icons/fa'

const ContactCard = (props) => {
  const { id, name, email, number } = props.contact;
  return (
    <div className='main-contactlist'>
        <div className='user-icon'><FaUserCircle className='user-avatar'/></div>
        <div className='content-contact'>
          <div className='contact-name'>{name}</div>
          <div className='contact-mail'>{email}</div>
          <div className='contact-num'>{number}</div>
        </div>
        <div className='trash-icon'>
         <i ><FaTrashAlt onClick={() => props.clickHander(id) } /></i> 
        </div>
      </div>
  )
}

export default ContactCard