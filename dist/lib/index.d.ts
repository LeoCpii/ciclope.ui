export declare type TMode = 'light' | 'dark';
export declare type TTheme = 'default' | 'micrablepharus' | 'vanzosaura' | 'custom' | 'viva-real' | 'zap-imoveis' | 'aulera';
export declare type TColors = 'brand' | 'accent' | 'spotlight';
export declare type TState = 'success' | 'danger' | 'warning' | 'info' | 'link';
export declare type TStateColor = TColors | TState;
export declare class Ciclope {
    static themes: TTheme[];
    static modes: TMode[];
    private _mode;
    get mode(): TMode;
    get brand(): string;
    get accent(): string;
    get colors(): {
        brand: string;
        accent: string;
        color: string;
        text: string;
        emphasis: string;
        red: string;
        green: string;
        blue: string;
        yellow: string;
        opacity: {
            emphasis: string;
            red: string;
            green: string;
            blue: string;
            yellow: string;
        };
    };
    private cleanThemes;
    private cleanModes;
    setMode(mode: TMode): void;
    setBrand(color: string): void;
    setaccent(color: string): void;
    setTheme(theme: TTheme): void;
}
