import React from 'react';
import { Form } from 'react-router-dom';
import Navbar from './Navbar';
import Data from './Data.js';

console.log(Data);

function About() {
    const recipeTitle = Data.data[[0]].attributes.title; 
    const recipeTime = Data.data[0].attributes.time;
    const recipeLevel = Data.data[0].attributes.level;
    const recipe = Data.data[0].attributes.ingredients[1]; 

    return (
        <div>
            <Navbar/>
            <div className="images-container section">
                <div className="image-container">
                    <img src="https://www.allrecipes.com/thmb/WLHsZm_B4rdxpmAMFrIbmCSYW08=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/21014-Good-old-Fashioned-Pancakes-mfs_002-0e249c95678f446291ebc9408ae64c05.jpg" alt="Your image description"/>
                   <center><h2>{Data.data[0].attributes.title}</h2></center>
                    <p>Time: {Data.data[0].attributes.time}</p>
                    <p>Difficulty: {Data.data[0].attributes.level} </p>
                    <p>Ingredients: <ol>
                        <li>{Data.data[0].attributes.ingredients[1]}</li>
                        <li>{Data.data[0].attributes.ingredients[2]}</li>
                        <li>{Data.data[0].attributes.ingredients[3]}</li>
                        <li>{Data.data[0].attributes.ingredients[4]}</li>
                        <li>{Data.data[0].attributes.ingredients[5]}</li>
                        <li>{Data.data[0].attributes.ingredients[6]}</li>
                    </ol></p>
                
                </div>
                <div className="image-container">
                    <img src='https://www.allrecipes.com/thmb/xy_G3p4XDkuKDG4LDAivUh-hWLI=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/tiramisu-ii-ca809422e2244ba0a023b07b3112d4fd.jpeg' alt="Tiramisu"/>
                    <center><h2>{Data.data[1].attributes.title}</h2></center>
                    <p>Time: {Data.data[1].attributes.time}</p>
                    <p>Difficulty: {Data.data[1].attributes.level} </p> 
                    <p>Ingredients: <ol>
                        <li>{Data.data[1].attributes.ingredients[1]}</li>
                        <li>{Data.data[1].attributes.ingredients[2]}</li>
                        <li>{Data.data[1].attributes.ingredients[3]}</li>
                        <li>{Data.data[1].attributes.ingredients[4]}</li>
                        <li>{Data.data[1].attributes.ingredients[5]}</li>
                        <li>{Data.data[1].attributes.ingredients[6]}</li>
                        <li>{Data.data[1].attributes.ingredients[7]}</li>
                        <li>{Data.data[1].attributes.ingredients[8]}</li>
                        <li>{Data.data[1].attributes.ingredients[9]}</li>
                    </ol></p>
                
                </div>
            </div>
            <div className="images-container section">
                <div className="image-container">
                    <img src="your-image-url.jpg" alt="Your image description"/>
                    <h2>{Data.data[2].attributes.title}</h2>
                    <p>Time: {Data.data[2].attributes.time}</p>
                    <p>Difficulty: {Data.data[2].attributes.level} </p>
                
                
                </div>
                <div className="image-container">
                    <img src="your-image-url.jpg" alt="Your image description"/>
                    <h2>{Data.data[3].attributes.title}</h2>
                    <p>Time: {Data.data[3].attributes.time}</p>
                    <p>Difficulty: {Data.data[3].attributes.level} </p>
                
                </div>
            </div>
            <div className="images-container section">
                <div className="image-container">
                    <img src="your-image-url.jpg" alt="Your image description"/>
                    <h2>{Data.data[4].attributes.title}</h2>
                    <p>Time: {Data.data[4].attributes.time}</p>
                    <p>Difficulty: {Data.data[4].attributes.level} </p>
                
                
                </div>
                <div className="image-container">
                    <img src="your-image-url.jpg" alt="Your image description"/>
                    <h2>{Data.data[5].attributes.title}</h2>
                    <p>Time: {Data.data[5].attributes.time}</p>
                    <p>Difficulty: {Data.data[5].attributes.level} </p>
                
                
                </div>
                
            </div>
            <div className="images-container section">
                <div className="image-container">
                    <img src="your-image-url.jpg" alt="Your image description"/>
                    <h2>{Data.data[6].attributes.title}</h2>
                    <p>Time: {Data.data[6].attributes.time}</p>
                    <p>Difficulty: {Data.data[6].attributes.level} </p>
                
                
                </div>
                <div className="image-container">
                    <img src="your-image-url.jpg" alt="Your image description"/>
                    <h2>{Data.data[7].attributes.title}</h2>
                    <p>Time: {Data.data[7].attributes.time}</p>
                    <p>Difficulty: {Data.data[7].attributes.level} </p>

                
                </div>
                
            </div>
        </div>
    );
}

export default About;