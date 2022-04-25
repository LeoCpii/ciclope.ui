"use strict";
var AlertCi_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertCi = void 0;
const tslib_1 = require("tslib");
const lit_1 = require("lit");
const decorators_js_1 = require("lit/decorators.js");
const motion_1 = require("@lit-labs/motion");
let AlertCi = AlertCi_1 = class AlertCi extends lit_1.LitElement {
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
        return (0, lit_1.html) `
        <div class="ci-alert ${this.cls}" ${(0, motion_1.animate)()}>
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
AlertCi.styles = (0, lit_1.css) ``;
AlertCi.icons = {
    danger: 'times-square',
    success: 'thumbs-up',
    warning: 'exclamation-triangle',
    info: 'info-circle'
};
tslib_1.__decorate([
    (0, decorators_js_1.property)()
], AlertCi.prototype, "message", void 0);
tslib_1.__decorate([
    (0, decorators_js_1.property)()
], AlertCi.prototype, "theme", void 0);
tslib_1.__decorate([
    (0, decorators_js_1.property)()
], AlertCi.prototype, "action", void 0);
tslib_1.__decorate([
    (0, decorators_js_1.property)()
], AlertCi.prototype, "show", void 0);
AlertCi = AlertCi_1 = tslib_1.__decorate([
    (0, decorators_js_1.customElement)('ci-alert')
], AlertCi);
exports.AlertCi = AlertCi;
//# sourceMappingURL=alert.component.js.map