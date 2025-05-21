import { useState } from 'react'

import './App.css'

function App() {
  const advicegenerator = () => {
    fetch('https://api.adviceslip.com/advice')
      .then((response) => response.json())
      .then((data) => {
        const advice = data.slip.advice;
        document.querySelector('.advice').innerHTML = `<p>${advice}</p>`;
        console.log(advice);
      })
      .catch((error) => {
        console.error('Error fetching advice:', error);
      });
  }

  return (
    <>
    <h1 className="advice-generatorh1">Welcome to advice generator.</h1>
    <h2 className="advice-generatorh2">Click to generate random advice</h2>
    <div className="advice">
    <p></p>
    </div>
    <button className="advicegenerator" onClick={advicegenerator}>Generate Advice Now</button>
    </>
  )
}

export default App
