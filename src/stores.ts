
import { writable } from 'svelte/store';

export const lightMode = writable(true);

export function toggleLightMode() {
    lightMode.update(mode => !mode);
}

export function setToLightMode() {
    lightMode.update(mode => true);
}

export function setToDarkMode() {
    lightMode.update(mode => false);
}