import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ITheme } from '../dto';

@customElement('ci-button')
export class ButtonCi extends LitElement {
    @property() label = '';
    @property() theme: ITheme = 'brand';
    @property() type: 'button' | 'submit' = 'button';
    @property() size: 'small' | 'large' | '' = '';
    @property() icon!: string;
    @property() link!: boolean;
    @property() outline = false;
    @property() block = false;
    @property() disabled = false;
    @property() responsive = false;
    @property({ attribute: '_blank' }) blank!: boolean;
    @property({ attribute: 'icon-button' }) iconButton!: boolean;
    @property({ attribute: 'no-stroke' }) noStroke!: boolean;
    @property({ attribute: 'is-loading' }) isLoading!: boolean;
    @property({ attribute: 'text-align' }) textAlign!: 'left' | 'right';

    static styles = css``;

    createRenderRoot() { return this; }

    connectedCallback() {
        super.connectedCallback();
        if (!this.icon && this.blank) {
            this.icon = 'external-link-alt';
        }
    }

    get cls(): string {
        const ret = [];

        if (this.theme && !this.link) { ret.push(`ci-btn--${this.theme}`); }
        if (this.noStroke) { ret.push(`ci-btn--${this.theme}--no-stroke`); }
        if (this.outline) { ret.push(`ci-btn--${this.theme}--outline`); }
        if (this.block) { ret.push(`ci-btn--block`); }
        if (this.size) { ret.push(`ci-btn--${this.size}`); }
        if (this.icon) { ret.push(`ci-btn--icon`); }
        if (this.link) { ret.push(`ci-btn--link`); }
        if (this.textAlign) { ret.push(`ci-btn--align-${this.textAlign}`); }
        if (this.responsive) { ret.push(`ci-btn--responsive`); }

        return ret.join(' ');
    }

    get clsIcon(): string {
        return `uil-${this.icon}`;
    }

    get text() {
        return this.iconButton || this.isLoading ? '' : this.label
    }

    get loading() {
        return this.isLoading ? html`
            <div class="ci-loader-container">
                <div class="ci-loader"></div>
            </div>
        ` : ''
    }

    _click() {
        if (this.disabled || this.isLoading) { return; }
    }

    render() {
        return html`
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
}

declare global {
    interface HTMLElementTagNameMap {
        'ci-button': ButtonCi;
    }
}
