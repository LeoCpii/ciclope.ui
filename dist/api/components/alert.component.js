var AlertComponent_1;
import { __decorate } from "tslib";
import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { animate } from '@lit-labs/motion';
let AlertComponent = AlertComponent_1 = class AlertComponent extends LitElement {
    constructor() {
        super(...arguments);
        this.message = '';
        this.theme = 'success';
        this.action = false;
        this.show = false;
    }
    createRenderRoot() { return this; }
    get icon() {
        return `uil-${AlertComponent_1.icons[this.theme]}`;
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
AlertComponent.styles = css ``;
AlertComponent.icons = {
    danger: 'times-square',
    success: 'thumbs-up',
    warning: 'exclamation-triangle',
    info: 'info-circle'
};
__decorate([
    property()
], AlertComponent.prototype, "message", void 0);
__decorate([
    property()
], AlertComponent.prototype, "theme", void 0);
__decorate([
    property()
], AlertComponent.prototype, "action", void 0);
__decorate([
    property()
], AlertComponent.prototype, "show", void 0);
AlertComponent = AlertComponent_1 = __decorate([
    customElement('ci-alert')
], AlertComponent);
export { AlertComponent };
//# sourceMappingURL=alert.component.js.map