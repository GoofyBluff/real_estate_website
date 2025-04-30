import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

function Header() {
  return (
    <header className='bg-slate-300 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl p-3 mx-auto'>
        <Link to='/'>
      <h1>
        <span className='text-slate-500'>Goofy</span>
        <span className='text-slate-700'>Estate</span>
      </h1>
      </Link>
      <form className='bg-slate-100 flex items-center p-3 rounded-lg'>
        <input type="text" placeholder='Search....'
        className='bg-transparent focus:outline-none w-24 sm:w-64'/>
        <FaSearch className='text-slate-600' />
      </form>
      <ul className='flex gap-4'>
        <Link to='/'>
        <li className='text-slate-700 hover:underline hidden sm:inline'>Home</li>
        </Link>
        <Link to='/about'>
        <li className='text-slate-700 hover:underline hidden sm:inline'>About</li>
        </Link>
        <Link to='/sign-in'>
        <li className='text-slate-700 hover:underline'>Sign In</li>
        </Link>
      </ul>
      </div>
      
    </header>
  )
}

export default Header
