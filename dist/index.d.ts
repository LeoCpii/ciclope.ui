export declare type TTheme = 'light' | 'dark';
declare class Theme {
    static properties: string[];
    static colors: string[];
    static images: string[];
    private v;
    constructor();
    set(config: TTheme): void;
    setColorBrand(color: string): void;
    getColorBrand(): string;
}
export default Theme;
