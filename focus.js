var timeElement = document.getElementById("time");
var dateElement = document.getElementById("date");

var bgImageElement = document.getElementById("unsplash-img");

var refreshImageIconElement = document.getElementById("refreshImageIcon");
var quoteElement = document.getElementById("quote");
var copyQuoteIconElement = document.getElementById("copyQuoteIcon");
var authorElement = document.getElementById("author");
var refreshQuoteIconElement = document.getElementById("refreshQuoteIcon");

const copyQuoteToClipboard = () => {
    var range = document.createRange();
    range.selectNode(quoteElement);
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges(); // to deselect

    copyQuoteIconElement.innerHTML = "<i class='fa fa-check fa-lg'></i>";
};

const getBackgroundImage = async () => {
	refreshImageIconElement.style.visibility = "hidden";
    
    const apiUrl = "https://source.unsplash.com/random/1600x900";
    var response = await fetch(apiUrl);
    var imageURL = response.url;

    bgImageElement.style.backgroundImage = `url(${imageURL})`;
    bgImageElement.style.backgroundRepeat = "no-repeat";
    bgImageElement.style.backgroundSize = "cover";

    refreshImageIconElement.style.visibility = "visible";
	refreshImageIconElement.onclick = () => getBackgroundImage();
	refreshImageIconElement.title = "Get new Image";
};

const getQuote = async () => {
    const apiUrl = "https://api.quotable.io/random";
    copyQuoteIconElement.innerHTML = "<i class='fa fa-copy fa-lg'></i>";
    copyQuoteIconElement.style.visibility = "hidden";

    var response = await fetch(apiUrl);
    var json = await response.json();

    var quote = json.content;
    var author = json.author;

    quoteElement.innerText = quote;
    authorElement.innerText = author;

    copyQuoteIconElement.style.visibility = "visible";
    copyQuoteIconElement.onclick = () => copyQuoteToClipboard();
    copyQuoteIconElement.title = "Copy Quote to Clipboard";

    refreshQuoteIconElement.onclick = () => getQuote();
    refreshQuoteIconElement.title = "Get new Quote";
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
