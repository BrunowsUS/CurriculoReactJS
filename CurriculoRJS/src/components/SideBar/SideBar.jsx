import React from 'react'
import './SideBar.css'

// ICONS //
import { BiHomeAlt2 } from 'react-icons/bi';
import { BsCodeSlash } from 'react-icons/bs';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { AiOutlineContacts } from 'react-icons/ai';

const SideBar = () => {
  return (
    <nav className='sidebar'>
            <img alt='logo' src='@'/>
        <div className='side-container'>
            <ul>
                <li>
                    <BiHomeAlt2/>
                    Home
                </li>
                <li>
                    <BsCodeSlash/>
                    Skills
                </li>
                <li>
                    <AiOutlineFundProjectionScreen/>
                    Projects
                </li>
                <li>
                    <AiOutlineContacts/>
                    Social
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default SideBar