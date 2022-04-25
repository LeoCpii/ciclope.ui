import { html, css, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { animate } from '@lit-labs/motion';
import { Validator } from './shared/services/validator.service';
import { Formatter, IConfig } from './shared/services/formatter.service';
import { MASKS, NUMBER, NUMBER_MASK, FIELD_MESSAGES, ITypes } from './shared/const/field.const';
import IMask from 'imask';

export type IValidTypes = 'password' | 'text' | 'email' | 'cep' | 'cpf' | 'cnpj' | 'cel' | 'celWithDDD' | 'tel' | 'date';
export type IValidSize = 'big';

interface ITypeMask {
    cep: IConfig;
    cpf: IConfig;
    cnpj: IConfig;
    cel: IConfig;
    celWithDDD: IConfig;
}

@customElement('ci-field')
export class FieldCi extends LitElement {
    private static nextId = 0;

    @property() label!: string;
    @property() placeholder = '';
    @property() value = '';
    @property() icon!: string;
    @property() name!: string;
    @property() type!: IValidTypes;
    @property() size!: IValidSize;
    @property() required!: boolean;
    @property() loading!: boolean;
    @property() disabled!: boolean;

    @state() errors: Array<string> = [];
    @state() id = `field_${++FieldCi.nextId}`;
    @state() typeState!: IValidTypes;

    private validator = new Validator();
    private eyeIcon: 'eye' | 'eye-slash' = 'eye';

    static styles = css``;

    createRenderRoot() { return this; }

    connectedCallback() {
        super.connectedCallback();
        this.typeState = this.type;
    }

    get getType(): string {
        if (['password'].includes(this.type)) { return this.type; }
        if (NUMBER.includes(this.type)) { return 'tel'; }

        return 'text';
    }

    get labelCls(): string {
        const ret = [];
        if (this.required) { ret.push(`ci-label--required`); }
        return ret.join(' ');
    }

    get iconCls(): string {
        const ret = [];
        const icon = this.icon || this.eyeIcon;
        ret.push(`uil-${icon}`);
        return ret.join(' ');
    }

    get fieldCls(): string {
        const ret = [];
        if (this.errors.length) { ret.push(`ci-field--invalid`); }
        if (this.disabled || this.loading) { ret.push(`ci-field--disabled`); }
        if (this.size === 'big') { ret.push(`ci-field--big`); }
        return ret.join(' ');
    }

    get showFeedbackError(): string {
        const ret = [];
        if (this.errors.length) { ret.push(`ci-feedback--error--active`); }
        return ret.join(' ');
    }

    get loadingHTML() {
        return this.loading ? html`
            <div class="ci-loader-container">
                <div class="ci-loader"></div>
            </div>
        ` : '';
    }

    get iconHTML() {
        return ['password'].includes(this.typeState) ? html`
            <div @click=${this.toggle} class="ci-icon ci-icon--pointer">
                <i class="uil ${this.iconCls}"></i>
            </div>` : '';
    }

    get input(): HTMLElement {
        return document.getElementById(this.id) as HTMLElement;
    }

    private toggle() {
        this.type = this.type === 'text' ? 'password' : 'text';
        this.eyeIcon = this.eyeIcon === 'eye' ? 'eye-slash' : 'eye';
    }

    private sanitize(value: string) {
        const regex = /[/A-Z!@#$%^&*()-\.,.\s+?":{}|<>]/g;
        return value.replace(regex, '');
    }

    private sanitizeNumber(value: string) {
        const clean = value.replace(',', '.');
        return clean;
    }

    private clean(value: string): string {
        let clean: string = value;
        if (value) {
            if (this.type === 'email') { clean = value; }
            if (NUMBER_MASK.includes(this.type)) { clean = this.sanitizeNumber(value); }
            if (MASKS.includes(this.type)) { clean = this.sanitize(value); }
        }
        return clean;
    }

    private validate(value: string): boolean {

        this.errors = [];
        const data: any = {};

        function isEmpty(value: string | number) {
            return value === '' || value === 0 || value === undefined || value === null;
        }

        data.required = this.required ? isEmpty(value) : false;
        data.cpf = this.type === 'cpf' ? !this.validator.isValidCpf(value) : false;
        data.cnpj = this.type === 'cnpj' ? !this.validator.isValidCnpj(value) : false;
        data.email = this.type === 'email' ? !this.validator.isValidEmail(value) : false;
        data.tel = this.type === 'tel' ? !this.validator.isValidTel(value) : false;
        data.cel = this.type === 'cel' ? !this.validator.isValidCel(value) : false;
        data.password = this.type === 'password' ? !this.validator.isValidPassword(value) : false;
        data.cep = this.type === 'cep' ? !this.validator.isValidCep(value) : false;

        const hasError = Object.keys(data).some(key => data[key]);

        if (hasError) {
            const att = Object.keys(data).find(key => data[key]) as keyof ITypes;
            this.errors.push(FIELD_MESSAGES[att]);
        }

        return !Boolean(this.errors.length);
    }

    private inputHandler(e: { target: { value: string } }) {
        const value = e.target['value'] || '';

        if (MASKS.includes(this.type)) {
            const format = Formatter.config[this.type as keyof ITypeMask].example;
            const options = { mask: format };
            IMask(this.input, options)
        }

        const sanitize = this.clean(value);
        const isValid = this.validate(sanitize);

        if (isValid) {
            this.dispatchEvent(
                new CustomEvent('ci-change', {
                    detail: { value }
                })
            );
        }
    }

    render() {
        return html`
            <div class="ci-container-field">
                <div class="ci-label ${this.labelCls}">${this.label}</div>
                <div class="ci-field ${this.fieldCls}">
                    <input
                        .name=${this.name}
                        .id=${this.id}
                        .type=${this.getType}
                        .placeholder=${this.placeholder}
                        .value=${this.value}
                        .disabled=${this.disabled || this.loading}
                        @focus=${this.inputHandler}>

                    ${this.loadingHTML}
                    ${this.iconHTML}
                </div>
                <div class="ci-feedback ci-feedback--error ${this.showFeedbackError}" ${animate()}>
                    ${this.errors.map(e => html`<span>${e}</span>`)}
                </div>
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'ci-field': FieldCi;
    }
}
