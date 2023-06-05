import React, { useState } from 'react'

const AddContact = ({addInfo}) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  
  
  function getInfo() {
    const obj = {
      name,
      email,
      phone,
      id: Date.now()
    }

    if (!name.trim() || !email.trim() || !phone.trim()){
      alert("empty input")
      return
    }

    // console.log(obj);
    
    addInfo(obj);
    setName("");
    setEmail("");
    setPhone("")

  }

    
  return (
    <div>
      <div>
        <input type="text" placeholder='Name' onChange={(e)=>setName(e.target.value)} value={name}/>
        <input type="text" placeholder='Email' onChange={(e)=>setEmail(e.target.value)} value={email}/>
        <input type="text" placeholder='Phone' onChange={(e)=>setPhone(e.target.value)} value={phone}/>
      </div>
        <button onClick={getInfo}>Add contact</button>
    </div>
  )
}

export default AddContact