declare type TValidTheme = 'light' | 'dark';
declare class Theme {
    static v: string[];
    constructor();
    set(config: TValidTheme): void;
    setColorBrand(color: string): void;
    getColorBrand(): string;
}
export default Theme;
