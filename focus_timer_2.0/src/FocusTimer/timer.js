import { initialState } from "./state.js";
import * as elements from "./elements.js";
import { reset } from "./actions.js";
import { increase } from "./actions.js";
import { somAlarme } from "./sounds.js";

export function countdown() {
    if(!initialState.isRunning) {
        return;
    }

    let minutes = Number(elements.minutes.textContent);
    let seconds = Number(elements.seconds.textContent);

    seconds--;

    if(seconds < 0) {
        seconds = 59;
        minutes--;
    }

    if(minutes < 0) {
        reset();
        somAlarme.play();
        return;
    }

    updateTimer(minutes, seconds);

    setTimeout(() => countdown(), 1000);
}


export function updateTimer(minutes, seconds) {
    console.log(initialState.minutes)
    console.log(initialState.seconds)
    minutes = minutes ?? initialState.minutes;
    seconds = seconds ?? initialState.seconds;

    console.log(minutes)
    console.log(seconds)

    elements.minutes.textContent = String(minutes).padStart(2, "0");  // transformei os minutos e segundos em strings para poder usar padStart, que preenche um espaço que está vazio. Nesse caso, se só tiver um caractere ele vai preencher o outro com um 0. 
    elements.seconds.textContent = String(seconds).padStart(2, "0");
}

