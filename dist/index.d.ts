export declare type TTheme = 'light' | 'dark';
declare class Theme {
    static properties: string[];
    static colors: string[];
    static images: string[];
    private v;
    constructor();
    private _theme;
    get theme(): TTheme;
    set(theme: TTheme): void;
    setColorBrand(color: string): void;
    getColorBrand(): string;
}
export default Theme;
