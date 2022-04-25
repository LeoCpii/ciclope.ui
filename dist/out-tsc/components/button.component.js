import { __decorate } from "tslib";
import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let ButtonCi = class ButtonCi extends LitElement {
    constructor() {
        super(...arguments);
        this.label = '';
        this.theme = 'brand';
        this.type = 'button';
        this.size = '';
        this.outline = false;
        this.block = false;
        this.disabled = false;
        this.responsive = false;
    }
    createRenderRoot() { return this; }
    connectedCallback() {
        super.connectedCallback();
        if (!this.icon && this.blank) {
            this.icon = 'external-link-alt';
        }
    }
    get cls() {
        const ret = [];
        if (this.theme && !this.link) {
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
        if (this.link) {
            ret.push(`ci-btn--link`);
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
    }
    render() {
        return html `
            <button
                @click=${this._click}
                class="ci-btn ${this.cls}"
                .type="${this.type}"
                .disabled=${this.disabled}
            >
                <i ?hidden=${this.isLoading} class="uil ${this.clsIcon}"></i>

                ${this.text}
                ${this.loading}
            </button>
        `;
    }
};
ButtonCi.styles = css ``;
__decorate([
    property()
], ButtonCi.prototype, "label", void 0);
__decorate([
    property()
], ButtonCi.prototype, "theme", void 0);
__decorate([
    property()
], ButtonCi.prototype, "type", void 0);
__decorate([
    property()
], ButtonCi.prototype, "size", void 0);
__decorate([
    property()
], ButtonCi.prototype, "icon", void 0);
__decorate([
    property()
], ButtonCi.prototype, "link", void 0);
__decorate([
    property()
], ButtonCi.prototype, "outline", void 0);
__decorate([
    property()
], ButtonCi.prototype, "block", void 0);
__decorate([
    property()
], ButtonCi.prototype, "disabled", void 0);
__decorate([
    property()
], ButtonCi.prototype, "responsive", void 0);
__decorate([
    property({ attribute: '_blank' })
], ButtonCi.prototype, "blank", void 0);
__decorate([
    property({ attribute: 'icon-button' })
], ButtonCi.prototype, "iconButton", void 0);
__decorate([
    property({ attribute: 'no-stroke' })
], ButtonCi.prototype, "noStroke", void 0);
__decorate([
    property({ attribute: 'is-loading' })
], ButtonCi.prototype, "isLoading", void 0);
__decorate([
    property({ attribute: 'text-align' })
], ButtonCi.prototype, "textAlign", void 0);
ButtonCi = __decorate([
    customElement('ci-button')
], ButtonCi);
export { ButtonCi };
//# sourceMappingURL=button.component.js.map