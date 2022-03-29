import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ITheme } from '../dto';

@customElement('ci-button')
export class ButtonCi extends LitElement {
    @property() label = '';
    @property() theme: ITheme = 'brand';
    @property() type: 'button' | 'submit' = 'button';
    @property() size: 'small' | 'large' | '' = '';
    @property() icon = '';
    @property() outline = false;
    @property() block = false;
    @property() disabled = false;
    @property() responsive = false;
    @property({ attribute: 'icon-button' }) iconButton = false;
    @property({ attribute: 'no-stroke' }) noStroke = false;
    @property({ attribute: 'is-loading' }) isLoading = false;
    @property({ attribute: 'text-align' }) textAlign: 'left' | 'right' | '' = '';

    static styles = css``;

    createRenderRoot() { return this; }

    get cls(): string {
        const ret = [];

        if (this.theme) { ret.push(`ci-btn--${this.theme}`); }
        if (this.noStroke) { ret.push(`ci-btn--${this.theme}--no-stroke`); }
        if (this.outline) { ret.push(`ci-btn--${this.theme}--outline`); }
        if (this.block) { ret.push(`ci-btn--block`); }
        if (this.size) { ret.push(`ci-btn--${this.size}`); }
        if (this.icon) { ret.push(`ci-btn--icon`); }
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
        console.log('clicando');
    }

    render() {
        return html`
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
}

declare global {
    interface HTMLElementTagNameMap {
        'ci-button': ButtonCi;
    }
}
