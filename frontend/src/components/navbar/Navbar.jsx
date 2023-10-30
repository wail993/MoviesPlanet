import { NavLink,useLocation } from 'react-router-dom'
import {FaUser} from 'react-icons/fa'
import {HiMenu} from 'react-icons/hi'
import './navbar.css'
import { useState } from 'react'



const Navbar = () => {
  const [closeMenu,setCloseMenu]= useState(false)

  return (
    <div className='navbar'>
      <div className='logodiv'><a className='logo' href="/">SpeaKify</a></div>
      <div className={`links ${closeMenu ? 'open' :'close'}`}>
      <div className='link'><NavLink  className={({ isActive }) => isActive ? "active" : ""} to="/" >Home</NavLink></div>
      <div className='link'><NavLink  className={({ isActive }) => isActive ? "active" : ""} to="/course"  >Course Path</NavLink></div>
      <div className='link'><NavLink  className={({ isActive }) => isActive ? "active" : ""} to="/testlvl"  >Test-Level</NavLink></div>
      <div className='link'><NavLink className={({ isActive }) => isActive ? "active" : ""} to="/articles"  >Articles</NavLink></div>
      <div className='link'><NavLink className={({ isActive }) => isActive ? "active" : ""} to="/onlinesessions" >Online-Sessions</NavLink></div>
      <div className='link'><NavLink className={({ isActive }) => isActive ? "active" : ""} to="/aichat"  >Chat With Ai</NavLink></div>
      </div>
      <div className='login'>
        <button className='login-button'>Login</button>
        <FaUser className='login-icon'/>
      </div>
      <HiMenu onClick={()=>setCloseMenu(!closeMenu)} className='login-icon menu'/>
    </div>
    
  )
}

export default Navbar