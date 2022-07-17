import React from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser,AiOutlineBook} from "react-icons/ai"
import {RiServiceLine} from "react-icons/ri"
import {BiMessageSquareDetail} from "react-icons/bi"
import {MdOutlineMedicalServices} from "react-icons/md"
import {FiSearch} from "react-icons/fi"
import { useState } from 'react'
const Nav = () => {
  const [activeNav, setActiveNav] = useState("")
  return (
    <nav className='nav__container'>
      
      <a id="search__icon" href="search" onClick={() => setActiveNav("#search")} className={activeNav === '#search' ? "active" : ""}>
        <FiSearch/>
      </a>
      <a href="#" onClick={() => setActiveNav("#")} className={activeNav === '#' ? "active" : ""}><AiOutlineHome/></a>
      <a href="#account" onClick={() => setActiveNav("#account")} className={activeNav === '#account' ? "active" : ""}><AiOutlineUser/></a>
      <a href="#request" onClick={() => setActiveNav("#request")} className={activeNav === '#request' ? "active" : ""}><MdOutlineMedicalServices/></a>
      <a href="#services" onClick={() => setActiveNav("#services")} className={activeNav === '#services' ? "active" : ""}><RiServiceLine/></a>
      <a id="contact" href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === '#contact' ? "active" : ""}><BiMessageSquareDetail/></a>

    </nav>
  )
}

export default Nav