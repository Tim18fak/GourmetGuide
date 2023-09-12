import React from 'react'
import { useState, useEffect } from 'react'
import Dietaryextrainfo from './dietaryextrainfo'
/* import './createmeal.css' */
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
    const { data } = await axios.post(`${GetUrl}?username=${username}`, mealdataTOserver)
    console.log(data)
    console.log(mealinfo)
    console.log('hell')
    console.log(servings)
    setstate((prevstate) => !state)
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


const Dietaryinfo = ({cuisine}) => {

  const [extrainfo,setextrainfo] = useState('')
  const [shouldRender, setShouldRender] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    fetch(`https://api.spoonacular.com/recipes/${cuisine.id}/information?apiKey=c7d48a9f326247b0ac65a17a0cc7b023&includeNutrition=true&number=4`)
    .then((response) => response.json())
    .then((data) => {
      setextrainfo(data)
      console.log(data)
    })
    .catch(() => {
      console.log('error')
    })
  },[cuisine.id])

  //////////////////////////
  useEffect(() => {
    const delay = 2000; // 2 seconds in milliseconds
  
    const timerId = setTimeout(() => {
      setShouldRender(true);
    }, delay);
  
    return () => {
      clearTimeout(timerId);
    };
  }, []);
  //////////////////////
  const handleMouseEnter = () => {
    setIsHovered(true);
    console.log('enter')
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    console.log('leave')
  };
  //////////////////////

  const mealObject = async () => {

  }
  return (
    <div>
      <aside onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='cuisineinfo'>
      <p>ReadyInMinutes:  {extrainfo.readyInMinutes} minutes</p>
      <p>Healthscore:{extrainfo.healthScore}</p>
      <p>Number per serving: {extrainfo.servings}</p>
      <a href={extrainfo.spoonacularSourceUrl
}>Get Receipe</a>
      </aside>
      {<Addmeal mealinfo={extrainfo} />}
     <div className='extraInfo__Dish'>
        {isHovered && shouldRender && <Dietaryextrainfo extrainfo={extrainfo} />}
      </div>
      
      
    </div>
  )
}


export default Dietaryinfo