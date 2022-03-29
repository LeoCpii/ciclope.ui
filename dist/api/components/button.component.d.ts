import { LitElement } from 'lit';
import { ITheme } from '../dto';
export declare class ButtonCi extends LitElement {
    label: string;
    theme: ITheme;
    type: 'button' | 'submit';
    size: 'small' | 'large' | '';
    icon: string;
    outline: boolean;
    block: boolean;
    disabled: boolean;
    responsive: boolean;
    iconButton: boolean;
    noStroke: boolean;
    isLoading: boolean;
    textAlign: 'left' | 'right' | '';
    static styles: import("lit").CSSResult;
    createRenderRoot(): this;
    get cls(): string;
    get clsIcon(): string;
    get text(): string;
    get loading(): "" | import("lit-html").TemplateResult<1>;
    _click(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ci-button': ButtonCi;
    }
}
