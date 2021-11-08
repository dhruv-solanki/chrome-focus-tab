var timeElement = document.getElementById('time');
var dateElement = document.getElementById('date');

setInterval(getTime, 1000);

function getTime() {
    var currentTime = new Date();

    var showDate = currentTime.toLocaleDateString('en-US', {
       day:  'numeric',
       month: 'short',
       year: 'numeric',
    });
    
    var showTime = currentTime.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
    });
    
    dateElement.innerText = showDate.toString();
    timeElement.innerText = showTime.toString();
}

