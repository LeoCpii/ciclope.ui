"use strict";
var CheckboxCi_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckboxCi = void 0;
const tslib_1 = require("tslib");
const lit_1 = require("lit");
const decorators_js_1 = require("lit/decorators.js");
const field_const_1 = require("./shared/const/field.const");
const motion_1 = require("@lit-labs/motion");
let CheckboxCi = CheckboxCi_1 = class CheckboxCi extends lit_1.LitElement {
    constructor() {
        super(...arguments);
        this.label = '';
        this.value = '';
        this.id = `checkbox_${++CheckboxCi_1.nextId}`;
        this.errors = [];
    }
    createRenderRoot() { return this; }
    get showFeedbackError() {
        const ret = [];
        if (this.errors.length) {
            ret.push(`ci-feedback--error--active`);
        }
        return ret.join(' ');
    }
    validate(value) {
        this.errors = [];
        const data = {};
        data.required = this.required ? !value : false;
        const hasError = Object.keys(data).some(key => data[key]);
        if (hasError) {
            const att = Object.keys(data).find(key => data[key]);
            this.errors.push(field_const_1.FIELD_MESSAGES[att]);
        }
        return !Boolean(this.errors.length);
    }
    inputHandler(e) {
        const target = e.target;
        const value = target['value'] || '';
        const checked = target['checked'];
        const isValid = this.validate(checked);
        if (isValid) {
            this.dispatchEvent(new CustomEvent('ci-change', {
                detail: { value }
            }));
        }
    }
    render() {
        return (0, lit_1.html) `
            <div class="ci-container-field">
                <div class="ci-checkbox">
                    <input
                        type="checkbox"
                        .id=${this.id} 
                        value=${this.value}
                        @input=${this.inputHandler} />
                    <label for=${this.id}>${this.label}</label>
                </div>
                <div class="ci-feedback ci-feedback--error ${this.showFeedbackError}" ${(0, motion_1.animate)()}>
                    ${this.errors.map(e => (0, lit_1.html) `<span>${e}</span>`)}
                </div>
            </div>
        `;
    }
};
CheckboxCi.nextId = 0;
CheckboxCi.styles = (0, lit_1.css) ``;
tslib_1.__decorate([
    (0, decorators_js_1.property)()
], CheckboxCi.prototype, "label", void 0);
tslib_1.__decorate([
    (0, decorators_js_1.property)()
], CheckboxCi.prototype, "value", void 0);
tslib_1.__decorate([
    (0, decorators_js_1.property)()
], CheckboxCi.prototype, "required", void 0);
tslib_1.__decorate([
    (0, decorators_js_1.state)()
], CheckboxCi.prototype, "id", void 0);
tslib_1.__decorate([
    (0, decorators_js_1.state)()
], CheckboxCi.prototype, "errors", void 0);
CheckboxCi = CheckboxCi_1 = tslib_1.__decorate([
    (0, decorators_js_1.customElement)('ci-checkbox')
], CheckboxCi);
exports.CheckboxCi = CheckboxCi;
//# sourceMappingURL=checkbox.component.js.map