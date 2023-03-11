import { constants } from "./constants.js";
import { elements } from "./elements.js";

export const setDateTime = () => {
    const { enUS, numeric, short } = constants;
    const { dateElement, timeElement } = elements;

    const dateObj = new Date();

    const date = dateObj.toLocaleDateString(enUS, {
        day: numeric,
        month: short,
        year: numeric,
    });

    const time = dateObj.toLocaleString(enUS, {
        hour: numeric,
        minute: numeric,
        second: numeric,
        hour12: true,
    });

    dateElement.innerText = date.toString();
    timeElement.innerText = time.toString();

    setInterval(setDateTime, 1000);
};
