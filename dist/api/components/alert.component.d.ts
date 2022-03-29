import { LitElement } from 'lit';
import { TState } from '../dto';
export declare class AlertCi extends LitElement {
    message: string;
    theme: TState;
    action: boolean;
    show: boolean;
    static styles: import("lit").CSSResult;
    static icons: {
        danger: string;
        success: string;
        warning: string;
        info: string;
    };
    createRenderRoot(): this;
    get icon(): string;
    get cls(): string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ci-alert': AlertCi;
    }
}
