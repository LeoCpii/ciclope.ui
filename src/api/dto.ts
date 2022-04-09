export type TState = 'success' | 'danger' | 'warning' | 'info';
export type ITheme = 'brand' | 'accent' | 'base' | TState;

export interface IGlobals {
    locale: 'en' | 'br';
    measureEnabled: false;
    outline: false;
    theme: 'light';
    mode: 'light' | 'dark';
}