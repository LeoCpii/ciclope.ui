"use strict";
var FieldCi_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldCi = void 0;
const tslib_1 = require("tslib");
const lit_1 = require("lit");
const decorators_js_1 = require("lit/decorators.js");
const motion_1 = require("@lit-labs/motion");
const validator_service_1 = require("./shared/services/validator.service");
const formatter_service_1 = require("./shared/services/formatter.service");
const field_const_1 = require("./shared/const/field.const");
const imask_1 = tslib_1.__importDefault(require("imask"));
let FieldCi = FieldCi_1 = class FieldCi extends lit_1.LitElement {
    constructor() {
        super(...arguments);
        this.placeholder = '';
        this.value = '';
        this.errors = [];
        this.id = `field_${++FieldCi_1.nextId}`;
        this.validator = new validator_service_1.Validator();
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
        if (field_const_1.NUMBER.includes(this.type)) {
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
        return this.loading ? (0, lit_1.html) `
            <div class="ci-loader-container">
                <div class="ci-loader"></div>
            </div>
        ` : '';
    }
    get iconHTML() {
        return ['password'].includes(this.typeState) ? (0, lit_1.html) `
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
            if (field_const_1.NUMBER_MASK.includes(this.type)) {
                clean = this.sanitizeNumber(value);
            }
            if (field_const_1.MASKS.includes(this.type)) {
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
            this.errors.push(field_const_1.FIELD_MESSAGES[att]);
        }
        return !Boolean(this.errors.length);
    }
    inputHandler(e) {
        const value = e.target['value'] || '';
        if (field_const_1.MASKS.includes(this.type)) {
            const format = formatter_service_1.Formatter.config[this.type].example;
            const options = { mask: format };
            (0, imask_1.default)(this.input, options);
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
        return (0, lit_1.html) `
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
                <div class="ci-feedback ci-feedback--error ${this.showFeedbackError}" ${(0, motion_1.animate)()}>
                    ${this.errors.map(e => (0, lit_1.html) `<span>${e}</span>`)}
                </div>
            </div>
        `;
    }
};
FieldCi.nextId = 0;
FieldCi.styles = (0, lit_1.css) ``;
tslib_1.__decorate([
    (0, decorators_js_1.property)()
], FieldCi.prototype, "label", void 0);
tslib_1.__decorate([
    (0, decorators_js_1.property)()
], FieldCi.prototype, "placeholder", void 0);
tslib_1.__decorate([
    (0, decorators_js_1.property)()
], FieldCi.prototype, "value", void 0);
tslib_1.__decorate([
    (0, decorators_js_1.property)()
], FieldCi.prototype, "icon", void 0);
tslib_1.__decorate([
    (0, decorators_js_1.property)()
], FieldCi.prototype, "name", void 0);
tslib_1.__decorate([
    (0, decorators_js_1.property)()
], FieldCi.prototype, "type", void 0);
tslib_1.__decorate([
    (0, decorators_js_1.property)()
], FieldCi.prototype, "size", void 0);
tslib_1.__decorate([
    (0, decorators_js_1.property)()
], FieldCi.prototype, "required", void 0);
tslib_1.__decorate([
    (0, decorators_js_1.property)()
], FieldCi.prototype, "loading", void 0);
tslib_1.__decorate([
    (0, decorators_js_1.property)()
], FieldCi.prototype, "disabled", void 0);
tslib_1.__decorate([
    (0, decorators_js_1.state)()
], FieldCi.prototype, "errors", void 0);
tslib_1.__decorate([
    (0, decorators_js_1.state)()
], FieldCi.prototype, "id", void 0);
tslib_1.__decorate([
    (0, decorators_js_1.state)()
], FieldCi.prototype, "typeState", void 0);
FieldCi = FieldCi_1 = tslib_1.__decorate([
    (0, decorators_js_1.customElement)('ci-field')
], FieldCi);
exports.FieldCi = FieldCi;
//# sourceMappingURL=field.component.js.map