import emailjs from '@emailjs/browser';

export function initEmailJS(key: string) {
    emailjs.init(key);
}

