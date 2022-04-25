"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardCi = void 0;
const tslib_1 = require("tslib");
const lit_1 = require("lit");
const decorators_js_1 = require("lit/decorators.js");
let CardCi = class CardCi extends lit_1.LitElement {
    constructor() {
        super(...arguments);
        this.label = '';
    }
    createRenderRoot() { return this; }
    render() {
        return (0, lit_1.html) `
        <div class="ci-card">
            <div class="ci-card-header">
                <slot name="header"></slot>
            </div>
            <div class="ci-card-body">
                <slot name="body"></slot>
            </div>
            <div class="ci-card-footer"> 
                <slot name="footer"></slot>
            </div>
        </div>
        `;
    }
};
CardCi.styles = (0, lit_1.css) `
    `;
tslib_1.__decorate([
    (0, decorators_js_1.property)()
], CardCi.prototype, "label", void 0);
CardCi = tslib_1.__decorate([
    (0, decorators_js_1.customElement)('ci-card')
], CardCi);
exports.CardCi = CardCi;
//# sourceMappingURL=card.component.js.map