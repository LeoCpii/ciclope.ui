export declare type TState = 'success' | 'danger' | 'warning' | 'info';
export declare type ITheme = 'brand' | 'accent' | TState;
export interface IGlobals {
    locale: 'en' | 'br';
    measureEnabled: false;
    outline: false;
    theme: 'light';
    mode: 'light' | 'dark';
}
