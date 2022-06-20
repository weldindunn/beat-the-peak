import React, { useState } from 'react';
import './App.css';
import { ViewHub } from './components/viewHub';

function App() {
  const [watts, setWatts] = useState<number>(0);

  return (
    <div className="App">
      <ViewHub watts={watts} setWatts={setWatts}></ViewHub>
    </div>
  );
}

export default App;
