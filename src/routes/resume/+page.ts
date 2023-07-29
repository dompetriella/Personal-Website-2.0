
import { setToDarkMode, setToLightMode } from '../../stores';
import type { PageLoad } from './$types';

function setColorScheme() {
    let time: number = new Date().getHours();
    if (time > 7 && time < 19) {
        setToLightMode();
    } else {
        setToDarkMode();
    }
}

export const load = (() => {
    setColorScheme();
}) satisfies PageLoad;