import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { FaPlus } from 'react-icons/fa';
import './myEmptyMeals.css'

const myEmptyMeals = () => {
  return (
    <section className='alert alert1'>
<div className="alert alert-success" role="alert">
  <h4 className="alert-heading">No Meal Added</h4>
  <hr/>
  <p  className="mb-0">Please Add a Meal from the <strong> Create Meal Plan </strong></p>
  <p><FaPlus size={32}/></p>
</div>
    </section>
  )
}

export default myEmptyMeals