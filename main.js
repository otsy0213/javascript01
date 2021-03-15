// 変数定義

let timer_display = document.getElementById("timer_display");
let start         = document.getElementById("start");
let stop          = document.getElementById("stop");
let reset         = document.getElementById("reset");

let count        = 0;
let hours        = 0;
let minutes      = 0;
let seconds      = 0;
let milliseconds = 0;

let newHours        = 0;
let newMinutes      = 0;
let newSeconds      = 0;
let newMilliseconds = 0;

let interval;

// スタートボタン

function stopWatch(){
    milliseconds++;
    if(milliseconds / 99 == 1){
        seconds++;
        milliseconds = 0;
        if(seconds / 60 == 1){
            minutes++;
            seconds = 0;
        }
        if(minutes / 60 == 1){
            hours++;
            minutes = 0;
        }
    }

    if(milliseconds < 10){
        newMilliseconds = "0" + milliseconds;
    }else{
        newMilliseconds = milliseconds;
    }

    if(seconds < 10){
        newSeconds = "0" + seconds;
    }else{
        newSeconds = seconds;
    }   

    if(minutes < 10){
        newMinutes = "0" + minutes;
    }else{
        newMinutes = minutes;
    }

    if(hours < 10){
        newHours = "0" + hours;
    }else{
        newHours = hours;
    }

    timer_display.innerHTML = newHours + ":" + newMinutes + ":" + newSeconds + ":" + newMilliseconds; 
}

start.addEventListener("click", function(){
   interval = setInterval(stopWatch, 10);
})


// ストップボタン

stop.addEventListener("click", function(){
    clearInterval(interval);
})

// リセットボタン

reset.addEventListener("click", function(){
    clearInterval(interval);
    hours        = 0;
    minutes      = 0;
    seconds      = 0;
    milliseconds = 0;

    timer_display.innerHTML = "00:00:00:00"
})