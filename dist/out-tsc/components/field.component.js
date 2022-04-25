var FieldCi_1;
import { __decorate } from "tslib";
import { html, css, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { animate } from '@lit-labs/motion';
import { Validator } from './shared/services/validator.service';
import { Formatter } from './shared/services/formatter.service';
import { MASKS, NUMBER, NUMBER_MASK, FIELD_MESSAGES } from './shared/const/field.const';
import IMask from 'imask';
let FieldCi = FieldCi_1 = class FieldCi extends LitElement {
    constructor() {
        super(...arguments);
        this.placeholder = '';
        this.value = '';
        this.errors = [];
        this.id = `field_${++FieldCi_1.nextId}`;
        this.validator = new Validator();
        this.eyeIcon = 'eye';
    }
    createRenderRoot() { return this; }
    connectedCallback() {
        super.connectedCallback();
        this.typeState = this.type;
    }
    get getType() {
        if (['password'].includes(this.type)) {
            return this.type;
        }
        if (NUMBER.includes(this.type)) {
            return 'tel';
        }
        return 'text';
    }
    get labelCls() {
        const ret = [];
        if (this.required) {
            ret.push(`ci-label--required`);
        }
        return ret.join(' ');
    }
    get iconCls() {
        const ret = [];
        const icon = this.icon || this.eyeIcon;
        ret.push(`uil-${icon}`);
        return ret.join(' ');
    }
    get fieldCls() {
        const ret = [];
        if (this.errors.length) {
            ret.push(`ci-field--invalid`);
        }
        if (this.disabled || this.loading) {
            ret.push(`ci-field--disabled`);
        }
        if (this.size === 'big') {
            ret.push(`ci-field--big`);
        }
        return ret.join(' ');
    }
    get showFeedbackError() {
        const ret = [];
        if (this.errors.length) {
            ret.push(`ci-feedback--error--active`);
        }
        return ret.join(' ');
    }
    get loadingHTML() {
        return this.loading ? html `
            <div class="ci-loader-container">
                <div class="ci-loader"></div>
            </div>
        ` : '';
    }
    get iconHTML() {
        return ['password'].includes(this.typeState) ? html `
            <div @click=${this.toggle} class="ci-icon ci-icon--pointer">
                <i class="uil ${this.iconCls}"></i>
            </div>` : '';
    }
    get input() {
        return document.getElementById(this.id);
    }
    toggle() {
        this.type = this.type === 'text' ? 'password' : 'text';
        this.eyeIcon = this.eyeIcon === 'eye' ? 'eye-slash' : 'eye';
    }
    sanitize(value) {
        const regex = /[/A-Z!@#$%^&*()-\.,.\s+?":{}|<>]/g;
        return value.replace(regex, '');
    }
    sanitizeNumber(value) {
        const clean = value.replace(',', '.');
        return clean;
    }
    clean(value) {
        let clean = value;
        if (value) {
            if (this.type === 'email') {
                clean = value;
            }
            if (NUMBER_MASK.includes(this.type)) {
                clean = this.sanitizeNumber(value);
            }
            if (MASKS.includes(this.type)) {
                clean = this.sanitize(value);
            }
        }
        return clean;
    }
    validate(value) {
        this.errors = [];
        const data = {};
        function isEmpty(value) {
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
            const att = Object.keys(data).find(key => data[key]);
            this.errors.push(FIELD_MESSAGES[att]);
        }
        return !Boolean(this.errors.length);
    }
    inputHandler(e) {
        const value = e.target['value'] || '';
        if (MASKS.includes(this.type)) {
            const format = Formatter.config[this.type].example;
            const options = { mask: format };
            IMask(this.input, options);
        }
        const sanitize = this.clean(value);
        const isValid = this.validate(sanitize);
        if (isValid) {
            this.dispatchEvent(new CustomEvent('ci-change', {
                detail: { value }
            }));
        }
    }
    render() {
        return html `
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
                    ${this.errors.map(e => html `<span>${e}</span>`)}
                </div>
            </div>
        `;
    }
};
FieldCi.nextId = 0;
FieldCi.styles = css ``;
__decorate([
    property()
], FieldCi.prototype, "label", void 0);
__decorate([
    property()
], FieldCi.prototype, "placeholder", void 0);
__decorate([
    property()
], FieldCi.prototype, "value", void 0);
__decorate([
    property()
], FieldCi.prototype, "icon", void 0);
__decorate([
    property()
], FieldCi.prototype, "name", void 0);
__decorate([
    property()
], FieldCi.prototype, "type", void 0);
__decorate([
    property()
], FieldCi.prototype, "size", void 0);
__decorate([
    property()
], FieldCi.prototype, "required", void 0);
__decorate([
    property()
], FieldCi.prototype, "loading", void 0);
__decorate([
    property()
], FieldCi.prototype, "disabled", void 0);
__decorate([
    state()
], FieldCi.prototype, "errors", void 0);
__decorate([
    state()
], FieldCi.prototype, "id", void 0);
__decorate([
    state()
], FieldCi.prototype, "typeState", void 0);
FieldCi = FieldCi_1 = __decorate([
    customElement('ci-field')
], FieldCi);
export { FieldCi };
//# sourceMappingURL=field.component.js.map