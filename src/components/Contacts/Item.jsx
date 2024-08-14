import React from 'react'
import { deleteContact } from '../../redux/contactSlice'
import { useDispatch } from 'react-redux'

function Item({item}) {
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    if (window.confirm('are you sure?'))
      dispatch(deleteContact(id))
  }

  return (
    <div className="contact-item">
      <span>{item.name}</span>
      <span>{item.phone_number}</span>
      <span className='deleteBtn' onClick={() => handleDelete(item.id)}>X</span>
    </div>
  )
}

export default Item