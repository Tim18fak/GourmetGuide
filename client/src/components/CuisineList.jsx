import React from 'react'
import Cuisineinfo from './cuisineinfo';
import './createmeal.css'

const CuisineList = ({ mealData }) => {
   

    return (
      <div className='Cuisine__options '>
      {mealData.map((diet) => {
      return <aside key={diet.id} >
              <div className='cuisine__optons-value card'>
              
              <img src={diet.image} />
              <hr/>
              <h1>{diet.title}</h1>
              <Cuisineinfo cuisine={diet} />
              </div>
          </aside>
      })}

  </div>
      );
}


export default CuisineList