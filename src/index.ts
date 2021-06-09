export type TMode = 'light' | 'dark';

class Lizard {
    static properties = ['color', 'background', 'background--disabled', 'emphasis', 'emphasis--opacity', 'text', 'text--disabled', 'rgb'];
    static colors = ['red', 'green', 'blue', 'yellow', 'news', 'info', 'brand', 'contrast'];
    static images = ['empty'];

    private v = [...Lizard.properties, ...Lizard.colors, Lizard.images];

    constructor() { };

    private _mode: TMode;

    public get mode(): TMode {
        return this._mode;
    }

    public get brand(): string {
        return getComputedStyle(document.documentElement).getPropertyValue('--brand');
    }

    public get contrast(): string {
        return getComputedStyle(document.documentElement).getPropertyValue('--contrast');
    }

    public set(mode: TMode): void {
        const root = document.documentElement;
        this._mode = mode;
        this.v.forEach(v => root.style.setProperty(`--${v}`, `var(--${v}-${mode})`));
    }

    public setBrand(color: string): void {
        const root = document.documentElement;
        root.style.setProperty('--brand', color)
    }
    
    public setContrast(color: string): void {
        const root = document.documentElement;
        root.style.setProperty('--contrast', color)
    }
}

export default Lizard;