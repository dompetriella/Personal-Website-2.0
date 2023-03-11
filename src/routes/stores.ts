
import {writable, get} from 'svelte/store';

export const lightMode = writable(true);

export function toggleLightMode() {
    lightMode.update(mode => !mode);
    console.log('lightMode:', get(lightMode));
}