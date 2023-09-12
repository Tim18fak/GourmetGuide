import React from 'react'
import './App.css'
import Logout1 from './Logout';
import { FaUserCircle } from 'react-icons/fa';
import { FaChartBar } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';
import { FaUtensils } from 'react-icons/fa';
import { useState } from 'react';


const Banner = ({ selectedItem, onMenuItemClick }) => {
  return(
      <div className='banner__name-theme'>
          {/* <h2 className='banner__name'><span>Gourmet</span> Guide</h2> */}
          <p className='banner__theme-word' ><span style={{
            size: '',
            color: 'whitesmoke',
          }}>"</span>Unleash Your Inner Chef<span style={{
            size: '',
            color: 'whitesmoke',
          }}>"</span></p>
        {  <p onClick={() => onMenuItemClick('CreateMeal')} 
          style={{
            background: selectedItem === 'dashboard' ? '#2dc76d' : '' ,
            borderBottom : selectedItem === 'dasboard' ? "blue" : ''
          }}
          className='banner__name-create__meal'><span>+</span>Create a meal Plan</p>}
          {/*  <li
          onClick={() => onMenuItemClick('')}
        >
          <span><FaUtensils /></span>&nbsp;&nbsp;&nbsp;Grocery List
        </li> */}
      </div>
  );
}

const Menus = ({ selectedItem, onMenuItemClick }) => {
  
  return (
    <section className='menu__list'>
      <div>
        <h3>Menus</h3>
      </div>
      <ul className='menu__ul-list'>
        {/* <li
          onClick={() => onMenuItemClick('dashboard')}
          style={{ background: selectedItem === 'dashboard' ? '#2dc76d' : '' }}
        >
          <span><FaChartBar /></span>&nbsp;&nbsp;&nbsp;Dashboard
        </li> */}
        {/* <li
          onClick={() => onMenuItemClick('discover')}
          style={{ background: selectedItem === 'discover' ? '#2dc76d' : '' }}
        >
          <span><FaSearch />&nbsp;&nbsp;&nbsp;</span>Discover Receipes
        </li> */}
        <li
          onClick={() => onMenuItemClick('recipes')}
          style={{ background: selectedItem === 'recipes' ? '#2dc76d' : '' }}
        >
          <span><FaBook /></span>&nbsp;&nbsp;&nbsp;My Meals
        </li>
        <li
          onClick={() => onMenuItemClick('grocery')}
          style={{ background: selectedItem === 'grocery' ? '#2dc76d' : '' }}
        >
          <span><FaUtensils /></span>&nbsp;&nbsp;&nbsp;Grocery List
        </li>
      </ul>
    </section>
  );
}
const Profile = ({ selectedItem, onMenuItemClick }) => {
  return(
    <div className='profile__dashboard'>
      <h2>Your Account</h2>
        <main>
            <ul>
            <li
          onClick={() => onMenuItemClick('discover')}
          style={{ background: selectedItem === 'discover' ? '#2dc76d' : '' }}
        >
          <span><FaUserCircle size={20} /></span>&nbsp;&nbsp;Profile
        </li>

        {/* <li
          onClick={() => onMenuItemClick('Notification')}
          style={{ background: selectedItem === 'Notification' ? '#2dc76d' : '' }}
        >
          Notification
        </li>

        <li
          onClick={() => onMenuItemClick('Help_and_Support')}
          style={{ background: selectedItem === 'Help_and_Support' ? '#2dc76d' : '' }}
        >
          Help and Support
        </li> */}

        <li
          onClick={() => onMenuItemClick('Logout')}
          style={{ background: selectedItem === 'Logout' ? '#2dc76d' : '' }}
        >
          <Logout1/>
        </li>
            </ul>
        </main>
        
    </div>
  );
}
const Sidebar = ({ onMenuItemClick }) => {
  const [selectedItem, setSelectedItem] = useState('discover');

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
    onMenuItemClick(itemName)

  };
  return (
    <div>
      <Banner selectedItem={selectedItem} onMenuItemClick={handleItemClick}/>
      <Menus selectedItem={selectedItem} onMenuItemClick={handleItemClick}/>
      <Profile selectedItem={selectedItem} onMenuItemClick={handleItemClick}/>

    </div>
  )
}

export default Sidebar
