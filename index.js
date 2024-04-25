function clock(){
    let watch = new Date();
    let hour = watch.getHours();
    let minutes = watch.getMinutes();
    let seconds = watch.getSeconds();
    let period = "AM";
    if(hour>12){
        period = "PM";
    }
    if(seconds<10){
        seconds = "0"+seconds;
    }
    if(minutes<10){
        minutes = "0"+minutes;
    }
    hour = hour>12? hour%12: hour;
    if(hour<10){
        hour = "0"+hour;
    }

    document.querySelector("#hours").innerHTML = hour;
    document.querySelector("#minutes").innerHTML = minutes;
    document.querySelector("#seconds").innerHTML = seconds;
    document.querySelector("#period").innerHTML = period;
}
let updateclock = setInterval(clock,1000);

const calendar = new Date();
const month = calendar.toLocaleDateString("default",{month: "short"});
const day = calendar.toLocaleDateString("default",{weekday: "long"});
const date = calendar.getDate();
const year = calendar.getFullYear();
document.querySelector("#month").innerHTML = month;
document.querySelector("#day").innerHTML = day;

document.querySelector("#date").innerHTML = date;
document.querySelector("#year").innerHTML = year;
