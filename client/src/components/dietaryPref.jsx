import React from 'react'
import { useState } from 'react'
import DietaryPrefList from './dietaryPrefList'
/* import './calories.css' */



const DietaryPref = () => {
  const [mealData,setMealData] = useState(null)
  const [diet,setdiet] = useState('vegan')
  const savedUserInfo = localStorage.getItem('userinfo');
  console.log(savedUserInfo)
  const userInfo = JSON.parse(savedUserInfo);
  const intolerences = userInfo.checkedLabels
  
  const handleChange = (e) => {
    setdiet(e.target.value)
  }
  const randomPage = Math.floor(Math.random() * 100) + 1;
  const getMealData = () => {
    
  
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=38d1563e83c24403b4eb7b180ff0593e&diet=${diet}&number=4&offset=${randomPage}&addRecipeNutrition=true&exclude=${intolerences}`)
    .then((response) => response.json())
    .then((data) => {
      setMealData(data.results)
      console.log(data)
    })
  }

  return (
    <section className='calories__input'>
      <input 
      type='text'
      placeholder='Calories'
      onChange={handleChange}
      />
      <button onClick={getMealData}>
        Get Meal
      </button> 
      {mealData && <DietaryPrefList mealData={mealData} />}
    </section>
  )
}

export default DietaryPref
