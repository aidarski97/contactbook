import React, { useEffect, useState } from 'react'
import "./EditContact.css"


const EditContact = ({oneContact, setActive, saveChanges}) => {

  const [edittedContact, setEdittedContact] = useState({
    name: '',
    email: '',
    phone: ''
  })
  
  const handleChange = (event) => {
    setEdittedContact({
      ...edittedContact,
      [event.target.name]: event.target.value
    })
  }

  useEffect(() => {
    if(oneContact){
      setEdittedContact(oneContact)
    }
  }, [oneContact])

  function handleSaveChanges(){
    saveChanges(edittedContact);
    setActive(false)
  }
  
  return (
    <div className="modal" onClick={() => setActive(false)}>
        <div className='modal_content' onClick={(e) => e.stopPropagation()}>
            <input type="text" value={edittedContact.name} onChange={handleChange} name="name"  />
            <input type="text" value={edittedContact.email} onChange={handleChange} name="email"  />
            <input type="text" value={edittedContact.phone} onChange={handleChange} name="phone"  />
            <button onClick={handleSaveChanges}>Save</button>
        </div>
        </div>
  )
}

export default EditContact