import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

export type ITheme = 'brand' | 'contrast' | 'red' | 'green' | 'yellow' | 'blue' | 'default';

@customElement('lz-button')
export class ButtonComponent extends LitElement {
    @property() label = '';
    @property() theme: ITheme = 'brand';
    @property() type: 'button' | 'submit' = 'button';
    @property() size: 'small' | 'large' | 'default' = 'default';
    @property() icon = '';
    @property() outline = false;
    @property() block = false;
    @property() disabled = false;
    @property() responsive = false;
    @property({ attribute: 'icon-button' }) iconButton = false;
    @property({ attribute: 'no-stroke' }) noStroke = false;
    @property({ attribute: 'is-loading' }) isLoading = false;
    @property({ attribute: 'text-align' }) textAlign: 'left' | 'right' | 'default' = 'default';

    static styles = css``;

    createRenderRoot() { return this; }

    get cls(): string {
        const ret = [];

        if (this.theme !== 'default') { ret.push(`lz-btn--${this.theme}`); }
        if (this.noStroke) { ret.push(`lz-btn--${this.theme}--no-stroke`); }
        if (this.outline) { ret.push(`lz-btn--${this.theme}--outline`); }
        if (this.block) { ret.push(`lz-btn--block`); }
        if (this.size !== 'default') { ret.push(`lz-btn--${this.size}`); }
        if (this.icon) { ret.push(`lz-btn--icon`); }
        if (this.textAlign !== 'default') { ret.push(`lz-btn--align-${this.textAlign}`); }
        if (this.responsive) { ret.push(`lz-btn--responsive`); }

        return ret.join(' ');
    }

    get clsIcon(): string {
        return `uil-${this.icon}`;
    }

    get text() {
        return !this.iconButton && !this.isLoading ? this.label : ''
    }

    get loading() {
        return this.isLoading ? html`
            <div class="lz-loader-container">
                <div class="lz-loader"></div>
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
                class="lz-btn ${this.cls}"
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
        'lz-button': ButtonComponent;
    }
}