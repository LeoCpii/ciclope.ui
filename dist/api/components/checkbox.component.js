var CheckboxCi_1;
import { __decorate } from "tslib";
import { html, css, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { FIELD_MESSAGES } from './shared/const/field.const';
import { animate } from '@lit-labs/motion';
let CheckboxCi = CheckboxCi_1 = class CheckboxCi extends LitElement {
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
        console.log('hasError', hasError);
        if (hasError) {
            const att = Object.keys(data).find(key => data[key]);
            this.errors.push(FIELD_MESSAGES[att]);
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
        return html `
            <div class="ci-container-field">
                <div class="ci-checkbox">
                    <input
                        type="checkbox"
                        .id=${this.id} 
                        value=${this.value}
                        @input=${this.inputHandler} />
                    <label for=${this.id}>${this.label}</label>
                </div>
                <div class="ci-feedback ci-feedback--error ${this.showFeedbackError}" ${animate()}>
                    ${this.errors.map(e => html `<span>${e}</span>`)}
                </div>
            </div>
        `;
    }
};
CheckboxCi.nextId = 0;
CheckboxCi.styles = css ``;
__decorate([
    property()
], CheckboxCi.prototype, "label", void 0);
__decorate([
    property()
], CheckboxCi.prototype, "value", void 0);
__decorate([
    property()
], CheckboxCi.prototype, "required", void 0);
__decorate([
    state()
], CheckboxCi.prototype, "id", void 0);
__decorate([
    state()
], CheckboxCi.prototype, "errors", void 0);
CheckboxCi = CheckboxCi_1 = __decorate([
    customElement('ci-checkbox')
], CheckboxCi);
export { CheckboxCi };
//# sourceMappingURL=checkbox.component.js.map