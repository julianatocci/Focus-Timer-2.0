import { initialState } from "./state.js";
import * as timer from "./timer.js";
import * as elements from "./elements.js";
import { updateTimer } from "./timer.js";
import * as sounds from "./sounds.js";

export function togglePlay() {
   initialState.isRunning = document.documentElement.classList.toggle('running');

   timer.countdown();
}

export function reset() {
    initialState.isRunning = false;
    document.documentElement.classList.remove('running');
    timer.updateTimer();
}

export function increase() {
    let minutes = Number(elements.minutes.textContent);
    minutes += 5;
    timer.updateTimer(minutes, initialState.seconds);
}

export function decrease() {
    console.log('decrease');
    let minutes = Number(elements.minutes.textContent);
    minutes -= 5;
    timer.updateTimer(minutes, initialState.seconds); 
}

export function floresta() {
    initialState.isMute = document.documentElement.classList.toggle('music-on');

    if(initialState.isMute) {
        sounds.somFloresta.play();
        elements.buttonFloresta.classList.add('music-on');
        return;
    } 
    
    sounds.somFloresta.pause();
    elements.buttonFloresta.classList.remove('music-on');
}

export function chuva() {
    initialState.isMute = document.documentElement.classList.toggle('music-on');

    if(initialState.isMute) {
        sounds.somChuva.play();
        elements.buttonChuva.classList.add('music-on');
        return;
    }
    
    sounds.somChuva.pause();
    elements.buttonChuva.classList.remove('music-on');
}

export function cafeteria() {
    initialState.isMute = document.documentElement.classList.toggle('music-on');

    if(initialState.isMute) {
        sounds.somCafeteria.play();
        elements.buttonCafeteria.classList.add('music-on');
        return;
    }
    
    sounds.somCafeteria.pause();
    elements.buttonCafeteria.classList.remove('music-on');
}

export function lareira() {
    initialState.isMute = document.documentElement.classList.toggle('music-on');

    if(initialState.isMute) {
        sounds.somLareira.play();
        elements.buttonLareira.classList.add('music-on');
        return;
    }
    
    sounds.somLareira.pause();
    elements.buttonLareira.classList.remove('music-on');
}





