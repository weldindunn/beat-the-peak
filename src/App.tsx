import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ViewHub } from './components/viewHub';
import { useFrameLoop } from './components/utilities/frameLoop';
import { Upgrade } from "./interfaces/upgrade";
import upgrades from "./data/upgrades.json";

const UPGRADES = upgrades.map((upgrade): Upgrade => ({...upgrade}));

function App() {  

  //Loads up local storage when page is loaded
  window.onload = function() {
    load();
  }

  //The number of watts and watts generated per second
  const [watts, setWatts] = useState<number>(0);
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
  const clickBaseProduction = 1;
  const [clickProductionBonus, setClickProductionBonus] = useState<number>(1);
  const [clickPower, setClickPower] = useState<number>(clickBaseProduction * clickProductionBonus);
  
  const linemenBaseProduction = 1;
  const [linemenProductionBonus, setLinemenProductionBonus] = useState<number>(1);
  const [linemenProduction, setLinemenProduction] = useState<number>(linemenBaseProduction * linemenProductionBonus * linemen);

  const coalBaseProduction = 10;
  const [coalProductionBonus, setCoalProductionBonus] = useState<number>(1);
  const [coalProduction, setCoalProduction] = useState<number>(coalBaseProduction * coalProductionBonus * coalPlants);

  const gasBaseProduction = 80;
  const [gasProductionBonus, setGasProductionBonus] = useState<number>(1);
  const [gasProduction, setGasProduction] = useState<number>(gasBaseProduction * gasProductionBonus * gasPlants);

  const solarBaseProduction = 470;
  const [solarProductionBonus, setSolarProductionBonus] = useState<number>(1);
  const [solarProduction, setSolarProduction] = useState<number>(solarBaseProduction * solarProductionBonus * solarFarms);

  const oilBaseProduction = 2600;
  const [oilProductionBonus, setOilProductionBonus] = useState<number>(1);
  const [oilProduction, setOilProduction] = useState<number>(oilBaseProduction * oilProductionBonus * oilWells);

  const windBaseProduction = 14000;
  const [windProductionBonus, setWindProductionBonus] = useState<number>(1);
  const [windProduction, setWindProduction] = useState<number>(windBaseProduction * windProductionBonus * windTurbines);

  const biomassBaseProduction = 78000;
  const [biomassProductionBonus, setBiomassProductionBonus] = useState<number>(1);
  const [biomassProduction, setBiomassProduction] = useState<number>(biomassBaseProduction * biomassProductionBonus * biomassGassifiers);

  const hydroBaseProduction = 440000;
  const [hydroProductionBonus, setHydroProductionBonus] = useState<number>(1);
  const [hydroProduction, setHydroProduction] = useState<number>(hydroBaseProduction * hydroProductionBonus * hydroPlants);

  const nuclearBaseProduction = 2600000;
  const [nuclearProductionBonus, setNuclearProductionBonus] = useState<number>(1);
  const [nuclearProduction, setNuclearProduction] = useState<number>(nuclearBaseProduction * nuclearProductionBonus * nuclearPlants);


  /* ======================
     Cost of each generator
     ====================== */
  const linemenBaseCost = 15;
  const linemenCostBonus = 1;
  const [linemenCost, setLinemenCost] = useState<number>((linemenBaseCost * Math.pow(1.15, linemen)) * linemenCostBonus);

  const coalBaseCost = 250;
  const coalCostBonus = 1;
  const [coalCost, setCoalCost] = useState<number>((coalBaseCost * Math.pow(1.15, coalPlants)) * coalCostBonus);

  const gasBaseCost = 2600;
  const gasCostBonus = 1;
  const [gasCost, setGasCost] = useState<number>((gasBaseCost * Math.pow(1.15, gasPlants)) * gasCostBonus);

  const solarBaseCost = 28000;
  const solarCostBonus = 1;
  const [solarCost, setSolarCost] = useState<number>((solarBaseCost * Math.pow(1.15, solarFarms)) * solarCostBonus);

  const oilBaseCost = 300000;
  const oilCostBonus = 1;
  const [oilCost, setOilCost] = useState<number>((oilBaseCost * Math.pow(1.15, oilWells)) * oilCostBonus);

  const windBaseCost = 3200000;
  const windCostBonus = 1;
  const [windCost, setWindCost] = useState<number>((windBaseCost * Math.pow(1.15, windTurbines)) * windCostBonus);

  const biomassBaseCost = 46000000;
  const biomassCostBonus = 1;
  const [biomassCost, setBiomassCost] = useState<number>((biomassBaseCost * Math.pow(1.15, biomassGassifiers)) * biomassCostBonus);

  const hydroBaseCost = 759000000;
  const hydroCostBonus = 1;
  const [hydroCost, setHydroCost] = useState<number>((hydroBaseCost * Math.pow(1.15, hydroPlants)) * hydroCostBonus);

  const nuclearBaseCost = 12000000000;
  const nuclearCostBonus = 1;
  const [nuclearCost, setNuclearCost] = useState<number>((nuclearBaseCost * Math.pow(1.15, nuclearPlants)) * nuclearCostBonus);


  //Array of upgrades
  const [upgrades, setUpgrades] = useState<Upgrade[]>(UPGRADES);

  /* ==========
     Game Loop!
     ========== */
  const [time, setTime] = useState(0);
  const [deltaTime, setDeltaTime] = useState(0);

  const [newWatts, setNewWatts] = useState(-1);
  const [newSave, setNewSave] = useState(10000);
  useFrameLoop((time: number, deltaTime: number) => {

    if (time > newWatts) {
      setNewWatts(time + 1000);

      //setWatts(watts + wattsPerSec);
    }
    if (time > newSave) {
      setNewSave(time + 4000);

      save();
    }

    setWattsPerSec(linemenProduction + coalProduction + gasProduction + solarProduction + oilProduction + windProduction + biomassProduction + hydroProduction + nuclearProduction);
    setWatts(watts + (wattsPerSec)/(1000/deltaTime))

    setTime(time);
    setDeltaTime(deltaTime);
  });

  //Click Bolt
  function clickBolt(): void {
    setWatts(watts + clickPower);
  }

  /* =============
     Buy Generator
     ============= */
    
  //Update costs
  useEffect(() => {
    setClickPower(clickBaseProduction * clickProductionBonus);

    setLinemenCost((linemenBaseCost * Math.pow(1.15, linemen)) * linemenCostBonus);
    setLinemenProduction(linemenBaseProduction * linemenProductionBonus * linemen);

    setCoalCost((coalBaseCost * Math.pow(1.15, coalPlants)) * coalCostBonus);
    setCoalProduction(coalBaseProduction * coalProductionBonus * coalPlants);

    setGasCost((gasBaseCost * Math.pow(1.15, gasPlants)) * gasCostBonus);
    setGasProduction(gasBaseProduction * gasProductionBonus * gasPlants);

    setSolarCost((solarBaseCost * Math.pow(1.15, solarFarms)) * solarCostBonus);
    setSolarProduction(solarBaseProduction * solarProductionBonus * solarFarms);

    setOilCost((oilBaseCost * Math.pow(1.15, oilWells)) * oilCostBonus);
    setOilProduction(oilBaseProduction * oilProductionBonus * oilWells);

    setWindCost((windBaseCost * Math.pow(1.15, windTurbines)) * windCostBonus);
    setWindProduction(windBaseProduction * windProductionBonus * windTurbines);

    setBiomassCost((biomassBaseCost * Math.pow(1.15, biomassGassifiers)) * biomassCostBonus);
    setBiomassProduction(biomassBaseProduction * biomassProductionBonus * biomassGassifiers);

    setHydroCost((hydroBaseCost * Math.pow(1.15, hydroPlants)) * hydroCostBonus);
    setHydroProduction(hydroBaseProduction * hydroProductionBonus * hydroPlants);

    setNuclearCost((nuclearBaseCost * Math.pow(1.15, nuclearPlants)) * nuclearCostBonus);
    setNuclearProduction(nuclearBaseProduction * nuclearProductionBonus * nuclearPlants);
    }, [clickProductionBonus,
        linemen, linemenCostBonus, linemenProductionBonus,
        coalPlants, coalCostBonus, coalProductionBonus,
        gasPlants, gasCostBonus, gasProductionBonus,
        solarFarms, solarCostBonus, solarProductionBonus,
        oilWells, oilCostBonus, oilProductionBonus,
        windTurbines, windCostBonus, windProductionBonus,
        biomassGassifiers, biomassCostBonus, biomassProductionBonus,
        hydroPlants, hydroCostBonus, hydroProductionBonus,
        nuclearPlants, nuclearCostBonus, nuclearProductionBonus]
  );

  function buyGenerator(generator: string) {

    if (generator === "Lineman") {
      setLinemen(linemen + 1);
      setWatts(watts - Math.round(linemenCost));
    } else if (generator === "Coal Plant") {
      setCoalPlants(coalPlants + 1);
      setWatts(watts - Math.round(coalCost));
    } else if (generator === "Gas Plant") {
      setGasPlants(gasPlants + 1);
      setWatts(watts - Math.round(gasCost));
    } else if (generator === "Solar Farm") {
      setSolarFarms(solarFarms + 1);
      setWatts(watts - Math.round(solarCost));
    } else if (generator === "Oil Well") {
      setOilWells(oilWells + 1);
      setWatts(watts - Math.round(oilCost));
    } else if (generator === "Wind Turbine") {
      setWindTurbines(windTurbines + 1);
      setWatts(watts - Math.round(windCost));
    } else if (generator === "Biomass Gassifier") {
      setBiomassGassifiers(biomassGassifiers + 1);
      setWatts(watts - Math.round(biomassCost));
    } else if (generator === "Hydro Plant") {
      setHydroPlants(hydroPlants + 1);
      setWatts(watts - Math.round(hydroCost));
    } else if (generator === "Nuclear Plant") {
      setNuclearPlants(nuclearPlants + 1);
      setWatts(watts - Math.round(nuclearCost));
    }
  }

  /* =============
     Buy Upgrade
     ============= */
  
  function buyUpgrade(purchasedUpgrade: Upgrade): void {
    setUpgrades(upgrades.map((upgrade: Upgrade): Upgrade => (
      purchasedUpgrade.id === upgrade.id ? 
      {...upgrade, purchased: true} :
      {...upgrade}
    )));
    setWatts(watts - purchasedUpgrade.cost);

    if (purchasedUpgrade.type === "multiplier") {
        multiply(purchasedUpgrade.generator);
    }
  }

  //Helper function, multiplies production of a generator
  function multiply(generator: string): void {
    if (generator === "Click") {
        setClickProductionBonus(clickProductionBonus * 2);
    } else if (generator === "Lineman") {
      setLinemenProductionBonus(linemenProductionBonus * 2);
    } else if (generator === "Coal Plant") {
      setCoalProductionBonus(coalProductionBonus * 2);
    } else if (generator === "Gas Plant") {
      setGasProductionBonus(gasProductionBonus * 2);
    } else if (generator === "Solar Farm") {
      setSolarProductionBonus(solarProductionBonus * 2);
    } else if (generator === "Oil Well") {
      setOilProductionBonus(oilProductionBonus * 2);
    } else if (generator === "Wind Turbine") {
      setWindProductionBonus(windProductionBonus * 2);
    } else if (generator === "Biomass Gassifier") {
      setBiomassProductionBonus(biomassProductionBonus * 2);
    } else if (generator === "Hydro Plant") {
      setHydroProductionBonus(hydroProductionBonus * 2);
    } else if (generator === "Nuclear Plant") {
      setNuclearProductionBonus(nuclearProductionBonus * 2);
    }
  }

  /* =========
     Save Game
     ========= */

  function save(): void {
    //Saves # of watts
    localStorage.setItem('watts', JSON.stringify(watts));

    //Saves upgrades
    localStorage.setItem('upgrades', JSON.stringify(upgrades));

    //Saves generators
    localStorage.setItem('linemen', JSON.stringify(linemen));
    localStorage.setItem('coalPlants', JSON.stringify(coalPlants));
    localStorage.setItem('gasPlants', JSON.stringify(gasPlants));
    localStorage.setItem('solarFarms', JSON.stringify(solarFarms));
    localStorage.setItem('oilWells', JSON.stringify(oilWells));
    localStorage.setItem('windTurbines', JSON.stringify(windTurbines));
    localStorage.setItem('biomassGassifiers', JSON.stringify(biomassGassifiers));
    localStorage.setItem('hydroPlants', JSON.stringify(hydroPlants));
    localStorage.setItem('nuclearPlants', JSON.stringify(nuclearPlants));

    //Saves production bonuses
    localStorage.setItem('linemenProductionBonus', JSON.stringify(linemenProductionBonus));
    localStorage.setItem('coalProductionBonus', JSON.stringify(coalProductionBonus));
    localStorage.setItem('gasProductionBonus', JSON.stringify(gasProductionBonus));
    localStorage.setItem('solarProductionBonus', JSON.stringify(solarProductionBonus));
    localStorage.setItem('oilProductionBonus', JSON.stringify(oilProductionBonus));
    localStorage.setItem('windProductionBonus', JSON.stringify(windProductionBonus));
    localStorage.setItem('biomassProductionBonus', JSON.stringify(biomassProductionBonus));
    localStorage.setItem('hydroProductionBonus', JSON.stringify(hydroProductionBonus));
    localStorage.setItem('nuclearProductionBonus', JSON.stringify(nuclearProductionBonus));

    console.log("Saved");
  }

  /* =========
     Load Game
     ========= */

  function load(): void {

    //Loads watts
    const localWatts = localStorage.getItem('watts');
    if (localWatts) {
      setWatts(JSON.parse(localWatts));
    }

    //Loads upgrades
    const localUpgrades = localStorage.getItem('upgrades');
    if (localUpgrades) {
      setUpgrades(JSON.parse(localUpgrades));
    }

    //Loads generators
    const localLinemen = localStorage.getItem('linemen');
    if (localLinemen) {
      setLinemen(JSON.parse(localLinemen));
    }
    const localCoalPlants = localStorage.getItem('coalPlants');
    if (localCoalPlants) {
      setCoalPlants(JSON.parse(localCoalPlants));
    }
    const localGasPlants = localStorage.getItem('gasPlants');
    if (localGasPlants) {
      setGasPlants(JSON.parse(localGasPlants));
    }
    const localSolarFarms = localStorage.getItem('solarFarms');
    if (localSolarFarms) {
      setSolarFarms(JSON.parse(localSolarFarms));
    }
    const localOilWells = localStorage.getItem('oilWells');
    if (localOilWells) {
      setOilWells(JSON.parse(localOilWells));
    }
    const localWindTurbines = localStorage.getItem('windTurbines');
    if (localWindTurbines) {
      setWindTurbines(JSON.parse(localWindTurbines));
    }
    const localBiomassGassifiers = localStorage.getItem('biomassGassifiers');
    if (localBiomassGassifiers) {
      setBiomassGassifiers(JSON.parse(localBiomassGassifiers));
    }
    const localHydroPlants = localStorage.getItem('hydroPlants');
    if (localHydroPlants) {
      setHydroPlants(JSON.parse(localHydroPlants));
    }
    const localNuclearPlants = localStorage.getItem('nuclearPlants');
    if (localNuclearPlants) {
      setNuclearPlants(JSON.parse(localNuclearPlants));
    }

    //Loads production bonuses
    const localLinemenProductionBonus = localStorage.getItem('linemenProductionBonus');
    if (localLinemenProductionBonus) {
      setLinemenProductionBonus(JSON.parse(localLinemenProductionBonus));
    }
    const localCoalProductionBonus = localStorage.getItem('coalProductionBonus');
    if (localCoalProductionBonus) {
      setCoalProductionBonus(JSON.parse(localCoalProductionBonus));
    }
    const localGasProductionBonus = localStorage.getItem('gasProductionBonus');
    if (localGasProductionBonus) {
      setGasProductionBonus(JSON.parse(localGasProductionBonus));
    }
    const localSolarProductionBonus = localStorage.getItem('solarProductionBonus');
    if (localSolarProductionBonus) {
      setSolarProductionBonus(JSON.parse(localSolarProductionBonus));
    }
    const localOilProductionBonus = localStorage.getItem('oilProductionBonus');
    if (localOilProductionBonus) {
      setOilProductionBonus(JSON.parse(localOilProductionBonus));
    }
    const localWindProductionBonus = localStorage.getItem('windProductionBonus');
    if (localWindProductionBonus) {
      setWindProductionBonus(JSON.parse(localWindProductionBonus));
    }
    const localBiomassProductionBonus = localStorage.getItem('biomassProductionBonus');
    if (localBiomassProductionBonus) {
      setBiomassProductionBonus(JSON.parse(localBiomassProductionBonus));
    }
    const localHydroProductionBonus = localStorage.getItem('hydroProductionBonus');
    if (localHydroProductionBonus) {
      setHydroProductionBonus(JSON.parse(localHydroProductionBonus));
    }
    const localNuclearProductionBonus = localStorage.getItem('nuclearProductionBonus');
    if (localNuclearProductionBonus) {
      setNuclearProductionBonus(JSON.parse(localNuclearProductionBonus));
    }

    console.log("Loaded");
  }

  /* ==========
     Erase Game
     ========== */
  
  function eraseGame(): void {
    setWatts(0);
    setUpgrades(UPGRADES);

    setLinemen(0);
    setCoalPlants(0);
    setGasPlants(0);
    setSolarFarms(0);
    setOilWells(0);
    setWindTurbines(0);
    setBiomassGassifiers(0);
    setHydroPlants(0);
    setNuclearPlants(0);

    setClickProductionBonus(1);
    setLinemenProductionBonus(1);
    setCoalProductionBonus(1);
    setGasProductionBonus(1);
    setSolarProductionBonus(1);
    setOilProductionBonus(1);
    setWindProductionBonus(1);
    setBiomassProductionBonus(1);
    setHydroProductionBonus(1);
    setNuclearProductionBonus(1);
  }

  /* ===========
     Display Hub
     =========== */
  return (
    <div className="App">
      <ViewHub
        watts={watts}
        wattsPerSec={wattsPerSec}

        linemen={linemen}
        coalPlants={coalPlants}
        gasPlants={gasPlants}
        solarFarms={solarFarms}
        oilWells={oilWells}
        windTurbines={windTurbines}
        biomassGassifiers={biomassGassifiers}
        hydroPlants={hydroPlants}
        nuclearPlants={nuclearPlants}

        linemenProduction={linemenProduction}
        coalProduction={coalProduction}
        gasProduction={gasProduction}
        solarProduction={solarProduction}
        oilProduction={oilProduction}
        windProduction={windProduction}
        biomassProduction={biomassProduction}
        hydroProduction={hydroProduction}
        nuclearProduction={nuclearProduction}
    
        linemenCost={linemenCost}
        coalCost={coalCost}
        gasCost={gasCost}
        solarCost={solarCost}
        oilCost={oilCost}
        windCost={windCost}
        biomassCost={biomassCost}
        hydroCost={hydroCost}
        nuclearCost={nuclearCost}

        upgrades={upgrades}
        setUpgrades={setUpgrades}

        clickBolt={clickBolt}
        buyGenerator={buyGenerator}
        buyUpgrade={buyUpgrade}

        eraseGame={eraseGame}
      ></ViewHub>
    </div>
  );
}

export default App;
