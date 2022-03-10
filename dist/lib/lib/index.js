"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Lizard {
    constructor() { }
    ;
    get mode() {
        return this._mode;
    }
    get brand() {
        return getComputedStyle(document.documentElement).getPropertyValue('--brand');
    }
    get accent() {
        return getComputedStyle(document.documentElement).getPropertyValue('--accent');
    }
    get colors() {
        return {
            brand: getComputedStyle(document.documentElement).getPropertyValue('--brand').trim(),
            accent: getComputedStyle(document.documentElement).getPropertyValue('--accent').trim(),
            color: getComputedStyle(document.documentElement).getPropertyValue('--color').trim(),
            text: getComputedStyle(document.documentElement).getPropertyValue('--text').trim(),
            emphasis: getComputedStyle(document.documentElement).getPropertyValue('--emphasis').trim(),
            red: getComputedStyle(document.documentElement).getPropertyValue('--danger').trim(),
            green: getComputedStyle(document.documentElement).getPropertyValue('--success').trim(),
            blue: getComputedStyle(document.documentElement).getPropertyValue('--info').trim(),
            yellow: getComputedStyle(document.documentElement).getPropertyValue('--warning').trim(),
            opacity: {
                emphasis: getComputedStyle(document.documentElement).getPropertyValue('--emphasis--opacity').trim(),
                red: getComputedStyle(document.documentElement).getPropertyValue('--danger--opacity').trim(),
                green: getComputedStyle(document.documentElement).getPropertyValue('--success--opacity').trim(),
                blue: getComputedStyle(document.documentElement).getPropertyValue('--info--opacity').trim(),
                yellow: getComputedStyle(document.documentElement).getPropertyValue('--warning--opacity').trim()
            }
        };
    }
    cleanThemes() {
        const arr = document.getElementsByTagName('BODY')[0].classList;
        const length = arr.length;
        for (let index = 0; index < length; index++) {
            const isNotMode = !Lizard.modes.includes(arr[index]);
            if (isNotMode) {
                arr.remove(arr[index]);
            }
        }
    }
    cleanModes() {
        const arr = document.getElementsByTagName('BODY')[0].classList;
        const length = arr.length;
        for (let index = 0; index < length; index++) {
            const isNotMode = Lizard.modes.includes(arr[index]);
            if (isNotMode) {
                arr.remove(arr[index]);
            }
        }
    }
    setMode(mode) {
        this.cleanModes();
        document.getElementsByTagName('BODY')[0].classList.add(mode);
    }
    setBrand(color) {
        const root = document.documentElement;
        root.style.setProperty('--brand', color);
    }
    setaccent(color) {
        const root = document.documentElement;
        root.style.setProperty('--accent', color);
    }
    setTheme(theme) {
        this.cleanThemes();
        if (theme !== 'default') {
            document.getElementsByTagName('BODY')[0].classList.add(theme);
        }
    }
}
Lizard.themes = ['default', 'micrablepharus', 'vanzosaura', 'custom'];
Lizard.modes = ['dark', 'light'];
exports.default = Lizard;
//# sourceMappingURL=index.js.map