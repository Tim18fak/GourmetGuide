import React from 'react'
import './faq.css'
const Faq = () => {
  return (
    <div>
        <h1 className='faq'>Frequently Asked Questions <span>(FAQ)</span></h1>
        <div className='questions__answers'>
          <figure>
            <img src="" alt="" />
          </figure>
         <main > <h1>What is Gourmet Guide?</h1>
          <p>Gourmet Guide is a user-friendly application designed to simplify meal planning and preparation.</p></main>
        </div>
        <div className='questions__answers'>
        <figure>
            <img src="" alt="" />
          </figure>
         <main>
         <h1>How does GourmetGuide work?</h1>
          <p>GourmetGuide allows you to get meal recommendation based on your dietary restrictions  and preferences.</p>
         </main>
        </div>
        <div className='questions__answers'>
          <main>
            <h1>How can I add my own recipes to GourmetGuide?</h1>
            <p>No you can't, We haven't added that feature to our web application,but in due time we will add that feature soonest</p>
          </main>

        </div>
        <div className='questions__answers'>
          <figure>
            <img src="" alt="" />
          </figure>
          <main><h1>Are nutritional details available for the recipes?</h1>
          <p>Yes, <span>GourmetGuide</span> provides nutritional information for each recipe, including calories, macronutrients, and micronutrients. </p></main>
        </div>
        <div className='questions__answers1'>
          <figure>
            <img src="" alt=""/>
          </figure>
        <main>
        <h1>I have dietary restrictions (e.g., gluten-free, vegetarian).<br/> Can GourmetGuide accommodate these preferences?</h1>
          <p>Absolutely! GourmetGuide allows you to specify dietary restrictions, allergies, and preferences when creating your meal plans. We'll tailor the recommendations to meet your needs.</p>
        </main>
        </div>
        <div className='sample'></div>
    </div>
  )
}

export default Faq