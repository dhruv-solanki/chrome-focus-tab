var timeElement = document.getElementById("time");
var dateElement = document.getElementById("date");

var bgImageElement = document.getElementById("unsplash-img");

var quoteElement = document.getElementById("quote");
var authorElement = document.getElementById("author");

const getBackgroundImage = async () => {
    var response = await fetch("https://source.unsplash.com/random/1600x900");
    var imageURL = response.url;

    bgImageElement.style.backgroundImage = `url(${imageURL})`;
    bgImageElement.style.backgroundRepeat = "no-repeat";
    bgImageElement.style.backgroundSize = "cover";
};

const getQuote = async () => {
    var response = await fetch("https://api.quotable.io/random");
    var json = await response.json();

    var quote = json.content;
    var author = json.author;

    quoteElement.innerText = quote;
    authorElement.innerText = author;
};

const getTime = () => {
    var currentTime = new Date();

    var showDate = currentTime.toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
    });

    var showTime = currentTime.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
    });

    dateElement.innerText = showDate.toString();
    timeElement.innerText = showTime.toString();

    setInterval(getTime, 1000);
};

getBackgroundImage();
getQuote();
getTime();
