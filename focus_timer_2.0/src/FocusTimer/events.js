import { controls } from './elements.js';
import { soundCards } from './elements.js';
import * as actions from './actions.js';

export function registerControls() {
    controls.addEventListener('click', (event) => {
        const actionControls = event.target.dataset.action;
        actions[actionControls]();
    })

    soundCards.addEventListener('click', (event) => {
        const actionSoundCards = event.target.dataset.action;
        actions[actionSoundCards]();    
    })
}


