import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { TState } from '../dto';
import { animate } from '@lit-labs/motion';

@customElement('ci-alert')
export class AlertComponent extends LitElement {
    @property() message = '';
    @property() theme: TState = 'success';
    @property() action = false;
    @property() show = false;

    static styles = css``;

    static icons = {
        danger: 'times-square',
        success: 'thumbs-up',
        warning: 'exclamation-triangle',
        info: 'info-circle'
    }

    createRenderRoot() { return this; }

    get icon(): string {
        return `uil-${AlertComponent.icons[this.theme]}`;
    }

    get cls(): string {
        const ret = [];

        if (this.theme) { ret.push(`ci-alert--${this.theme}`); }
        if (this.show) { ret.push(`ci-slide`); }

        return ret.join(' ');
    }

    render() {
        return html`
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
}

declare global {
    interface HTMLElementTagNameMap {
        'ci-alert': AlertComponent;
    }
}