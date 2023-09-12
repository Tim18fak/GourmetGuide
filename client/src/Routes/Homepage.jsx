import React, { useState } from 'react'
import App2 from '../App2'
import '../App1.css'
import { Link } from 'react-router-dom'

  const Jumbostron = () => {
    return(
      <section>
        <div className="jumbotron jumbotron-fluid">
        <img src='' width={200} />
          <div className="container">
            <h1 className='jumbostron__title' style={{
              color: 'purple'
            }}>Unleash Your Inner Chef<span>with <strong>Gourmet Guide</strong></span></h1>
           {/*  <img src='https://img.freepik.com/free-photo/top-view-arrangement-vegetables_23-2148519076.jpg?size=626&ext=jpg&ga=GA1.1.2019912161.1693665243&semt=ais'className='jumbostron__img2' /> */}
          </div>
        </div>
      </section>
    );
  }
  const OurOffer = () => {
    return(
      <section className='Offer__list'>
        <h2 className='Our__services'>Our <span style={{
          color: 'green',
  
        }}>Services</span>
        <img className='Our__services-underline' src='https://www.healthymealplans.com/static/images/landing-2020/underline.svg'/></h2>
        
        <main className='Our__services-option'>
          <div className='Our__services-image-option'>
            
           <aside className='Our__services-option__image'>
           
           <img className='Our__services-option__image3' src='https://img.freepik.com/free-photo/tagliatelle-pasta-with-tomatoes-chicken_2829-18003.jpg?size=626&ext=jpg&ga=GA1.1.2019912161.1693665243&semt=ais'/>
  
           </aside>
          </div>
          <div className='Our__services-option__text'>
            <h2 className='service__option1'>
            Browse<span> Healthy Recipes</span>
           
            </h2>
            <p>
            We've got hundreds of delicious recipes for every taste and dietary preference. Browse them all using create meal plan section and find the right meal  for you.
            <Link to='./signin'>
              <button>Discover Now</button>
            </Link>
            </p>
            <img className='pointer__arrow' src='https://www.healthymealplans.com/static/images/landing-2020/arrow-left.svg'/>
          </div>
         
        </main>
       
        <main className='Our__services-option'>
        
          <div>
            <img src='https://img.freepik.com/free-vector/eco-shopping-concept-illustration_114360-6026.jpg?size=626&ext=jpg&ga=GA1.1.2019912161.1693665243&semt=ais'/>
          </div>
          <div className='Our__services-option__text option__text2'>
            <h2 className='service__option'>
            Create <span>a
            Grocery List</span>
            </h2>
            <p>
            When it's time to hit the supermarket, click Create Grocery List to generate a list of ingredients you'll need to get cooking. You can set the number of servings, add any extras, and check items off as you shop.
            <Link to='./signin'>
              <button>Try Now</button>
            </Link>
            </p>
          </div>
        </main>
        <Link to='./signin'>
        <h1 className='service__option_join'>Get <span>Started</span></h1>
        </Link>
        <App2 />
      </section>
    );
  }


const Homepage = () => {
  return (
    <div>
        <Jumbostron />
        <OurOffer />
    </div>
  )
}

export default Homepage