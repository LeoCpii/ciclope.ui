import { __decorate } from "tslib";
import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let CardCi = class CardCi extends LitElement {
    constructor() {
        super(...arguments);
        this.label = '';
    }
    createRenderRoot() { return this; }
    render() {
        return html `
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
CardCi.styles = css ``;
__decorate([
    property()
], CardCi.prototype, "label", void 0);
CardCi = __decorate([
    customElement('ci-card')
], CardCi);
export { CardCi };
//# sourceMappingURL=card.component.js.map