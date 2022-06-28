import React, { useState } from 'react';
import './App.css';
import { ViewHub } from './components/viewHub';
import { useFrameLoop } from './components/frameLoop';

function App() {  

  //The number of watts and watts generated per second
  const [watts, setWatts] = useState<number>(0);
  const [wattsPerSec, setWattsPerSec] = useState<number>(0);

  //The number of each type of generator
  const [linemen, setLinemen] = useState<number>(0); 
  const [coalPlants, setCoalPlants] = useState<number>(0);

  const [time, setTime] = useState(0);
  const [deltaTime, setDeltaTime] = useState(0);

  const [newWatts, setNewWatts] = useState(-1);
  useFrameLoop((time: number, deltaTime: number) => {

    if (time > newWatts) {
      setNewWatts(time + 1000);

      setWatts(watts + wattsPerSec);
    }
    setTime(time);
    setDeltaTime(deltaTime);
  });

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
    </div>
  );
}

export default App;
