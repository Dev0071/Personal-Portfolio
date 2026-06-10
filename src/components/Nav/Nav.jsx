import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {BsTools} from 'react-icons/bs'
import {BsFolder2} from 'react-icons/bs'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="/" onClick={() => {setActiveNav('#')}} className={activeNav === '#' ? 'active' : ''}>
        <AiOutlineHome />
      </a>
      <a href="#About" onClick={() => {setActiveNav('#About')}} className={activeNav === '#About' ? 'active' : ''}>
        <AiOutlineUser />
      </a>
      <a href="#Experience" onClick={() => {setActiveNav('#Experience')}} className={activeNav === '#Experience' ? 'active' : ''}>
        <BiBook />
      </a>
      <a href="#Skills" onClick={() => {setActiveNav('#Skills')}} className={activeNav === '#Skills' ? 'active' : ''}>
        <BsTools />
      </a>
      <a href="#Portfolio" onClick={() => {setActiveNav('#Portfolio')}} className={activeNav === '#Portfolio' ? 'active' : ''}>
        <BsFolder2 />
      </a>
      <a href="#Contact" onClick={() => {setActiveNav('#Contact')}} className={activeNav === '#Contact' ? 'active' : ''}>
        <BiMessageSquareDetail/>
      </a>
    </nav>
  )
}

export default Nav
