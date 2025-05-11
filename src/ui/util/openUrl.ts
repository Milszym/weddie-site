import {isMobile} from "../theme/isMobile";

export const openUrl = (url: string, withBlank: boolean = true) => {
    if (isMobile()) {
        window.open(url)?.focus();
    } else {
        window.open(url, withBlank ? '_blank' : '')?.focus();
    }
}