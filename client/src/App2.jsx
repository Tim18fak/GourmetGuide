import React from 'react'
import './App2.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Review = () => {
  return(
    <section className='Review__option'>
      <main className='testimonies'>
       <h2>Testimonies</h2>
       <div>
       <p> The Grocery List breaks everything down into categories which helps to make shopping fast and easy. It's a huge time saver and I cannot say enough good things about it.</p>
        <p >
          <img src="https://media.istockphoto.com/id/1338134336/photo/headshot-portrait-african-30s-man-smile-look-at-camera.webp?b=1&s=170667a&w=0&k=20&c=j-oMdWCMLx5rIx-_W33o3q3aW9CiAWEvv9XrJQ3fTMU=" alt="" />
        <span>__<strong>Dare</strong></span>
        </p>
       </div>
        <div>
       <p> The Grocery List breaks everything down into categories which helps to make shopping fast and easy. It's a huge time saver and I cannot say enough good things about it.</p>
       
       <p>
       <img src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?b=1&s=170667a&w=0&k=20&c=YQ_j83pg9fB-HWOd1Qur3_kBmG_ot_hZty8pvoFkr6A=" alt="" />
       <span>__<strong>Ava</strong></span>
        </p>
       </div>
       <div>
       <p> The Grocery List breaks everything down into categories which helps to make shopping fast and easy. It's a huge time saver and I cannot say enough good things about it.</p>
       
       <p>
       <img src="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=ahypUC_KTc95VOsBkzLFZiCQ0VJwewfrSV43BOrLETM=" alt="" />
       <span>__<strong>Dare</strong></span>
        </p>
       </div>
      </main>
      <Footer />
    </section>
  );
}
const Footer = () => {
  return(
    <footer className='footer'>
      <main className='footer__info'>
        <div className='footer___info-option'>
          <h2>Gourmet<span style={{
            fontSize : '1.5rem',
            fontWeight: 'bold',

          }}>Guide</span></h2>
          <p className='footer__title-theme'>Unleash Your InnerChef<br/> And Eat Healthy</p>
          <div>

          </div>
        </div>
        <div className='footer___info-option'>
          <h2>Our Clients</h2>
          <ul>
            <li>Vegetarian & Vegan</li>
            <li>Health Enthusiasts</li>
            <li>Busy Professionals</li>
            <li>Allergy <p>Dietary Restriction Management</p></li>
          </ul>
        </div>
        <div className='footer___info-option'>
          <h2>Company</h2>
          <ul>
          <Link to='./'><li>Home</li></Link>
          <Link to='./feature'><li>Features</li></Link>
          <Link to='./about'><li><li>About</li></li></Link>
          <Link to='./faq'><li>FAQ</li></Link>
          </ul>
        </div>
        <div className='footer___info-option'>
          <h2>Further information</h2>
          <ul>
            <li>Terms&Conditions</li>
          </ul>
        </div>
        <div className='footer___info-option option5'>
          <h2>Follow Us</h2>
          <ul>
            <li><FontAwesomeIcon icon={faFacebook} />Facebook</li>
            <li><FontAwesomeIcon icon={faTwitter} />Twitter</li>
            <li><FontAwesomeIcon icon={faInstagram} />Instagram</li>
          </ul>
        </div>
      </main>
      <aside>
      <i className="fa fa-copyright" aria-hidden="true">
      <p className='copyright__init'>@Copyright 2002-2023, GourmetGuide Inc.</p>
      <p className='copyright__declaration'>The <strong>GourmetGuide</strong> name and logo is a trademark of GourmetGuide Inc. All Rights Reserved. <span>Terms of Use</span> | <span>Privacy Policy</span> | <span>Sitemap</span></p></i>
      </aside>
    </footer>
  );
}
const App2 = () => {
  return (
    <section>
        <Review />
    </section>
  )
}

export default App2