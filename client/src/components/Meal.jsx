import React from 'react'
import { useState, useEffect } from 'react'
import './caloresmeal.css'
import Extrainfo from './extrainfo'
import Cookies from 'universal-cookie'
import axios from 'axios'

const cookie = new Cookies()

const Addmeal = ({mealinfo}) => {
  const [state,setstate] = useState(true)
  const SendMeal = async() => {

    const username = cookie.get('username')
    const {healthScore,
      readyInMinutes,
      servings,
      sourceUrl,
      title,
      image,
      Id
    } =  mealinfo
    const  mealdataTOserver = {
      mealID: Id,
      mealTitle: title, 
      Preparation_Time: readyInMinutes,
      Healthscore: healthScore,
      Serving: servings,
      MealImageUrl: image,
      sourceUrl:sourceUrl,
    }
    const GetUrl = `http://localhost:5000/mealplan//mealplan`
    try{
	  const { data } = await axios.post(`${GetUrl}?username=${username}`, mealdataTOserver)
    console.log(data)
    console.log(mealinfo)
    console.log('hell')
    console.log(servings)
    setstate((prevstate) => !state)
    } catch(error){
    console.error('error',error)
    }
  }

  console.log("hee")
  return(
    <section>
      {state && (
        <button onClick={async() => SendMeal()}>Save</button>
      )}
    </section>
  );

}



const Meal = ({meal}) => {
  const [imageURL, setimageURl] = useState('')
  const [mealData,setMealData] = useState(null)
  const [shouldRender, setShouldRender] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [user, setUser] = useState('') // Define user using useState hook
  useEffect(() => {
    fetch(`https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=38d1563e83c24403b4eb7b180ff0593e&includeNutrition=true`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data)
        setimageURl(data)
      })
      .catch(() => {
        console.log('error')
      })
  },[meal.id])

//////////////// to delay Extrameal component

useEffect(() => {
  const delay = 2000; // 2 seconds in milliseconds

  const timerId = setTimeout(() => {
    setShouldRender(true);
  }, delay);

  return () => {
    clearTimeout(timerId);
  };
}, []);


/////////////////////
const handleMouseEnter = () => {
  setIsHovered(true);
};

const handleMouseLeave = () => {
  setIsHovered(false);
};
  return ( 
    <main className='meal__card-container' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <article className='meal__card-children'>
        <img src={imageURL.image} className='meal__image' alt='receipe' />
       
        <hr/>
        <h1>{meal.title}</h1>
        <ul>
          <li>Preparation time: {meal.readyInMinutes} minutes</li>
          <li>Number of serving {meal.servings}</li>
        </ul>
        <section className='meals'>
          {Array.isArray(imageURL.diets) && Array(imageURL.diets).map((diet, index) => {
            return <li key={index}>{diet[index]}</li>
          })}
        </section>
        {/* {console.log(imageURL.nutrition.nutrients)}
        <section>
          {Array.isArray(imageURL.nutrition.nutrients) && Array(imageURL.nutrition.nutrients).map((info,index) => {
            return <li key={index}>{info.name}</li>
          })}
        </section> */}
       
        <aside>
          <a href={meal.sourceUrl}>Go to Receipe</a>
          
        </aside>
        {<Addmeal mealinfo={user} />}
      </article>
      <div>
        {isHovered && shouldRender && <Extrainfo extrainfo={imageURL} />}
      </div>
    </main>
  )
}


export default Meal
