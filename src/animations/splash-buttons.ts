import { elasticOut } from 'svelte/easing';

let visible = true;

function spin(node: any, { duration }: any) {
    return {
        duration,
        css: (t: number) => {
            const eased = elasticOut(t);

            return `
                transform: scale(${eased}) rotate(${eased * 1080}deg);
                color: hsl(
                    ${~~(t * 360)},
                    ${Math.min(100, 1000 - 1000 * t)}%,
                    ${Math.min(50, 500 - 500 * t)}%
                );`
        }
    };
}

function fallingSign(node: any, { duration = 0 }: any) {
    return {
        duration,
        css: (t: number) => {
            const eased = elasticOut(t);

            return `
                transform: scale(${eased}) rotate(${eased * 1080}deg);
                color: hsl(
                    ${~~(t * 360)},
                    ${Math.min(100, 1000 - 1000 * t)}%,
                    ${Math.min(50, 500 - 500 * t)}%
                );`
        }
    };
}