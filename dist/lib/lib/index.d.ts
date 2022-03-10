export declare type TMode = 'light' | 'dark';
export declare type TTheme = 'default' | 'micrablepharus' | 'vanzosaura' | 'custom';
declare class Lizard {
    static themes: TTheme[];
    static modes: TMode[];
    constructor();
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
export default Lizard;
