function updateLondonTime() {
    var londonTimeElement = document.getElementById("london-time");
    var now = new Date();
    var options = {
        timeZone: 'Europe/London',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };
    var londonTime = now.toLocaleString('en-US', options) + " LDN";
    londonTimeElement.textContent = londonTime;
}

setInterval(updateLondonTime, 1000);

updateLondonTime();