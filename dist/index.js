"use strict";Object.defineProperty(exports, "__esModule", {value: true});

class Theme {
    static __initStatic() {this.v = ['color', 'background', 'emphasis', 'text']}

    constructor() { }

     set(config) {
        const root = document.documentElement;
        Theme.v.forEach(v => root.style.setProperty(`--${v}`, `var(--${v}-${config})`));
    }

     setColorBrand(color) {
        const root = document.documentElement;
        root.style.setProperty('--color-brand', color)
    }
} Theme.__initStatic();

exports. default = Theme;