import React from 'react';
import Navbar from './Navbar';

function About() {
  return (
    <div>
      <Navbar/>
        <div class="images-container section">
            <div  class="image-container">
                <img src="your-image-url.jpg" alt="Your image description"/>
            </div>
            
            <div  class="image-container">
                <img src="your-image-url.jpg" alt="Your image description"/>
            </div>
        </div>
        <div class="images-container section">
            <div  class="image-container">
                <img src="your-image-url.jpg" alt="Your image description"/>
            </div>
            
            <div  class="image-container">
                <img src="your-image-url.jpg" alt="Your image description"/>
            </div>
        </div>
        <div class="images-container section">
            <div  class="image-container">
                <img src="your-image-url.jpg" alt="Your image description"/>
            </div>
            
            <div  class="image-container">
                <img src="your-image-url.jpg" alt="Your image description"/>
            </div>
        </div>

    </div>
  );
}

export default About;
