
let [seconds, minute, hour] = [0,0,0];
let displayTime = document.getElementById("displayTime");
let timer = null;


function stopWatch(){

    seconds++;

    if(seconds == 60){
        seconds = 0;
        minute++;

        if(minute == 0){
            minute = 0;
            hour++;
        }

    }

    let h = hour < 10? "0" + hour : hour;
    let m = minute < 10? "0" + minute : minute;
    let s = seconds < 10? "0" + seconds : seconds;

    displayTime.innerHTML = h + ":" + m + ":" + s;
}

function startTime(){

    if(timer!== null){
        clearInterval(timer);
    }
    timer = setInterval(stopWatch,1000);
}



function watchStop(){

    clearInterval(timer);
}


function watchReset(){
    clearInterval(timer);
    [seconds, minute, hour] = [0,0,0];
    displayTime.innerHTML="00:00:00";

}