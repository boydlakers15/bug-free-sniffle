import React from 'react';
import { Form } from 'react-router-dom';
import Navbar from './Navbar';
import Data from './Data.js';

console.log(Data);

function About() {
    const recipeTitle = Data.data[0].attributes.title; 
    const recipeTime = Data.data[0].attributes.time;
    const recipeLevel = Data.data[0].attributes.level;
    const recipe = Data.data[0].attributes.ingredients[1]; 

    return (
        <div>
            <Navbar/>
            <div className="images-container section">
                <div className="image-container">
                    <img src="https://www.allrecipes.com/thmb/WLHsZm_B4rdxpmAMFrIbmCSYW08=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/21014-Good-old-Fashioned-Pancakes-mfs_002-0e249c95678f446291ebc9408ae64c05.jpg" alt="Your image description"/>
                   
                    
                </div>
                <div className="image-container">
                    <img src="your-image-url.jpg" alt="Your image description"/>
                </div>
            </div>
            <div className="images-container section">
                <div className="image-container">
                    <img src="your-image-url.jpg" alt="Your image description"/>
                </div>
                <div className="image-container">
                    <img src="your-image-url.jpg" alt="Your image description"/>
                </div>
            </div>
            <div className="images-container section">
                <div className="image-container">
                    <img src="your-image-url.jpg" alt="Your image description"/>
                </div>
                <div className="image-container">
                    <img src="your-image-url.jpg" alt="Your image description"/>
                </div>
            </div>
        </div>
    );
}

export default About;