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
    set(mode: TMode): void;
    setBrand(color: string): void;
    setContrast(color: string): void;
}
export default Lizard;
