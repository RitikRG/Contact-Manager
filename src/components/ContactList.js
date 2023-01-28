import React from 'react'
import ContactCard from './ContactCard'

const ContactList = (props) => {

  const renderContactList=props.contacts.map((contact)=>{
    return(
      <ContactCard contact={contact}/>
    )
  })


  return (
    <div className='bg-neutral-200 w-[90vw] md:w-[60vw] mx-auto mt-8 p-2 rounded-lg'>
      <p className='text-2xl font-semibold'>Contact List</p>
      <div className='grid grid-cols-1 gap-y-2 mt-2'>
        {renderContactList}
      </div>
    </div>
  )
}

export default ContactList
