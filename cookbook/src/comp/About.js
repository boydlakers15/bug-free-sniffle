import React from 'react';
import Navbar from './Navbar';
import '../index.css';


function About() {
  return (
    <div style={{paddingLeft: "300px"}}>
      <Navbar/>
        <div  className='row'>
          <div  className='column'>
            <div className='card'> 
              <img src='https://www.w3schools.com/w3images/team1.jpg'/>
              <div class="container">
                <h2>Jane Doe</h2>
                <p>Some Text tht descripes me</p>
                <p>JaneD@example.com</p>
                <p><button class="button">Contact</button></p>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='column'>
            <div className='card'> 
              <img src='https://www.w3schools.com/w3images/team1.jpg'/>
              <div class="container">
                <h2>Jane Doe</h2>
                <p>Some Text tht descripes me</p>
                <p>JaneD@example.com</p>
                <p><button class="button">Contact</button></p>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='column'>
            <div className='card'> 
              <img src='https://www.w3schools.com/w3images/team1.jpg'/>
              <div class="container">
                <h2>Jane Doe</h2>
                <p>Some Text tht descripes me</p>
                <p>JaneD@example.com</p>
                <p><button class="button">Contact</button></p>
              </div>
            </div>
          </div>
        </div>
    </div>
    
  );
}

export default About;
// import React from 'react';

// function About() {
//   return (
//     <div>
//       <h1>About Page</h1>
//       <p>Welcome to the home page!</p>
//     </div>
//   );
// }

// export default About;