var AlertCi_1;
import { __decorate } from "tslib";
import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { animate } from '@lit-labs/motion';
let AlertCi = AlertCi_1 = class AlertCi extends LitElement {
    constructor() {
        super(...arguments);
        this.message = '';
        this.theme = 'success';
        this.action = false;
        this.show = false;
    }
    createRenderRoot() { return this; }
    get icon() {
        return `uil-${AlertCi_1.icons[this.theme]}`;
    }
    get cls() {
        const ret = [];
        if (this.theme) {
            ret.push(`ci-alert--${this.theme}`);
        }
        if (this.show) {
            ret.push(`ci-slide`);
        }
        return ret.join(' ');
    }
    render() {
        return html `
        <div class="ci-alert ${this.cls}" ${animate()}>
            <div>
                <i class="uil ci-alert-icon ${this.icon}"></i>
                ${this.message}
            </div>
            <button ?hidden=${!this.action} type="button" class="ci-btn ci-btn--icon ci-btn--icon--no-shadow">
                <i class="uil uil-times"></i>
            </button>
        </div>
        `;
    }
};
AlertCi.styles = css ``;
AlertCi.icons = {
    danger: 'times-square',
    success: 'thumbs-up',
    warning: 'exclamation-triangle',
    info: 'info-circle'
};
__decorate([
    property()
], AlertCi.prototype, "message", void 0);
__decorate([
    property()
], AlertCi.prototype, "theme", void 0);
__decorate([
    property()
], AlertCi.prototype, "action", void 0);
__decorate([
    property()
], AlertCi.prototype, "show", void 0);
AlertCi = AlertCi_1 = __decorate([
    customElement('ci-alert')
], AlertCi);
export { AlertCi };
//# sourceMappingURL=alert.component.js.map