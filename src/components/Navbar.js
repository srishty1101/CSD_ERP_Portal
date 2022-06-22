import React, { useState } from 'react';
///import * as FaIcons from 'react-icons/fa';
//import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { Avatar } from '@material-ui/core';
//import { IconContext } from 'react-icons';

function Navbar() {
  //const [sidebar, setSidebar] = useState(false);

  //const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      
        <div className='navbar'>
        <button >Logout</button>
        </div>
        <div className='container'>
        <div className= 'nav-bar'>
        <ul className='nav-menu-items'>
          
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className= 'item'>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
                
              );
            })}
          </ul>
        </div>
        </div>
      </>
  );
}

export default Navbar;