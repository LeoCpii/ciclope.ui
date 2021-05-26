export type TTheme = 'light' | 'dark';

class Theme {
    static properties = ['color', 'background', 'background--disabled', 'emphasis', 'emphasis--opacity', 'text', 'text--disabled', 'rgb'];
    static colors = ['red', 'green', 'blue', 'yellow', 'news', 'info', 'brand', 'contrast'];
    static images = ['empty'];

    private v = [...Theme.properties, ...Theme.colors, Theme.images];

    constructor() { }

    public set(config: TTheme): void {
        const root = document.documentElement;
        this.v.forEach(v => root.style.setProperty(`--${v}`, `var(--${v}-${config})`));
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