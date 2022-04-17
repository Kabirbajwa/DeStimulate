var timeleft = 60;
function timer(){
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Finished";
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  }
  if(timeleft == 60 || timeleft == 59 || timeleft == 58 || timeleft == 57 || timeleft == 56 || timeleft == 50 || timeleft == 49 || timeleft == 48 || timeleft == 47 || timeleft == 46 || timeleft == 40 || timeleft == 39 || timeleft == 38 || timeleft == 37 || timeleft == 36 || timeleft == 30 || timeleft == 29 || timeleft == 28 || timeleft == 27 || timeleft == 26 || timeleft == 20 || timeleft == 19 || timeleft == 18 || timeleft == 17 || timeleft == 16 || timeleft == 10 || timeleft == 9 || timeleft == 8 || timeleft == 7 || timeleft == 6){
    document.getElementById("Instruction").innerHTML = " Breathe In";  
  }else if(timeleft == 55 || timeleft == 54 || timeleft == 53 || timeleft == 52 || timeleft == 51 || timeleft == 45 || timeleft == 44 || timeleft == 43 || timeleft == 42 || timeleft == 41 || timeleft == 35 || timeleft == 34 || timeleft == 33 || timeleft == 32 || timeleft == 31 || timeleft == 25 || timeleft == 24 || timeleft == 23 || timeleft == 22 || timeleft == 21 || timeleft == 15 || timeleft == 14 || timeleft == 13 || timeleft == 12 || timeleft == 11 || timeleft == 5 || timeleft == 4 || timeleft == 3 || timeleft == 2 || timeleft == 1){
    document.getElementById("Instruction").innerHTML = " Breathe Out";  
  }
  timeleft -= 1;
}, 1000);
}
function timerReset(){
    timeleft = 60;
}
document.getElementById("Start").onclick = timer;
document.getElementById("Reset").onclick = timerReset;