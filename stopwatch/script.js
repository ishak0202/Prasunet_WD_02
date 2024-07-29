let timerDisplay = document.querySelector('.timerDisplay');
let stopBtn = document.getElementById('stopBtn');
let startBtn = document.getElementById('startBtn');
let resetBtn = document.getElementById('resetBtn');
let lapBtn = document.getElementById('lapBtn');
let lapsContainer = document.querySelector('.laps');

let msec = 0;
let secs = 0;
let mins = 0;
let timerId = null;
let isRunning = false;

startBtn.addEventListener('click', function(){
    if (!isRunning) {
        timerId = setInterval(startTimer, 10);
        isRunning = true;
    }
});

stopBtn.addEventListener('click', function(){
    clearInterval(timerId);
    isRunning = false;
});

resetBtn.addEventListener('click', function(){
    clearInterval(timerId);
    timerDisplay.innerHTML = `00 : 00 : 00`;
    msec = secs = mins = 0;
    isRunning = false;
    lapsContainer.innerHTML = ''; // Clear laps
});

lapBtn.addEventListener('click', function(){
    if (isRunning) {
        const lapTime = `${minsString(mins)} : ${secsString(secs)} : ${msecString(msec)}`;
        const lapElement = document.createElement('div');
        lapElement.className = 'lap';
        lapElement.innerText = lapTime;
        lapsContainer.appendChild(lapElement);
    }
});

function startTimer(){
    msec++;
    if(msec == 100){
        msec = 0;
        secs++;
        if(secs == 60){
            secs = 0;
            mins++;
        }
    }

    timerDisplay.innerHTML = `${minsString(mins)} : ${secsString(secs)} : ${msecString(msec)}`;
}

function msecString(msec) {
    return msec < 10 ? `0${msec}` : msec;
}

function secsString(secs) {
    return secs < 10 ? `0${secs}` : secs;
}

function minsString(mins) {
    return mins < 10 ? `0${mins}` : mins;
}
