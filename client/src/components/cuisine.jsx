import React from 'react'
import { useState,useEffect } from 'react'
import CuisineList from './CuisineList'
/* import './calories.css' */



const Cuisine = () => {
  const [mealData,setMealData] = useState(null)
  const [calories,setCalories] = useState('american')
  const savedUserInfo = localStorage.getItem('userinfo');
  console.log(savedUserInfo)
  const userInfo = JSON.parse(savedUserInfo);
  const intolerences = userInfo.checkedLabels
  const handleChange = (e) => {
    setCalories(e.target.value)
  }
  const randomPage = Math.floor(Math.random() * 40) + 1;
  const getMealData = () => {
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=fe334b7530be44148ba2cc8625ed36c4&cuisine=${calories}&number=4&offset=${randomPage}&exclude=${intolerences}`)
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
      {mealData && <CuisineList mealData={mealData} />}
    </section>
  )
}
  
  export default Cuisine;
  
