import { constants } from "./constants.js";
import { elements } from "./elements.js";

export const setBackgroundImage = async () => {
    const {
        bgCover,
        visibilityHidden,
        bgNoRepeat,
        refreshImageTooltip,
        unsplashApiUrl,
        visibilityVisible,
    } = constants;
    const { bgImageElement, refreshImageIconElement } = elements;

    let bgImageElementStyle = bgImageElement.style;
    let refreshImageIconElementStyle = refreshImageIconElement.style;

    refreshImageIconElementStyle.visibility = visibilityHidden;

    const response = await fetch(unsplashApiUrl);
    const { url: imageURL } = response;

    bgImageElementStyle.backgroundImage = `url(${imageURL})`;
    bgImageElementStyle.backgroundRepeat = bgNoRepeat;
    bgImageElementStyle.backgroundSize = bgCover;

    refreshImageIconElementStyle.visibility = visibilityVisible;
    refreshImageIconElement.onclick = () => setBackgroundImage();
    refreshImageIconElement.title = refreshImageTooltip;
};
