import { constants } from "./constants.js";
import { elements } from "./elements.js";

const copyQuoteToClipboard = () => {
    const { checkIcon } = constants;
    const { quoteTextElement, copyQuoteIconElement } = elements;

    const range = document.createRange();
    range.selectNode(quoteTextElement);
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges(); // to deselect

    copyQuoteIconElement.innerHTML = checkIcon;
};

export const setQuote = async () => {
    const {
        copyIcon,
        copyQuoteTooltip,
        quoteApiUrl,
        refreshQuoteTooltip,
        visibilityHidden,
        visibilityVisible,
    } = constants;
    const {
        quoteTextElement,
        authorElement,
        copyQuoteIconElement,
        refreshQuoteIconElement,
    } = elements;

    let copyQuoteIconElementStyle = copyQuoteIconElement.style;

    copyQuoteIconElement.innerHTML = copyIcon;
    copyQuoteIconElementStyle.visibility = visibilityHidden;

    const response = await fetch(quoteApiUrl);
    const json = await response.json();

    const { content: quote, author } = json;

    quoteTextElement.innerText = quote;
    authorElement.innerText = author;

    copyQuoteIconElementStyle.visibility = visibilityVisible;
    copyQuoteIconElement.onclick = () => copyQuoteToClipboard();
    copyQuoteIconElement.title = copyQuoteTooltip;

    refreshQuoteIconElement.onclick = () => setQuote();
    refreshQuoteIconElement.title = refreshQuoteTooltip;
};
