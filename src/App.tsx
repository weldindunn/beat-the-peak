import React, { useState } from 'react';
import './App.css';
import { ViewHub } from './components/viewHub';

function App() {  
  const [watts, setWatts] = useState<number>(0);
  const [wattsPerSec, setWattsPerSec] = useState<number>(0);

  const [linemen, setLinemen] = useState<number>(0);
  const [coalPlants, setCoalPlants] = useState<number>(0);

  let secondsPassed: number;
  let oldTimeStamp: number;
  let fps: number;

  //Starts the game loop
  window.onload = init;
  function init() {
    window.requestAnimationFrame(gameLoop);
  }

  //Runs about 60 times per second
  function gameLoop(timeStamp: number){
    secondsPassed = (timeStamp - oldTimeStamp) / 1000;
    oldTimeStamp = timeStamp;

    fps = Math.round(1 / secondsPassed);
    //console.log(fps);

    window.requestAnimationFrame(gameLoop);
  }

  function gimmeWatts(): void {
    setWattsPerSec(wattsPerSec + 1);
  }

  return (
    <div className="App">
      <ViewHub
        watts={watts}
        setWatts={setWatts}
        wattsPerSec={wattsPerSec}
        setWattsPerSec={setWattsPerSec}
        linemen={linemen}
        setLinemen={setLinemen}
        coalPlants={coalPlants}
        setCoalPlants={setCoalPlants}
      ></ViewHub>
      <div>
        <button onClick={gimmeWatts}>Increase WPS</button>
      </div>
    </div>
  );
}

export default App;
