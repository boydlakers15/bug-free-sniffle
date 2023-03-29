import React, { useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [show, setShow] = useState(false);
    return (

    <nav className="nav">
      <p className="section"><img className='img' src='https://img.freepik.com/free-vector/restaurant-logo_23-2147506959.jpg?w=360'></img><br/>Recipes</p>
      
      <main className={show ? 'space-toggle' : null}>
      <header className={`header ${show ? 'space-toggle' : null}`}>
        <div className='header-toggle' onClick={() => setShow(!show)}>
          <i className={`fas fa-bars ${show ? 'fa-solid fa-xmark' : null}`}></i>
        </div>
      </header>

      <aside className={`sidebar ${show ? 'show' : null}`}>
        <nav className='nav'>
          <div>
            <Link to='/' className='nav-logo'>
              <img className='imgLogo' src='https://lh3.googleusercontent.com/4J_jKyi_MjEp4_7z-MQJaWPMAOHljF3ScNrXKzAtuyt06aEVAbXVRASPraoz8-_c9y5A6uWDWiuAyRNn8cLsqvS-ZwSpcVVCVuZEYaqL' />
              <span className='nav-logo-name'>Homepage</span>
            </Link>

            <div className='nav-list'>
              <Link to='/dashboard' className='nav-link active'>
                <i className='fas fa-tachometer-alt nav-link-icon'></i>
                <span className='nav-link-name'>Dashboard</span>
              </Link>
              <Link to='/hotel' className='nav-link'>
                <i className='fas fa-hotel nav-link-icon'></i>
                <span className='nav-link-name'>Hotel</span>
              </Link>
              <Link to='/gallery' className='nav-link'>
                <i className='fas fa-image nav-link-icon'></i>
                <span className='nav-link-name'>Gallery</span>
              </Link>
              <Link to='/gallery' className='nav-link'>
                <i className='fas fa-dollar-sign nav-link-icon'></i>
                <span className='nav-link-name'>Transaction</span>
              </Link>
            </div>
          </div>

          <Link to='/logout' className='nav-link'>
            <i className='fas fa-sign-out nav-link-icon'></i>
            <span className='nav-link-name'>Logout</span>
          </Link>
        </nav>
      </aside>

      
    </main>
    </nav>
    )
    

}