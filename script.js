let startTime;
let elapsedTime = 0;
let timerInterval;

function timeToString(time){

let hrs = Math.floor(time / 3600000);
let mins = Math.floor((time % 3600000) / 60000);
let secs = Math.floor((time % 60000) / 1000);
let ms = time % 1000;

return (
hrs.toString().padStart(2,"0")+" : "+
mins.toString().padStart(2,"0")+" : "+
secs.toString().padStart(2,"0")+" : "+
ms.toString().padStart(3,"0")
);

}

function print(txt){
document.getElementById("display").innerHTML = txt;
}

function start(){

startTime = Date.now() - elapsedTime;

timerInterval = setInterval(function(){

elapsedTime = Date.now() - startTime;

print(timeToString(elapsedTime));

},10);

}

function pause(){
clearInterval(timerInterval);
}

function reset(){

clearInterval(timerInterval);

elapsedTime = 0;

print("00 : 00 : 00 : 000");

document.getElementById("laps").innerHTML="";

}

function lap(){

let li = document.createElement("li");

li.innerText = timeToString(elapsedTime);

document.getElementById("laps").appendChild(li);

}