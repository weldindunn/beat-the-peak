import React, { useState } from 'react';
import './App.css';
import { ViewHub } from './components/viewHub';

function App() {
  const [watts, setWatts] = useState<number>(0);
  const [wattsPerSec, setWattsPerSec] = useState<number>(0);

  return (
    <div className="App">
      <ViewHub watts={watts} wattsPerSec={wattsPerSec} setWatts={setWatts} setWattsPerSec={setWattsPerSec}></ViewHub>
    </div>
  );
}

export default App;
