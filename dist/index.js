"use strict";Object.defineProperty(exports, "__esModule", {value: true});

class Theme {
    static __initStatic() {this.properties = ['color', 'background', 'background--disabled', 'emphasis', 'emphasis--opacity', 'text', 'text--disabled', 'rgb']}
    static __initStatic2() {this.colors = ['red', 'green', 'blue', 'yellow', 'news', 'info', 'brand', 'contrast']}
    static __initStatic3() {this.images = ['empty']}

     __init() {this.v = [...Theme.properties, ...Theme.colors, Theme.images]}

    constructor() {;Theme.prototype.__init.call(this); }

     set(config) {
        const root = document.documentElement;
        this.v.forEach(v => root.style.setProperty(`--${v}`, `var(--${v}-${config})`));
    }

     setColorBrand(color) {
        const root = document.documentElement;
        root.style.setProperty('--brand', color)
    }

     getColorBrand() {
        return getComputedStyle(document.documentElement).getPropertyValue('--brand');
    }
} Theme.__initStatic(); Theme.__initStatic2(); Theme.__initStatic3();

exports. default = Theme;