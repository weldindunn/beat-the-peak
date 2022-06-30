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

  /* ============================
     Production of each generator
     ============================ */
  const linemenBaseProduction = 1;
  const [linemenProduction, setLinemenProduction] = useState<number>(linemenBaseProduction);

  const coalBaseProduction = 10;
  const [coalProduction, setCoalProduction] = useState<number>(coalBaseProduction);

  const gasBaseProduction = 80;
  const [gasProduction, setGasProduction] = useState<number>(gasBaseProduction);

  const solarBaseProduction = 470;
  const [solarProduction, setSolarProduction] = useState<number>(solarBaseProduction);

  const oilBaseProduction = 2600;
  const [oilProduction, setOilProduction] = useState<number>(oilBaseProduction);

  const windBaseProduction = 14000;
  const [windProduction, setWindProduction] = useState<number>(windBaseProduction);

  const biomassBaseProduction = 78000;
  const [biomassProduction, setBiomassProduction] = useState<number>(biomassBaseProduction);

  const hydroBaseProduction = 440000;
  const [hydroProduction, setHydroProduction] = useState<number>(hydroBaseProduction);

  const nuclearBaseProduction = 2600000;
  const [nuclearProduction, setNuclearProduction] = useState<number>(nuclearBaseProduction);


  /* ======================
     Cost of each generator
     ====================== */
  const linemenBaseCost = 15;
  const [linemenCost, setLinemenCost] = useState<number>((linemenBaseCost * Math.pow(1.15, linemen)));

  const coalBaseCost = 250;
  const [coalCost, setCoalCost] = useState<number>((coalBaseCost * Math.pow(1.15, coalPlants)));

  const gasBaseCost = 2600;
  const [gasCost, setGasCost] = useState<number>((gasBaseCost * Math.pow(1.15, gasPlants)));

  const solarBaseCost = 28000;
  const [solarCost, setSolarCost] = useState<number>((solarBaseCost * Math.pow(1.15, solarFarms)));

  const oilBaseCost = 300000;
  const [oilCost, setOilCost] = useState<number>((oilBaseCost * Math.pow(1.15, oilWells)));

  const windBaseCost = 3200000;
  const [windCost, setWindCost] = useState<number>((windBaseCost * Math.pow(1.15, windTurbines)));

  const biomassBaseCost = 46000000;
  const [biomassCost, setBiomassCost] = useState<number>((biomassBaseCost * Math.pow(1.15, biomassGassifiers)));

  const hydroBaseCost = 759000000;
  const [hydroCost, setHydroCost] = useState<number>((hydroBaseCost * Math.pow(1.15, hydroPlants)));

  const nuclearBaseCost = 12000000000;
  const [nuclearCost, setNuclearCost] = useState<number>((nuclearBaseCost * Math.pow(1.15, nuclearPlants)));



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

        linemenBaseProduction={linemenBaseProduction}
        linemenProduction={linemenProduction}
        setLinemenProduction={setLinemenProduction}
        coalBaseProduction={coalBaseProduction}
        coalProduction={coalProduction}
        setCoalProduction={setCoalProduction}
        gasBaseProduction={gasBaseProduction}
        gasProduction={gasProduction}
        setGasProduction={setGasProduction}
        solarBaseProduction={solarBaseProduction}
        solarProduction={solarProduction}
        setSolarProduction={setSolarProduction}
        oilBaseProduction={oilBaseProduction}
        oilProduction={oilProduction}
        setOilProduction={setOilProduction}
        windBaseProduction={windBaseProduction}
        windProduction={windProduction}
        setWindProduction={setWindProduction}
        biomassBaseProduction={biomassBaseProduction}
        biomassProduction={biomassProduction}
        setBiomassProduction={setBiomassProduction}
        hydroBaseProduction={hydroBaseProduction}
        hydroProduction={hydroProduction}
        setHydroProduction={setHydroProduction}
        nuclearBaseProduction={nuclearBaseProduction}
        nuclearProduction={nuclearProduction}
        setNuclearProduction={setNuclearProduction}
    
        linemenBaseCost={linemenBaseCost}
        linemenCost={linemenCost}
        setLinemenCost={setLinemenCost}
        coalBaseCost={coalBaseCost}
        coalCost={coalCost}
        setCoalCost={setCoalCost}
        gasBaseCost={gasBaseCost}
        gasCost={gasCost}
        setGasCost={setGasCost}
        solarBaseCost={solarBaseCost}
        solarCost={solarCost}
        setSolarCost={setSolarCost}
        oilBaseCost={oilBaseCost}
        oilCost={oilCost}
        setOilCost={setOilCost}
        windBaseCost={windBaseCost}
        windCost={windCost}
        setWindCost={setWindCost}
        biomassBaseCost={biomassBaseCost}
        biomassCost={biomassCost}
        setBiomassCost={setBiomassCost}
        hydroBaseCost={hydroBaseCost}
        hydroCost={hydroCost}
        setHydroCost={setHydroCost}
        nuclearBaseCost={nuclearBaseCost}
        nuclearCost={nuclearCost}
        setNuclearCost={setNuclearCost}

        upgrades={upgrades}
        setUpgrades={setUpgrades}
      ></ViewHub>
    </div>
  );
}

export default App;
