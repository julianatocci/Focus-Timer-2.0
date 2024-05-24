import { initialState } from './state.js';
import * as events from './events.js';
import * as timer from './timer.js';
import * as elements from './elements.js';

export function start(minutes, seconds) {
    initialState.minutes = minutes;
    initialState.seconds = seconds;

    timer.updateTimer()

    events.registerControls();
}