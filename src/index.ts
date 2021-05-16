type TValidTheme = 'light' | 'dark';

class Theme {
    static v = ['color', 'background', 'background--disabled', 'emphasis', 'emphasis--opacity', 'text', 'text--disabled', 'rgb'];

    constructor() { }

    public set(config: TValidTheme): void {
        const root = document.documentElement;
        Theme.v.forEach(v => root.style.setProperty(`--${v}`, `var(--${v}-${config})`));
    }

    public setColorBrand(color: string): void {
        const root = document.documentElement;
        root.style.setProperty('--brand', color)
    }

    public getColorBrand(): string {
        return getComputedStyle(document.documentElement).getPropertyValue('--brand');
    }
}

export default Theme;