import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('ci-card')
export class CardCi extends LitElement {
    @property() label = '';

    static styles = css`
    `;

    createRenderRoot() { return this; }

    render() {
        return html`
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
}

declare global {
    interface HTMLElementTagNameMap {
        'ci-card': CardCi;
    }
}
