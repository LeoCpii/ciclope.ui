import { LitElement } from 'lit';
export declare class CardCi extends LitElement {
    label: string;
    static styles: import("lit").CSSResult;
    createRenderRoot(): this;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ci-card': CardCi;
    }
}
