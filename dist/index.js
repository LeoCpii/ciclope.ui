"use strict";Object.defineProperty(exports, "__esModule", {value: true});

class Theme {
    static __initStatic() {this.v = ['color', 'background', 'background--disabled', 'emphasis', 'emphasis--opacity', 'text', 'text--disabled', 'rgb']}

    constructor() { }

     set(config) {
        const root = document.documentElement;
        Theme.v.forEach(v => root.style.setProperty(`--${v}`, `var(--${v}-${config})`));
    }

     setColorBrand(color) {
        const root = document.documentElement;
        root.style.setProperty('--brand', color)
    }

     getColorBrand() {
        return getComputedStyle(document.documentElement).getPropertyValue('--brand');
    }
} Theme.__initStatic();

exports. default = Theme;