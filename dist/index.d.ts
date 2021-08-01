export declare type TMode = 'light' | 'dark';
declare class Lizard {
    static properties: string[];
    static colors: string[];
    static images: string[];
    private v;
    constructor();
    private _mode;
    get mode(): TMode;
    get brand(): string;
    get contrast(): string;
    get colors(): {
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
    set(mode: TMode): void;
    setBrand(color: string): void;
    setContrast(color: string): void;
}
export default Lizard;
