import React, { useEffect } from 'react'

const ContactList = ({contacts, getOneContact, setActive, getContacts, deleteContact}) => {


  useEffect(()=>{
    getContacts()
  }, [])




  // console.log(contacts);

  return (
    <div>
      <h3>Contacts</h3>
      <ul>
        {contacts.map(item=>(
          <li key={item.id}>
            <div>
            <p>Name: {item.name}</p>
            <p>Email: {item.email}</p>
            <p>Tel: {item.phone}</p>
            </div>
            <div>
            <button 
            onClick={() => {getOneContact(item.id); setActive(true)}}>edit</button>
            <button onClick={() => deleteContact(item.id)}>delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ContactList