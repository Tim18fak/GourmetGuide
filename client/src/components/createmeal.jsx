import React from 'react'
import { useState } from 'react'
/* import MealList from './MealList'  */
import './createmeal.css'
import Cookies from 'universal-cookie';

const days = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
const cookie = new Cookies();
const Mealplan = ({ selectedItem, onMenuItemClick }) => {
  const [selectedDays, setSelectedDays] = useState([]);
  const [state, setstate] = useState(false)

  const handleDayToggle = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d) => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

const Mealplanoption = ({ selectedItem, onMenuItemClick }) => {

  }
  return(
    <header className='create__meal-banner'>
      <h4>Welcome, <span>{cookie.get('username')}</span></h4>
      <h2>Create a Daily Meal Plan</h2>
      {/* <section className='create__meal-days'>
        {days.map((day, index) => (
          <div key={index}>
            <input
              name={day}
              type='checkbox'
              checked={selectedDays.includes(day)}
              onChange={() => handleDayToggle(day)}
            />
            <label>{day}</label>
          </div>
        ))}
      </section> */}
      <section className='create__meal-search-option'>
          <ul>
          <li
          onClick={() => onMenuItemClick('calories')}
          style={{ background: selectedItem === 'calories' ? '#2dc76d' : '' }}
        >
        Based on Calories
        </li>
        <li
          onClick={() => onMenuItemClick('cuisine')}
          style={{ background: selectedItem === 'cuisine' ? '#2dc76d' : '' }}
        >
          Based on Cuisine
        </li>
        <li
          onClick={() => onMenuItemClick('dietary')}
          style={{ background: selectedItem === 'dietary' ? '#2dc76d' : '' }}
        >Based on Dietary Preferences
        </li>
          </ul>
      </section>
    </header>
  );
}
/* */
const Createmeal = ({onMenuItemClick}) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
    onMenuItemClick(itemName)

  };
  return (
    <section>
      <Mealplan selectedItem={selectedItem} onMenuItemClick={handleItemClick}/>
    </section>
  );
}
export default Createmeal
