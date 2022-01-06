export type TMode = 'light' | 'dark';
export type TTheme = 'default' | 'micrablepharus' | 'vanzosaura' | 'custom';

class Lizard {
    static themes: TTheme[] = ['default', 'micrablepharus', 'vanzosaura', 'custom'];
    static modes: TMode[] = ['dark', 'light'];

    constructor() { };

    private _mode: TMode;

    public get mode(): TMode {
        return this._mode;
    }

    public get brand(): string {
        return getComputedStyle(document.documentElement).getPropertyValue('--brand');
    }

    public get accent(): string {
        return getComputedStyle(document.documentElement).getPropertyValue('--accent');
    }

    public get colors() {
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
        }
    }

    private cleanThemes(): void {
        const arr = document.getElementsByTagName('BODY')[0].classList;
        const length = arr.length;

        for (let index = 0; index < length; index++) {
            const isNotMode = !Lizard.modes.includes(arr[index] as TMode);
            if (isNotMode) {
                arr.remove(arr[index]);
            }
        }
    }

    private cleanModes(): void {
        const arr = document.getElementsByTagName('BODY')[0].classList;
        const length = arr.length;

        for (let index = 0; index < length; index++) {
            const isNotMode = Lizard.modes.includes(arr[index] as TMode);
            if (isNotMode) {
                arr.remove(arr[index]);
            }
        }
    }

    public setMode(mode: TMode): void {
        this.cleanModes();
        document.getElementsByTagName('BODY')[0].classList.add(mode);
    }

    public setBrand(color: string): void {
        const root = document.documentElement;
        root.style.setProperty('--brand', color)
    }

    public setaccent(color: string): void {
        const root = document.documentElement;
        root.style.setProperty('--accent', color)
    }

    public setTheme(theme: TTheme): void {
        this.cleanThemes();
        if (theme !== 'default') { document.getElementsByTagName('BODY')[0].classList.add(theme); }
    }
}

export default Lizard;