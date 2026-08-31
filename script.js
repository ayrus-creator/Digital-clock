function updateclock(){
    const now = new Date();

    const hour  = String(now.getHours()).padStart(2,"0");
    const minutes = String(now.getMinutes()).padStart(2,"0");
    const seconds = String(now.getSeconds()).padStart(2,"0");

    const time = `${hour}:${minutes}:${seconds}` ;

    document.getElementById("Clock").textContent = time;

}
updateclock();

setInterval(updateclock,1000);