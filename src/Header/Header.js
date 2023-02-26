import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import MenuIcon from '../Assets/menu.svg'

function Header() {
  return (
    <div>
        <div id='logo'></div>
        <div className='toggle-menu'>
            <img src={MenuIcon} alt=" "/>
        </div>
        <ul className='menu-items'>
            <li><Link className='li'>Home</Link></li>
            <li><Link className='li'>About</Link></li>
            <li><Link className='li'>Projects</Link></li>
            <li><Link className='li'>Contact</Link></li>
            <li><Link className='li'>Youtube</Link></li>
        </ul>
    </div>
  )
}

export default Header