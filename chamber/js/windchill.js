let temperature = 17;
let speed = 13;
let windChill = (35.74 + (0.6215 * temperature))-(35.75 * Math.pow(speed,0.16)) + (0.4275*temperature*Math.pow(speed,0.16));
windChill= Math.round(windChill);

function wind(temperature,speed) {
    if(temperature <= 50 && speed > 3) {
        return windChill;
    }
    else {return "N/A"};
      
    
}
document.querySelector("#temperature").textContent= temperature;
document.querySelector("#speed").textContent= speed;
document.querySelector("#windChill").textContent= windChill;
