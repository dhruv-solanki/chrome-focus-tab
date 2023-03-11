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
    const {
        bgImageElement,
        croppedImageLinkElement,
        fullImageLinkElement,
        refreshImageIconElement,
    } = elements;

    let bgImageElementStyle = bgImageElement.style;
    let croppedImageLinkElementStyle = croppedImageLinkElement.style;
    let fullImageLinkElementStyle = fullImageLinkElement.style;
    let refreshImageIconElementStyle = refreshImageIconElement.style;

    croppedImageLinkElementStyle.visibility = visibilityHidden;
    fullImageLinkElementStyle.visibility = visibilityHidden;
    refreshImageIconElementStyle.visibility = visibilityHidden;

    const response = await fetch(unsplashApiUrl);
    const { url: imageURL } = response;

    bgImageElementStyle.backgroundImage = `url(${imageURL})`;
    bgImageElementStyle.backgroundRepeat = bgNoRepeat;
    bgImageElementStyle.backgroundSize = bgCover;

    croppedImageLinkElement.href = imageURL;
    croppedImageLinkElementStyle.visibility = visibilityVisible;

    fullImageLinkElement.href = imageURL.split("?")[0];
    fullImageLinkElementStyle.visibility = visibilityVisible;

    refreshImageIconElementStyle.visibility = visibilityVisible;
    refreshImageIconElement.onclick = () => setBackgroundImage();
    refreshImageIconElement.title = refreshImageTooltip;
};
