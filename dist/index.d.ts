declare type TValidTheme = 'light' | 'dark';
declare class Theme {
    static v: string[];
    constructor();
    set(config: TValidTheme): void;
    setColorBrand(color: string): void;
}
export default Theme;
