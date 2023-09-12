import React from 'react'
import './about.css'
const About = () => {
  return (
    <div>
      <h1 style={{
        textAlign: 'center',
        fontSize: '',
        color: 'green',
        fontWeight: 'bolder'

      }}>About Us</h1>
      <main className='about__info'>
      <figure>
        <img src="" width={300} alt="" />
      </figure>
      <p>
Welcome to <span>Gourmet</span><span>Guide</span>!
At GourmetGuide, we are passionate about helping you make meal planning and preparation a breeze. We understand that a healthy and balanced diet is essential for a happy and active life, but we also know that planning meals can be a daunting task. That's where we come in.
</p>
      </main>
      <h1 style={{
        textAlign: 'center',
        fontSize: '',
        color: 'blue',
        fontWeight: 'bolder'

      }}>Our Mission</h1>
       <main className='our__mission'>
       <figure>
        <img src="" width={300} alt="" />
      </figure>
       <p>Our mission is to simplify your meal planning journey. We want to empower you to take control of your nutrition and make eating well a part of your everyday life. Whether you're a busy professional, a parent juggling family responsibilities, or simply someone looking to eat healthier, we've got you covered.</p>
       </main>
    </div>
  )
}

export default About