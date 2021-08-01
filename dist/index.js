"use strict";Object.defineProperty(exports, "__esModule", {value: true});

class Lizard {
    static __initStatic() {this.properties = ['color', 'background', 'background--disabled', 'emphasis', 'emphasis--opacity', 'text', 'text--disabled', 'rgb']}
    static __initStatic2() {this.colors = ['red', 'green', 'blue', 'yellow', 'news', 'info', 'brand', 'contrast',
        'contrast--opacity', 'red--opacity', 'green--opacity', 'blue--opacity', 'yellow--opacity',
        'news--opacity', 'info--opacity', 'brand--opacity', 'contrast--opacity',
        'red-rgb', 'green-rgb', 'yellow-rgb', 'blue-rgb']}
    static __initStatic3() {this.images = ['empty', 'empty-chart']}

     __init() {this.v = [...Lizard.properties, ...Lizard.colors, ...Lizard.images]}

    constructor() {;Lizard.prototype.__init.call(this); }

    

     get mode() {
        return this._mode;
    }

     get brand() {
        return getComputedStyle(document.documentElement).getPropertyValue('--brand');
    }

     get contrast() {
        return getComputedStyle(document.documentElement).getPropertyValue('--contrast');
    }

     get colors() {
        return {
            color: getComputedStyle(document.documentElement).getPropertyValue('--color').trim(),
            text: getComputedStyle(document.documentElement).getPropertyValue('--text').trim(),
            emphasis: getComputedStyle(document.documentElement).getPropertyValue('--emphasis').trim(),
            red: getComputedStyle(document.documentElement).getPropertyValue('--red').trim(),
            green: getComputedStyle(document.documentElement).getPropertyValue('--green').trim(),
            blue: getComputedStyle(document.documentElement).getPropertyValue('--blue').trim(),
            yellow: getComputedStyle(document.documentElement).getPropertyValue('--yellow').trim(),
            opacity: {
                emphasis: getComputedStyle(document.documentElement).getPropertyValue('--emphasis--opacity').trim(),
                red: getComputedStyle(document.documentElement).getPropertyValue('--red--opacity').trim(),
                green: getComputedStyle(document.documentElement).getPropertyValue('--green--opacity').trim(),
                blue: getComputedStyle(document.documentElement).getPropertyValue('--blue--opacity').trim(),
                yellow: getComputedStyle(document.documentElement).getPropertyValue('--yellow--opacity').trim()
            }
        }
    }

     set(mode) {
        const root = document.documentElement;
        this._mode = mode;
        this.v.forEach(v => root.style.setProperty(`--${v}`, `var(--${v}-${mode})`));
    }

     setBrand(color) {
        const root = document.documentElement;
        root.style.setProperty('--brand', color)
    }

     setContrast(color) {
        const root = document.documentElement;
        root.style.setProperty('--contrast', color)
    }
} Lizard.__initStatic(); Lizard.__initStatic2(); Lizard.__initStatic3();

exports. default = Lizard;