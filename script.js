
let Date_Time = new Date();
const Todays_Date = Date_Time.toDateString();
console.log(Todays_Date)
let DomDateElement = document.getElementById("Date").innerHTML = Todays_Date;
setInterval(() => {
    let Date_Time = new Date();
    const Time_Now = Date_Time.toLocaleTimeString()
    let DomTimeElement = document.getElementById("Time")
    DomTimeElement.innerHTML = Time_Now;
}, 1000);
