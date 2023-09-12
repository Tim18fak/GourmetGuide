import React from 'react'
import { useState } from 'react'
import MealList from './mealList'
import './caloresmeal.css';
import axios from 'axios'

const Caloresmeal = () => {
  const [mealData,setMealData] = useState(null)
  const [calories,setCalories] = useState(2000)
    const savedUserInfo = localStorage.getItem('userinfo');
    console.log(savedUserInfo)
    const userInfo = JSON.parse(savedUserInfo);
    const intolerences = userInfo.checkedLabels
    console.log(userInfo)
    console.log(intolerences)
    const handleChange = (e) => {
      setCalories(e.target.value)
    }
    const getMealData = (e) => {
      e.preventDefault()
      fetch(`https://api.spoonacular.com/mealplanner/generate?apiKey=38d1563e83c24403b4eb7b180ff0593e&timeFrame=day&targetCalories=${calories}&exclude=${intolerences}&number=4`)
      .then((response) => response.json())
      .then((data) => {
        setMealData(data)
        console.log(data)
      })
    }
  return (
    <div >
       <section className="App">
      <div className='calories__input'>
      <input 
      type='number'
      placeholder='Calories'
      onChange={handleChange}
      />
      <button onClick={getMealData}>
        Get Meal Plan
      </button> 
      </div>
      {mealData && <MealList mealData={mealData} />}
    </section>
    </div>
  );
}

export default Caloresmeal;
