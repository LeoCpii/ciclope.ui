import { LitElement } from 'lit';
export declare type IValidTypes = 'password' | 'text' | 'email' | 'cep' | 'cpf' | 'cnpj' | 'cel' | 'celWithDDD' | 'tel' | 'date';
export declare type IValidSize = 'big';
export declare class FieldCi extends LitElement {
    private static nextId;
    label: string;
    placeholder: string;
    value: string;
    icon: string;
    name: string;
    type: IValidTypes;
    size: IValidSize;
    required: boolean;
    loading: boolean;
    disabled: boolean;
    errors: Array<string>;
    id: string;
    typeState: IValidTypes;
    private validator;
    private eyeIcon;
    static styles: import("lit").CSSResult;
    createRenderRoot(): this;
    connectedCallback(): void;
    get getType(): string;
    get labelCls(): string;
    get iconCls(): string;
    get fieldCls(): string;
    get showFeedbackError(): string;
    get loadingHTML(): "" | import("lit-html").TemplateResult<1>;
    get iconHTML(): "" | import("lit-html").TemplateResult<1>;
    get input(): HTMLElement;
    private toggle;
    private sanitize;
    private sanitizeNumber;
    private clean;
    private validate;
    private inputHandler;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ci-field': FieldCi;
    }
}
