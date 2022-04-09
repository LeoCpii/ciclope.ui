import { LitElement } from 'lit';
export declare class CheckboxCi extends LitElement {
    private static nextId;
    label: string;
    value: string;
    required: boolean;
    id: string;
    errors: Array<string>;
    static styles: import("lit").CSSResult;
    createRenderRoot(): this;
    get showFeedbackError(): string;
    private validate;
    private inputHandler;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ci-checkbox': CheckboxCi;
    }
}
