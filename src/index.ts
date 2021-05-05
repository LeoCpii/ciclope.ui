type TValidTheme = 'light' | 'dark';

class Theme {
    static v = ['color', 'background', 'background--disabled', 'emphasis', 'emphasis--opacity', 'text'];

    constructor() { }

    public set(config: TValidTheme):void {
        const root = document.documentElement;
        Theme.v.forEach(v => root.style.setProperty(`--${v}`, `var(--${v}-${config})`));
    }

    public setColorBrand(color: string):void {
        const root = document.documentElement;
        root.style.setProperty('--brand', color)
    }
}

export default Theme;