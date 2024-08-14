import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addContact } from '../../redux/contactSlice'
import { nanoid } from '@reduxjs/toolkit'

function Form() {
    const [name,setName] = useState('')
    const [number, setNumber] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
      e.preventDefault()
      
      if (!name || !number) return false

      
      dispatch(addContact({id:nanoid(), name, phone_number: number}))
      setNumber('')
      setName('')
    }

  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input  placeholder='name' type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder='phone number' value={number} onChange={(e) => setNumber(e.target.value)} />
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default Form