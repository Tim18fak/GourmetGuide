import React from 'react'
import { Auth, Sidebar , Maincontent } from './components'
import Cookies from 'universal-cookie'
import './App.css'
import { useState } from 'react'


const cookies = new Cookies();
const authToken = cookies.get("userId");
console.log(authToken)

const SignIn = () => {
    const [selectedMenuItem, setSelectedMenuItem] = useState(!authToken ? "profile" : "discover");

  // Callback function to handle menu item clicks
  const handleMenuItemClick = (itemName) => {
    setSelectedMenuItem(itemName);
    console.log(itemName)
  };

  if(!authToken) return <Auth />
  return (
    <section className='dash'>
    <div className='Sidebar'>
      <Sidebar  onMenuItemClick={handleMenuItemClick} />
    </div>
    <div className='Maincontent'>
      <Maincontent selectedItem={selectedMenuItem}/>
  </div>
  
  </section>
  )
}

export default SignIn