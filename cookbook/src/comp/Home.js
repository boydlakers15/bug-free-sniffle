import React, { useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
// import Navbar from './Navbar';

export default function Home() {
  const [show, setShow] = useState(false);
    return (
    <nav className="nav">
      <p className="section"><img className='img' src='https://img.freepik.com/free-vector/restaurant-logo_23-2147506959.jpg?w=360'></img><br/></p>
      <p>On this webpage you will be able to find some great Recipes! just start you way through the navigation on the top!</p>
      
      <main className={show ? 'space-toggle' : null}>
      <header className={`header ${show ? 'space-toggle' : null}`}>
        <div className='header-toggle' onClick={() => setShow(!show)}>
          <i className={`fas fa-bars ${show ? 'fa-solid fa-xmark' : null}`}></i>
        </div>
      </header>

      <aside className={`sidebar ${show ? 'show' : null}`}>
        <nav className='nav'>
          <div>
           
            <Link to='/Home' className='nav-logo'>
              <img className='imgLogo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Whole_Foods_Market_201x_logo.svg/2048px-Whole_Foods_Market_201x_logo.svg.png' />
              <span className='nav-logo-name'>Homepage</span>
            </Link>

            <div className='nav-list'>
            <Link to='/Recipes' className='nav-link active'>
              <i class="fa fa-list-alt" aria-hidden="true"></i>
                <span className='nav-link-name'>Recipes</span>
              </Link>
              <Link to='/Contact' className='nav-link'>
              <i class="fa fa-envelope" aria-hidden="true"></i>
                <span className='nav-link-name'>Contact</span>
              </Link>
              <Link to='/About' className='nav-link'>
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
// import React from 'react';

// function Home() {
//   return (
//     <div>
//       <h1>Home Page</h1>
//       <p>Welcome to the home page!</p>
//     </div>
//   );
// }

// export default Home;