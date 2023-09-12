import React from 'react'
import { useState,useEffect } from 'react'
import Cookies from 'universal-cookie'
import axios from 'axios'
import { FaTrash } from 'react-icons/fa';
import './my_receipe.css'
import MyEmptyMeals from './myEmptyMeals';



const cookie = new Cookies()

const nomeal = () => {
  return(
    <section>
      hhhhhh
    </section>
  );
}

const My_receipe = () => {
  const [fetchmeal,setfetchmeal] = useState([])
  const[Nomeal,setNomeal] = useState(true)

  const username = cookie.get('username')

  const fetchMeal = async() => {
    const GetUrl = `http://100.25.150.44:5000/mealplan/getmeal`
	  try{
    const response = await axios.get(`${GetUrl}?username=${username}`)
    setfetchmeal(response.data)
    console.log(fetchmeal)
  } catch(error){
	  console.log('error',error)
  }
  }
  useEffect(() => {
    fetchMeal()
  },[])
  if(fetchmeal.length == 0 ){
    console.log('empty')
  }
  const DeleteMealList = async(mealId) => {
  
    const DeleteUrl = 'http://100.25.150.44:5000/mealplan/deleteMeal'
    try{
	  const response = await axios.delete(`${DeleteUrl}/${mealId}?username=${username}`)
    console.log(response.data)
    fetchMeal()} catch(error){
	    console.error('error',error)
    }
  };
  if(fetchmeal.length == 0) return <MyEmptyMeals />
  return (
    <section>
      <div className='my_receipes'>
      
      {fetchmeal && (
        <ul className='my__receipes-option'>
          {fetchmeal.map((data, index) => {
            return <section key={index}>
             <aside onMouseEnter={() => {}} onMouseLeave={() => {}} className='mealinfo '>
              <img src={data.MealImageUrl
} alt="" />
<hr/>
<h3>{data.mealTitle}</h3>
      <p>ReadyInMinutes:  {data.Preparation_Time
} minutes</p>
      <p>Healthscore:{data.Healthscore
}</p>
      <p>Number per serving: {data.Serving}</p>
      <a href={data.sourceUrl}>Get Receipe</a>
      <button onClick={() => DeleteMealList(data._id)}> <FaTrash /> Remove</button>
      </aside>
     
            </section>
          })}
        </ul>
      )}
    </div>
    </section>
  )
}

export default My_receipe
