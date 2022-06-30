import React, { useState } from 'react';
import './App.css';
import { ViewHub } from './components/viewHub';
import { useFrameLoop } from './components/utilities/frameLoop';
import { Upgrade } from "./interfaces/upgrade";
import upgrades from "./data/upgrades.json";

const UPGRADES = upgrades.map((upgrade): Upgrade => ({...upgrade}));

function App() {  

  //The number of watts and watts generated per second
  const [watts, setWatts] = useState<number>(5000);
  const [wattsPerSec, setWattsPerSec] = useState<number>(0);

  //The number of each type of generator
  const [linemen, setLinemen] = useState<number>(0); 
  const [coalPlants, setCoalPlants] = useState<number>(0);
  const [gasPlants, setGasPlants] = useState<number>(0);
  const [solarFarms, setSolarFarms] = useState<number>(0);
  const [oilWells, setOilWells] = useState<number>(0);
  const [windTurbines, setWindTurbines] = useState<number>(0);
  const [biomassGassifiers, setBiomassGassifiers] = useState<number>(0);
  const [hydroPlants, setHydroPlants] = useState<number>(0);
  const [nuclearPlants, setNuclearPlants] = useState<number>(0);

  //Array of upgrades
  const [upgrades, setUpgrades] = useState<Upgrade[]>(UPGRADES);

  /* ==========
     Game Loop!
     ========== */
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

  /* ===========
     Display Hub
     =========== */
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
        gasPlants={gasPlants}
        setGasPlants={setGasPlants}
        solarFarms={solarFarms}
        setSolarFarms={setSolarFarms}
        oilWells={oilWells}
        setOilWells={setOilWells}
        windTurbines={windTurbines}
        setWindTurbines={setWindTurbines}
        biomassGassifiers={biomassGassifiers}
        setBiomassGassifiers={setBiomassGassifiers}
        hydroPlants={hydroPlants}
        setHydroPlants={setHydroPlants}
        nuclearPlants={nuclearPlants}
        setNuclearPlants={setNuclearPlants}

        upgrades={upgrades}
        setUpgrades={setUpgrades}
      ></ViewHub>
    </div>
  );
}

export default App;
