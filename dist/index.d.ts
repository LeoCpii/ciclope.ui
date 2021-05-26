declare type TValidTheme = 'light' | 'dark';
declare class Theme {
    static properties: string[];
    static colors: string[];
    static images: string[];
    private v;
    constructor();
    set(config: TValidTheme): void;
    setColorBrand(color: string): void;
    getColorBrand(): string;
}
export default Theme;
