import React from 'react'
import Dietaryinfo from './dietaryinfo'


const DietaryPrefList = ({mealData}) => {
  return (
    <div className='calories__container'>
        {mealData.map((diet) => {
        return <aside key={diet.id} className='calories__contain'>
                <img src={diet.image} />
                <hr/>
                <h1>Name: {diet.title}</h1>
                <Dietaryinfo cuisine={diet} />
            </aside>
        })}

    </div>
  )
}

export default DietaryPrefList