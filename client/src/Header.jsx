import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  
    const handleClick = () => {
      // Call the callback function to update the state
    };
    return(
      <header className='header__class-list'>
      <main className='header__name'>
        <h1 style={{
          color: 'purple'
        }}>Gourmet<span style={{
          color: 'green',
          fontSize: 'bolder'
        }}>Guide</span></h1>
      </main>
      <aside className='header__nav-list'>
      <div className='header__class-list-sub'>
      <Link to='./signin'><p>
        JOIN US
      </p></Link>
      </div>
      <div>
      <ul className='header__class-list-subParent'>
       <Link to='./'><li>Home</li></Link>
       <Link to='./feature'><li>Features</li></Link>
       <Link to='./about'><li><li>About</li></li></Link>
       <Link to='./faq'><li>FAQ</li></Link>
        </ul>
      </div>
      </aside>
      </header>
  
    );
  }

  export default Header