var timeElement = document.getElementById('time');
var dateElement = document.getElementById('date');

var bgImageElement = document.getElementById('unsplash-img');

getBackgroundImage();

async function getBackgroundImage() {
    var reponse = await fetch('https://source.unsplash.com/random/1600x900');
    var imageURL = reponse.url;

    bgImageElement.style.backgroundImage = "url('" + imageURL + "')";
    bgImageElement.style.backgroundRepeat = "no-repeat";
    bgImageElement.style.backgroundSize = "cover";
}

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

