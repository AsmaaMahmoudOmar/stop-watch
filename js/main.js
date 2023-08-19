let hour = 0;
let minuit = 0;
let second = 0;

let timeHour = document.getElementById('timeHour');

function timerWatch(){
  second++;
  if(second == 60){
    second = 0;
    minuit++;
    if(minuit == 60){
      minuit = 0;
      hour++;
      if(hour == 24){
        hour = 0;
      }
    }
  }
  // * set expression  to add string of zero + time 
  let h = hour < 10 ? "0" + hour: hour;
  let m = minuit < 10 ? "0" + minuit: minuit;
  let s = second < 10 ? "0" + second: second;  


  timeHour.innerHTML = h+ ':' + m + ":" + s;
}

// ! did variable = null to set interval function inside until every click change id of INTERVAL FUNCTION and pause function
let timer = null;
function startWatch(){
  timer = setInterval(timerWatch, 1000);
}

function stopWatch(){
  clearInterval(timer);
}
function refresh(){
  clearInterval(timer)
  second = 0;
  minuit = 0;
  hour = 0;
  timeHour.innerHTML = "00" + ":" + "00" + ":" + "00"
}