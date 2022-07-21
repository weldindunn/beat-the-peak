import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ViewHub } from './components/viewHub';
import { useFrameLoop } from './components/utilities/frameLoop';
import { solarCurve } from './components/utilities/solarCurve';
import { windCurve } from './components/utilities/windCurve';
import { hydroCurve } from './components/utilities/hydroCurve';
import { Upgrade } from "./interfaces/upgrade";
import upgrades from "./data/upgrades.json";

import morning from "./img/Day_Night_Cycle_Morning.png";
import noon from "./img/Day_Night_Cycle_Noon.png";
import evening from "./img/Day_Night_Cycle_Evening.png";
import crescent from "./img/Day_Night_Cycle_Night_Crescent.png";
import full_moon from "./img/Day_Night_Cycle_Night_Full_Moon.png";
import dawn from "./img/Day_Night_Cycle_Night_Dawn.png";

const UPGRADES = upgrades.map((upgrade): Upgrade => ({...upgrade}));

function App() {  

  //Loads up local storage when page is loaded
  window.onload = function() {
    load();
  }

  //Player's name
  const [name, setName] = useState<string>("Bob");

  //Event Scenery
  const [scenery, setScenery] = useState<string>(morning);

  //The number of watts, watts generated per second, and surplus/debt of watts generated modified by those transported
  const [watts, setWatts] = useState<number>(0);
  const [wattsPerSec, setWattsPerSec] = useState<number>(0);
  const [netWattsPerSec, setNetWattsPerSec] = useState<number>(0);

  //The number of members in the co-op
  const [members, setMembers] = useState<number>(0);
  const [wattsPerMember, setWattsPerMember] = useState<number>(10);

  //The number of each type of generator
  const [linemen, setLinemen] = useState<number>(0); 
  const [coalPlants, setCoalPlants] = useState<number>(0);
  const [gasPlants, setGasPlants] = useState<number>(0);
  const [solarFarms, setSolarFarms] = useState<number>(0);
  const [oilWells, setOilWells] = useState<number>(0);
  const [windTurbines, setWindTurbines] = useState<number>(0);
  const [biomassGasifiers, setBiomassGasifiers] = useState<number>(0);
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
  const [solarCurveModifier, setSolarCurveModifier] = useState<number>(0.424);
  const [solarProduction, setSolarProduction] = useState<number>(solarBaseProduction * solarProductionBonus * solarCurveModifier * solarFarms);

  const oilBaseProduction = 2600;
  const [oilProductionBonus, setOilProductionBonus] = useState<number>(1);
  const [oilProduction, setOilProduction] = useState<number>(oilBaseProduction * oilProductionBonus * oilWells);

  const windBaseProduction = 14000;
  const [windProductionBonus, setWindProductionBonus] = useState<number>(1);
  const [windCurveModifier, setWindCurveModifier] = useState<number>(1.33);
  const [windProduction, setWindProduction] = useState<number>(windBaseProduction * windProductionBonus * windCurveModifier * windTurbines);

  const biomassBaseProduction = 78000;
  const [biomassProductionBonus, setBiomassProductionBonus] = useState<number>(1);
  const [biomassProduction, setBiomassProduction] = useState<number>(biomassBaseProduction * biomassProductionBonus * biomassGasifiers);

  const hydroBaseProduction = 440000;
  const [hydroProductionBonus, setHydroProductionBonus] = useState<number>(1);
  const [hydroCurveModifier, setHydroCurveModifier] = useState<number>(0.9)
  const [hydroProduction, setHydroProduction] = useState<number>(hydroBaseProduction * hydroProductionBonus * hydroCurveModifier * hydroPlants);

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
  const [biomassCost, setBiomassCost] = useState<number>((biomassBaseCost * Math.pow(1.15, biomassGasifiers)) * biomassCostBonus);

  const hydroBaseCost = 759000000;
  const hydroCostBonus = 1;
  const [hydroCost, setHydroCost] = useState<number>((hydroBaseCost * Math.pow(1.15, hydroPlants)) * hydroCostBonus);

  const nuclearBaseCost = 12000000000;
  const nuclearCostBonus = 1;
  const [nuclearCost, setNuclearCost] = useState<number>((nuclearBaseCost * Math.pow(1.15, nuclearPlants)) * nuclearCostBonus);


  //The number of each type of transporter
  const [batteries, setBatteries] = useState<number>(0); 
  const [meters, setMeters] = useState<number>(0);
  const [phonePoles, setPhonePoles] = useState<number>(0);
  const [transformers, setTransformers] = useState<number>(0);
  const [undergroundCables, setUndergroundCables] = useState<number>(0);
  const [powerTowers, setPowerTowers] = useState<number>(0);
  const [substations, setSubstations] = useState<number>(0);

  /* =========================================
     Transportation capacity of each generator
     ========================================= */
  const batteryBaseTransportation = 10;
  const [batteryTransportationBonus, setBatteryTransportationBonus] = useState<number>(1);
  const [batteryTransportation, setBatteryTransportation] = useState<number>(batteryBaseTransportation * batteryTransportationBonus * batteries);

  const meterBaseTransportation = 100;
  const [meterTransportationBonus, setMeterTransportationBonus] = useState<number>(1);
  const [meterTransportation, setMeterTransportation] = useState<number>(meterBaseTransportation * meterTransportationBonus * meters);

  const phonePoleBaseTransportation = 800;
  const [phonePoleTransportationBonus, setPhonePoleTransportationBonus] = useState<number>(1);
  const [phonePoleTransportation, setPhonePoleTransportation] = useState<number>(phonePoleBaseTransportation * phonePoleTransportationBonus * phonePoles);

  const transformerBaseTransportation = 4700;
  const [transformerTransportationBonus, setTransformerTransportationBonus] = useState<number>(1);
  const [transformerTransportation, setTransformerTransportation] = useState<number>(transformerBaseTransportation * transformerTransportationBonus * transformers);

  const undergroundCableBaseTransportation = 26000;
  const [undergroundCableTransportationBonus, setUndergroundCableTransportationBonus] = useState<number>(1);
  const [undergroundCableTransportation, setUndergroundCableTransportation] = useState<number>(undergroundCableBaseTransportation * undergroundCableTransportationBonus * undergroundCables);

  const powerTowerBaseTransportation = 140000;
  const [powerTowerTransportationBonus, setPowerTowerTransportationBonus] = useState<number>(1);
  const [powerTowerTransportation, setPowerTowerTransportation] = useState<number>(powerTowerBaseTransportation * powerTowerTransportationBonus * powerTowers);

  const substationBaseTransportation = 780000;
  const [substationTransportationBonus, setSubstationTransportationBonus] = useState<number>(1);
  const [substationTransportation, setSubstationTransportation] = useState<number>(substationBaseTransportation * substationTransportationBonus * substations);

  const [totalTransportation, setTotalTransportation] = useState<number>(batteryTransportation + meterTransportation + phonePoleTransportation + transformerTransportation + undergroundCableTransportation + powerTowerTransportation + substationTransportation);

  /* ========================
     Cost of each transporter
     ======================== */
  const batteryBaseCost = 150;
  const batteryCostBonus = 1;
  const [batteryCost, setBatteryCost] = useState<number>((batteryBaseCost * Math.pow(1.15, batteries)) * batteryCostBonus);

  const meterBaseCost = 2500;
  const meterCostBonus = 1;
  const [meterCost, setMeterCost] = useState<number>((meterBaseCost * Math.pow(1.15, meters)) * meterCostBonus);

  const phonePoleBaseCost = 26000;
  const phonePoleCostBonus = 1;
  const [phonePoleCost, setPhonePoleCost] = useState<number>((phonePoleBaseCost * Math.pow(1.15, phonePoles)) * phonePoleCostBonus);

  const transformerBaseCost = 280000;
  const transformerCostBonus = 1;
  const [transformerCost, setTransformerCost] = useState<number>((transformerBaseCost * Math.pow(1.15, transformers)) * transformerCostBonus);

  const undergroundCableBaseCost = 3000000;
  const undergroundCableCostBonus = 1;
  const [undergroundCableCost, setUndergroundCableCost] = useState<number>((undergroundCableBaseCost * Math.pow(1.15, undergroundCables)) * undergroundCableCostBonus);

  const powerTowerBaseCost = 32000000;
  const powerTowerCostBonus = 1;
  const [powerTowerCost, setPowerTowerCost] = useState<number>((powerTowerBaseCost * Math.pow(1.15, powerTowers)) * powerTowerCostBonus);

  const substationBaseCost = 460000000;
  const substationCostBonus = 1;
  const [substationCost, setSubstationCost] = useState<number>((substationBaseCost * Math.pow(1.15, substations)) * substationCostBonus);


  //Array of upgrades
  const [upgrades, setUpgrades] = useState<Upgrade[]>(UPGRADES);

  //Array of months
  const [currentMonth, setCurrentMonth] = useState<number>(0);
  const [currentYear, setCurrentYear] = useState<number>(1);

  /* ==========
     Game Loop!
     ========== */
  const [time, setTime] = useState(0);
  const [deltaTime, setDeltaTime] = useState(0);

  const [newSave, setNewSave] = useState(5000);
  const [newScenery, setNewScenery] = useState(10000);
  const [newMonth, setNewMonth] = useState(60000);
  const [newYear, setNewYear] = useState(720000);

  useFrameLoop((time: number, deltaTime: number) => {
    if (time > newSave) {
      setNewSave(time + 1000);
      save();
    }

    if (time > newScenery) {
      setNewScenery(time + 10000);

      if (time % 60000 > 50000) {
        setScenery(dawn);
      } else if (time % 60000 > 40000) {
        setScenery(full_moon);
      } else if (time % 60000 > 30000) {
        setScenery(crescent);
      } else if (time % 60000 > 20000) {
        setScenery(evening);
      } else if (time % 60000 > 10000) {
        setScenery(noon);
      } else {
        setScenery(morning);
      }
    }

    if (time > newMonth) {
      setNewMonth(time + 60000); //Every minute...

      if (currentMonth > 10) { //...if it's december...
        setCurrentMonth(0); //...move to January...
      } else { //...but if it's any other month...
        setCurrentMonth(currentMonth + 1); //...move to the next month
      }
      setSolarCurveModifier(solarCurve(currentMonth + 1));
      setWindCurveModifier(windCurve(currentMonth + 1));
      setHydroCurveModifier(hydroCurve(currentMonth + 1));
    }

    if (time > newYear) {
      setNewYear(time + 720000); //Every 12 minutes...
      setCurrentYear(currentYear + 1); //... move to the next year
    }

    setWattsPerSec(linemenProduction + coalProduction + gasProduction + solarProduction + oilProduction + windProduction + biomassProduction + hydroProduction + nuclearProduction);
    setWatts(watts + (netWattsPerSec)/(1000/deltaTime));
    setTotalTransportation(batteryTransportation + meterTransportation + phonePoleTransportation + transformerTransportation + undergroundCableTransportation + powerTowerTransportation + substationTransportation);

    if (totalTransportation > 0) {
      setMembers(totalTransportation/wattsPerMember)
    }

    setTime(time);
    setDeltaTime(deltaTime);
  });

  //Updates netWattsPerSec, which is dependent on a fluid generation state
  useEffect(() => {
    setNetWattsPerSec(wattsPerSec - (members*wattsPerMember));
  }, [wattsPerSec, members, wattsPerMember])

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
    setSolarProduction(solarBaseProduction * solarProductionBonus * solarCurveModifier * solarFarms);

    setOilCost((oilBaseCost * Math.pow(1.15, oilWells)) * oilCostBonus);
    setOilProduction(oilBaseProduction * oilProductionBonus * oilWells);

    setWindCost((windBaseCost * Math.pow(1.15, windTurbines)) * windCostBonus);
    setWindProduction(windBaseProduction * windProductionBonus * windCurveModifier * windTurbines);

    setBiomassCost((biomassBaseCost * Math.pow(1.15, biomassGasifiers)) * biomassCostBonus);
    setBiomassProduction(biomassBaseProduction * biomassProductionBonus * biomassGasifiers);

    setHydroCost((hydroBaseCost * Math.pow(1.15, hydroPlants)) * hydroCostBonus);
    setHydroProduction(hydroBaseProduction * hydroProductionBonus * hydroCurveModifier * hydroPlants);

    setNuclearCost((nuclearBaseCost * Math.pow(1.15, nuclearPlants)) * nuclearCostBonus);
    setNuclearProduction(nuclearBaseProduction * nuclearProductionBonus * nuclearPlants);
    }, [clickProductionBonus,
        linemen, linemenCostBonus, linemenProductionBonus,
        coalPlants, coalCostBonus, coalProductionBonus,
        gasPlants, gasCostBonus, gasProductionBonus,
        solarFarms, solarCostBonus, solarProductionBonus, solarCurveModifier,
        oilWells, oilCostBonus, oilProductionBonus,
        windTurbines, windCostBonus, windProductionBonus, windCurveModifier,
        biomassGasifiers, biomassCostBonus, biomassProductionBonus,
        hydroPlants, hydroCostBonus, hydroProductionBonus, hydroCurveModifier,
        nuclearPlants, nuclearCostBonus, nuclearProductionBonus]
  );

  function buyGenerator(generator: string) {

    if (generator === "Lineworker") {
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
      setBiomassGasifiers(biomassGasifiers + 1);
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

    //Add effect
    if (purchasedUpgrade.type === "multiplier") {
        multiply(purchasedUpgrade.generator);
    }
  }

  /* ===============
     Buy Transporter
     =============== */
    
  //Update costs
  useEffect(() => {
    setBatteryCost((batteryBaseCost * Math.pow(1.15, batteries)) * batteryCostBonus);
    setBatteryTransportation(batteryBaseTransportation * batteryTransportationBonus * batteries);

    setMeterCost((meterBaseCost * Math.pow(1.15, meters)) * meterCostBonus);
    setMeterTransportation(meterBaseTransportation * meterTransportationBonus * meters);

    setPhonePoleCost((phonePoleBaseCost * Math.pow(1.15, phonePoles)) * phonePoleCostBonus);
    setPhonePoleTransportation(phonePoleBaseTransportation * phonePoleTransportationBonus * phonePoles);

    setTransformerCost((transformerBaseCost * Math.pow(1.15, transformers)) * transformerCostBonus);
    setTransformerTransportation(transformerBaseTransportation * transformerTransportationBonus * transformers);

    setUndergroundCableCost((undergroundCableBaseCost * Math.pow(1.15, undergroundCables)) * undergroundCableCostBonus);
    setUndergroundCableTransportation(undergroundCableBaseTransportation * undergroundCableTransportationBonus * undergroundCables);

    setPowerTowerCost((powerTowerBaseCost * Math.pow(1.15, powerTowers)) * powerTowerCostBonus);
    setPowerTowerTransportation(powerTowerBaseTransportation * powerTowerTransportationBonus * powerTowers);

    setSubstationCost((substationBaseCost * Math.pow(1.15, substations)) * substationCostBonus);
    setSubstationTransportation(substationBaseTransportation * substationTransportationBonus * substations);
  }, [batteries, batteryCostBonus, batteryTransportationBonus,
      meters, meterCostBonus, meterTransportationBonus,
      phonePoles, phonePoleCostBonus, phonePoleTransportationBonus,
      transformers, transformerCostBonus, transformerTransportationBonus,
      undergroundCables, undergroundCableCostBonus, undergroundCableTransportationBonus,
      powerTowers, powerTowerCostBonus, powerTowerTransportationBonus,
      substations, substationCostBonus, substationTransportationBonus]
  );

  function buyTransporter(transporter: string) {
    if (transporter === "Battery") {
      setBatteries(batteries + 1);
      setWatts(watts - Math.round(batteryCost));
    } else if (transporter === "Meter") {
      setMeters(meters + 1);
      setWatts(watts - Math.round(meterCost));
    } else if (transporter === "Utility Pole") {
      setPhonePoles(phonePoles + 1);
      setWatts(watts - Math.round(phonePoleCost));
    } else if (transporter === "Transformer") {
      setTransformers(transformers + 1);
      setWatts(watts - Math.round(transformerCost));
    } else if (transporter === "Underground Cable") {
      setUndergroundCables(undergroundCables + 1);
      setWatts(watts - Math.round(undergroundCableCost));
    } else if (transporter === "Power Tower") {
      setPowerTowers(powerTowers + 1);
      setWatts(watts - Math.round(powerTowerCost));
    } else if (transporter === "Substation") {
      setSubstations(substations + 1);
      setWatts(watts - Math.round(substationCost));
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
    //Saves name
    localStorage.setItem('name', JSON.stringify(name));

    //Saves # of watts
    localStorage.setItem('watts', JSON.stringify(watts));

    //Saves the date
    localStorage.setItem('currentMonth', JSON.stringify(currentMonth));
    localStorage.setItem('currentYear', JSON.stringify(currentYear));

    //Saves ids of purchased upgrades 
    localStorage.setItem('upgrades', JSON.stringify(upgrades.filter((upgrade: Upgrade): boolean => !upgrade.purchased).map((upgrade: Upgrade): number => upgrade.id)));

    //Saves generators
    localStorage.setItem('linemen', JSON.stringify(linemen));
    localStorage.setItem('coalPlants', JSON.stringify(coalPlants));
    localStorage.setItem('gasPlants', JSON.stringify(gasPlants));
    localStorage.setItem('solarFarms', JSON.stringify(solarFarms));
    localStorage.setItem('oilWells', JSON.stringify(oilWells));
    localStorage.setItem('windTurbines', JSON.stringify(windTurbines));
    localStorage.setItem('biomassGasifiers', JSON.stringify(biomassGasifiers));
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

    //Saves transporters
    localStorage.setItem('batteries', JSON.stringify(batteries));
    localStorage.setItem('meters', JSON.stringify(meters));
    localStorage.setItem('phonePoles', JSON.stringify(phonePoles));
    localStorage.setItem('transformers', JSON.stringify(transformers));
    localStorage.setItem('undergroundCables', JSON.stringify(undergroundCables));
    localStorage.setItem('powerTowers', JSON.stringify(powerTowers));
    localStorage.setItem('substations', JSON.stringify(substations));

    //Saves transportation bonuses
    localStorage.setItem('batteryTransportationBonus', JSON.stringify(batteryTransportationBonus));
    localStorage.setItem('meterTransportationBonus', JSON.stringify(meterTransportationBonus));
    localStorage.setItem('phonePoleTransportationBonus', JSON.stringify(phonePoleTransportationBonus));
    localStorage.setItem('transformerTransportationBonus', JSON.stringify(transformerTransportationBonus));
    localStorage.setItem('undergroundCableTransportationBonus', JSON.stringify(undergroundCableTransportationBonus));
    localStorage.setItem('powerTowerTransportationBonus', JSON.stringify(powerTowerTransportationBonus));
    localStorage.setItem('substationTransportationBonus', JSON.stringify(substationTransportationBonus));
  }

  /* =========
     Load Game
     ========= */

  function load(): void {

    //Loads name
    const localName = localStorage.getItem('name');
    if (localName) {
      setName(JSON.parse(localName));
    }

    //Loads watts
    const localWatts = localStorage.getItem('watts');
    if (localWatts) {
      setWatts(JSON.parse(localWatts));
    }

    //Loads date
    const localCurrentMonth = localStorage.getItem('currentMonth');
    if (localCurrentMonth) {
      setCurrentMonth(JSON.parse(localCurrentMonth));
      setSolarCurveModifier(solarCurve(JSON.parse(localCurrentMonth)));
      setWindCurveModifier(windCurve(JSON.parse(localCurrentMonth)));
      setHydroCurveModifier(hydroCurve(JSON.parse(localCurrentMonth)));
    }
    const localCurrentYear = localStorage.getItem('currentYear');
    if (localCurrentYear) {
      setCurrentYear(JSON.parse(localCurrentYear));
    }

    //Loads upgrades
    const localUpgrades = localStorage.getItem('upgrades');
    if (localUpgrades) {
      const purchasedUpgrades = JSON.parse(localUpgrades);
      setUpgrades(upgrades.filter((upgrade: Upgrade): boolean => purchasedUpgrades.includes(upgrade.id)));
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
    const localBiomassGasifiers = localStorage.getItem('biomassGasifiers');
    if (localBiomassGasifiers) {
      setBiomassGasifiers(JSON.parse(localBiomassGasifiers));
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

    //Loads transporters
    const localBatteries = localStorage.getItem('batteries');
    if (localBatteries) {
      setBatteries(JSON.parse(localBatteries));
    }
    const localMeters = localStorage.getItem('meters');
    if (localMeters) {
      setMeters(JSON.parse(localMeters));
    }
    const localPhonePoles = localStorage.getItem('phonePoles');
    if (localPhonePoles) {
      setPhonePoles(JSON.parse(localPhonePoles));
    }
    const localTransformers = localStorage.getItem('transformers');
    if (localTransformers) {
      setTransformers(JSON.parse(localTransformers));
    }
    const localUndergroundCables = localStorage.getItem('undergroundCables');
    if (localUndergroundCables) {
      setUndergroundCables(JSON.parse(localUndergroundCables));
    }
    const localPowerTowers = localStorage.getItem('powerTowers');
    if (localPowerTowers) {
      setPowerTowers(JSON.parse(localPowerTowers));
    }
    const localSubstations = localStorage.getItem('substations');
    if (localSubstations) {
      setSubstations(JSON.parse(localSubstations));
    }

    //Loads transportation bonuses
    const localBatteryTransportationBonus = localStorage.getItem('batteryTransportationBonus');
    if (localBatteryTransportationBonus) {
      setBatteryTransportationBonus(JSON.parse(localBatteryTransportationBonus));
    }
    const localMeterTransportationBonus = localStorage.getItem('meterTransportationBonus');
    if (localMeterTransportationBonus) {
      setMeterTransportationBonus(JSON.parse(localMeterTransportationBonus));
    }
    const localPhonePoleTransportationBonus = localStorage.getItem('phonePoleTransportationBonus');
    if (localPhonePoleTransportationBonus) {
      setPhonePoleTransportationBonus(JSON.parse(localPhonePoleTransportationBonus));
    }
    const localTransformerTransportationBonus = localStorage.getItem('transformerTransportationBonus');
    if (localTransformerTransportationBonus) {
      setTransformerTransportationBonus(JSON.parse(localTransformerTransportationBonus));
    }
    const localUndergroundCableTransportationBonus = localStorage.getItem('undergroundCableTransportationBonus');
    if (localUndergroundCableTransportationBonus) {
      setUndergroundCableTransportationBonus(JSON.parse(localUndergroundCableTransportationBonus));
    }
    const localPowerTowerTransportationBonus = localStorage.getItem('powerTowerTransportationBonus');
    if (localPowerTowerTransportationBonus) {
      setPowerTowerTransportationBonus(JSON.parse(localPowerTowerTransportationBonus));
    }
    const localSubstationTransportationBonus = localStorage.getItem('substationTransportationBonus');
    if (localSubstationTransportationBonus) {
      setSubstationTransportationBonus(JSON.parse(localSubstationTransportationBonus));
    }

    console.log("Loaded");
  }

  /* ==========
     Erase Game
     ========== */
  
  function eraseGame(): void {
    setWatts(0);
    setMembers(0);

    setScenery(morning);
    setCurrentMonth(0);
    setCurrentYear(1);
    setUpgrades(UPGRADES);

    setLinemen(0);
    setCoalPlants(0);
    setGasPlants(0);
    setSolarFarms(0);
    setOilWells(0);
    setWindTurbines(0);
    setBiomassGasifiers(0);
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

    setSolarCurveModifier(solarCurve(0));
    setWindCurveModifier(windCurve(0));
    setHydroCurveModifier(hydroCurve(0))

    setBatteries(0);
    setMeters(0);
    setPhonePoles(0);
    setTransformers(0);
    setUndergroundCables(0);
    setPowerTowers(0);
    setSubstations(0);

    setBatteryTransportationBonus(1);
    setMeterTransportationBonus(1);
    setPhonePoleTransportationBonus(1);
    setTransformerTransportationBonus(1);
    setUndergroundCableTransportationBonus(1);
    setPowerTowerTransportationBonus(1);
    setSubstationTransportationBonus(1);
  }

  /* ===========
     Display Hub
     =========== */
  return (
    <div className="App">
      <ViewHub
        name={name}
        setName={setName}
        watts={watts}
        wattsPerSec={wattsPerSec}
        netWattsPerSec={netWattsPerSec}
        members={members}
        scenery={scenery}
        currentMonth={currentMonth}
        currentYear={currentYear}
        totalTransportation={totalTransportation}

        linemen={linemen}
        coalPlants={coalPlants}
        gasPlants={gasPlants}
        solarFarms={solarFarms}
        oilWells={oilWells}
        windTurbines={windTurbines}
        biomassGasifiers={biomassGasifiers}
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

        batteries={batteries}
        meters={meters}
        phonePoles={phonePoles}
        transformers={transformers}
        undergroundCables={undergroundCables}
        powerTowers={powerTowers}
        substations={substations}

        batteryTransportation={batteryTransportation}
        meterTransportation={meterTransportation}
        phonePoleTransportation={phonePoleTransportation}
        transformerTransportation={transformerTransportation}
        undergroundCableTransportation={undergroundCableTransportation}
        powerTowerTransportation={powerTowerTransportation}
        substationTransportation={substationTransportation}

        batteryCost={batteryCost}
        meterCost={meterCost}
        phonePoleCost={phonePoleCost}
        transformerCost={transformerCost}
        undergroundCableCost={undergroundCableCost}
        powerTowerCost={powerTowerCost}
        substationCost={substationCost}

        upgrades={upgrades}
        setUpgrades={setUpgrades}

        clickBolt={clickBolt}
        buyGenerator={buyGenerator}
        buyTransporter={buyTransporter}
        buyUpgrade={buyUpgrade}

        eraseGame={eraseGame}
      ></ViewHub>
    </div>
  );
}

export default App;
