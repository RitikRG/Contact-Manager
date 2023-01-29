import React from 'react'

const ContactCard = (props) => {
  const {id, name, email} = props.contact;

  const remove=()=>{
    props.deleteContactHandler(id);
  }
  return (
    <div className='w-[95%] mx-auto bg-neutral-100 rounded-lg shadow-lg p-2 flex justify-between'>
          <div className='grid grid-cols-5'>
            <div className='col-span-1 bg-neutral-800 w-[40px] h-[40px] text-center text-2xl text-neutral-300 rounded-full my-auto mx-auto mr-2'>
              <i className="fa-solid fa-user translate-y-[2px]"></i>
            </div>
            <div className='grid grid-cols-1 col-span-4'>
              <p className='text-xl  text-neutral-900 font-semibold'>{name}</p>
              <p className='text-lg text-neutral-600'>{email}</p>
            </div>
          </div>
          <div className='text-2xl -translate-x-2 translate-y-2 cursor-pointer text-red-600' onClick={remove}><i className="fa-solid fa-trash-can"></i></div>
      </div>
  )
}

export default ContactCard
