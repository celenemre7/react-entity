import React from 'react'
import { contactSelector } from '../../redux/contactSlice'
import { useSelector } from 'react-redux'
import Item from './Item'

function List() {
  const contactsObj = useSelector(contactSelector.selectEntities)
  const contacts = Object.values(contactsObj)
  
  return (
    <div>
      {contacts.map((contact) => (
        <Item item={contact} key={contact.id}/>
      ))}
    </div>
  )
}

export default List