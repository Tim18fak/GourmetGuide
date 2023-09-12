import React from 'react'
import Createmeal from './createmeal'
import Createmealdashboard from './createmealdashboard2'
import { useState } from 'react'

const Parentmealplan = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('calories');
  const handleMenuItemClick = (itemName) => {
    setSelectedMenuItem(itemName)
    console.log(itemName)
  }
  return (
    <div>
      <Createmeal onMenuItemClick={handleMenuItemClick} />
      <Createmealdashboard selectedItem={selectedMenuItem} />
    </div>
  )
}

export default Parentmealplan