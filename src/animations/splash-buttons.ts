import { elasticOut } from 'svelte/easing';

export function funnelOut(node: Element, {
    delay = 0,
    duration = 400
}: { duration: number; delay: number; }) {

    const o = +getComputedStyle(node).opacity;

    return {
        delay,
        duration,
        css: (t: number, u: number) => `opacity: ${t / 3 * o}; transform: scale(${t}) translateY(${u * 4}em)`
    };
}