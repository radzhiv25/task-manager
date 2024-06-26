import React from 'react'
import { BsGithub } from 'react-icons/bs'

const Navbar = () => {
  return (
    <div className='p-3 border-b mx-5 flex justify-between items-center'>
        <div className="flex flex-col">
            <h1 className='text-2xl text-gray-500 font-semibold leading-tight'>Task Manager</h1>
            <p className='text-xs'>manage your tasks in few clicks</p>
        </div>
        <BsGithub className='size-8 hover:text-gray-500'/>
    </div>
  )
}

export default Navbar