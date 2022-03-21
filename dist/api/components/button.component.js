import { __decorate } from "tslib";
import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let ButtonComponent = class ButtonComponent extends LitElement {
    constructor() {
        super(...arguments);
        this.label = '';
        this.theme = 'brand';
        this.type = 'button';
        this.size = '';
        this.icon = '';
        this.outline = false;
        this.block = false;
        this.disabled = false;
        this.responsive = false;
        this.iconButton = false;
        this.noStroke = false;
        this.isLoading = false;
        this.textAlign = '';
    }
    createRenderRoot() { return this; }
    get cls() {
        const ret = [];
        if (this.theme) {
            ret.push(`ci-btn--${this.theme}`);
        }
        if (this.noStroke) {
            ret.push(`ci-btn--${this.theme}--no-stroke`);
        }
        if (this.outline) {
            ret.push(`ci-btn--${this.theme}--outline`);
        }
        if (this.block) {
            ret.push(`ci-btn--block`);
        }
        if (this.size) {
            ret.push(`ci-btn--${this.size}`);
        }
        if (this.icon) {
            ret.push(`ci-btn--icon`);
        }
        if (this.textAlign) {
            ret.push(`ci-btn--align-${this.textAlign}`);
        }
        if (this.responsive) {
            ret.push(`ci-btn--responsive`);
        }
        return ret.join(' ');
    }
    get clsIcon() {
        return `uil-${this.icon}`;
    }
    get text() {
        return this.iconButton || this.isLoading ? '' : this.label;
    }
    get loading() {
        return this.isLoading ? html `
            <div class="ci-loader-container">
                <div class="ci-loader"></div>
            </div>
        ` : '';
    }
    _click() {
        if (this.disabled || this.isLoading) {
            return;
        }
        console.log('clicando');
    }
    render() {
        return html `
            <button
                @click=${this._click}
                .type="${this.type}"
                class="ci-btn ${this.cls}"
                .disabled=${this.disabled}
            >
                <i ?hidden=${this.isLoading} class="uil ${this.clsIcon}"></i>

                ${this.text}
                ${this.loading}
            </button>
        `;
    }
};
ButtonComponent.styles = css ``;
__decorate([
    property()
], ButtonComponent.prototype, "label", void 0);
__decorate([
    property()
], ButtonComponent.prototype, "theme", void 0);
__decorate([
    property()
], ButtonComponent.prototype, "type", void 0);
__decorate([
    property()
], ButtonComponent.prototype, "size", void 0);
__decorate([
    property()
], ButtonComponent.prototype, "icon", void 0);
__decorate([
    property()
], ButtonComponent.prototype, "outline", void 0);
__decorate([
    property()
], ButtonComponent.prototype, "block", void 0);
__decorate([
    property()
], ButtonComponent.prototype, "disabled", void 0);
__decorate([
    property()
], ButtonComponent.prototype, "responsive", void 0);
__decorate([
    property({ attribute: 'icon-button' })
], ButtonComponent.prototype, "iconButton", void 0);
__decorate([
    property({ attribute: 'no-stroke' })
], ButtonComponent.prototype, "noStroke", void 0);
__decorate([
    property({ attribute: 'is-loading' })
], ButtonComponent.prototype, "isLoading", void 0);
__decorate([
    property({ attribute: 'text-align' })
], ButtonComponent.prototype, "textAlign", void 0);
ButtonComponent = __decorate([
    customElement('ci-button')
], ButtonComponent);
export { ButtonComponent };
//# sourceMappingURL=button.component.js.map