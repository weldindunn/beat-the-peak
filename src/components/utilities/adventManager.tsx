import { hurricaneCurve } from './hurricaneCurve';
import { blizzardCurve } from './blizzardCurve';
import { stormCurve } from './stormCurve';
import { snowStormCurve } from './snowStormCurve';
import { tornadoCurve } from './tornadoCurve';
import { heatWaveCurve } from './heatWaveCurve';
import { Advent } from "../../interfaces/advent";

export function adventManager(
    time: number,
    randomNumber: number,
    advents: Advent[],
    setAdvents: (advents: Advent[]) => void,
    weatherQueue: Advent[],
    setWeatherQueue: (advents: Advent[]) => void
): void {

    /* ==============
       Weather Events
       ============== */
    //Note that the current odds are incorrect, as the curves overlap. Thus, less likely events take priority over more likely ones.
    //On top of that, only one event can happen on a given frame because the last setAdvents will overwrite the others called in that frame.

    const weatherAdvents = [];

    //If the odds are right, start a storm (odds are about 2.8 times a year)
    if (randomNumber < stormCurve(time % 720000, 16.7) && randomNumber > snowStormCurve(time % 720000, 16.7) && randomNumber > hurricaneCurve(time % 720000, 16.7) && randomNumber > blizzardCurve(time % 720000, 16.7)) {
        weatherAdvents.push({"id": advents.length + weatherAdvents.length + 1, "name": "Storm", "type": "Weather", "description": "Every time it rains, it rains pennies from heaven", "startTime": time, "length": 45000, "isOver": false});
    }

    //If the odds are right, start a snow storm (About 37.39% chance per year)
    if (randomNumber < snowStormCurve(time % 720000, 16.7) && randomNumber > blizzardCurve(time % 720000, 16.7) && randomNumber > hurricaneCurve(time % 720000, 16.7)) {
        weatherAdvents.push({"id": advents.length + weatherAdvents.length + 1, "name": "Snow Storm", "type": "Weather", "description": "Drops of rain frozen into ice crystals?", "startTime": time, "length": 45000, "isOver": false});
    }

    //If the odds are right, start a heat wave (odds are about 1.13 times a year)
    if (randomNumber < heatWaveCurve(time % 720000, 16.7) && randomNumber > tornadoCurve(time % 720000, 16.7)) {
        weatherAdvents.push({"id": advents.length + weatherAdvents.length + 1, "name": "Heat Wave", "type": "Weather", "description": "When it's uber-hot", "startTime": time, "length": 30000, "isOver": false});
    }

    //If the odds are right, start a tornado (About 60% chance per year)
    if (randomNumber < tornadoCurve(time % 720000, 16.7) && randomNumber > snowStormCurve(time % 720000, 16.7)) {
        weatherAdvents.push({"id": advents.length + weatherAdvents.length + 1, "name": "Tornado", "type": "Weather", "description": "A violent vortex of rotating wind", "startTime": time, "length": 20000, "isOver": false});
    }

    //If the odds are right, start a hurricane
    if (randomNumber < hurricaneCurve(time % 720000, 16.7)) {
        weatherAdvents.push({"id": advents.length + weatherAdvents.length + 1, "name": "Hurricane", "type": "Weather", "description": "A really big storm", "startTime": time, "length": 30000, "isOver": false});
    }

    //If the odds are right, start a blizzard
    if (randomNumber < blizzardCurve(time % 720000, 16.7)) {
        weatherAdvents.push({"id": advents.length + weatherAdvents.length + 1, "name": "Blizzard", "type": "Weather", "description": "A really big snow storm", "startTime": time, "length": 30000, "isOver": false});
    }

    //If the odds are right, start an earthquake (odds are once in 15 years)
    if (randomNumber < 1/((15*720000)/16.7)) {
        weatherAdvents.push({"id": advents.length + weatherAdvents.length + 1, "name": "Blizzard", "type": "Weather", "description": "A really big snow storm", "startTime": time, "length": 10000, "isOver": false});
    }

    setAdvents([...advents, ...weatherAdvents]);
}