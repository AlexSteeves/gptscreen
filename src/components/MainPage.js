import React, { useState, useEffect } from 'react';
import NavBar from './NavBar'

function calculateOppositeColor(hexColor) {
    // Remove the "#" symbol if present
    hexColor = hexColor.replace("#", "");
  
    // Convert the hex color to RGB values
    const r = parseInt(hexColor.substr(0, 2), 16);
    const g = parseInt(hexColor.substr(2, 2), 16);
    const b = parseInt(hexColor.substr(4, 2), 16);
  
    // Calculate the opposite color
    const oppositeR = 255 - r;
    const oppositeG = 255 - g;
    const oppositeB = 255 - b;
  
    // Convert the opposite RGB values back to hex format
    const oppositeHexColor =
      "#" +
      oppositeR.toString(16).padStart(2, "0") +
      oppositeG.toString(16).padStart(2, "0") +
      oppositeB.toString(16).padStart(2, "0");
  
    return oppositeHexColor;
  }
  
  const inputHexColor = "#FF5733";
  const oppositeColor = calculateOppositeColor(inputHexColor);
  console.log("Opposite Color:", oppositeColor);
  

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function App() {
    const [currentColor, setCurrentColor] = useState('#FFFFFF');

    const handleColorChange = () => {
      const randomColor = getRandomColor();
      setCurrentColor(randomColor);
    };
  
    useEffect(() => {
      const intervalId = setInterval(handleColorChange, 2500); // Change color every second
  
      return () => {
        clearInterval(intervalId); // Clean up the interval when component unmounts
      };
    }, []);
  

  return (

    
      <div
      class="w-screen h-screen justify-center flex overscroll-contain"
        style={{
         
          backgroundColor: currentColor,
          
        }}
      >


     
        
        <NavBar color={calculateOppositeColor(currentColor)}/>
       
      </div>
    
  
  );
}

export default App;
