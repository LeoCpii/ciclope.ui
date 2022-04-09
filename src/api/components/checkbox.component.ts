import { html, css, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { FIELD_MESSAGES, ITypes } from './shared/const/field.const';
import { animate } from '@lit-labs/motion';

@customElement('ci-checkbox')
export class CheckboxCi extends LitElement {
    private static nextId = 0;

    @property() label = '';
    @property() value = '';
    @property() required!: boolean;

    @state() id = `checkbox_${++CheckboxCi.nextId}`;
    @state() errors: Array<string> = [];

    static styles = css``;

    createRenderRoot() { return this; }

    get showFeedbackError(): string {
        const ret = [];
        if (this.errors.length) { ret.push(`ci-feedback--error--active`); }
        return ret.join(' ');
    }

    private validate(value: boolean): boolean {
        this.errors = [];
        const data: any = {};

        data.required = this.required ? !value : false;

        const hasError = Object.keys(data).some(key => data[key]);

        console.log('hasError', hasError)

        if (hasError) {
            const att = Object.keys(data).find(key => data[key]) as keyof ITypes;
            this.errors.push(FIELD_MESSAGES[att]);
        }

        return !Boolean(this.errors.length);
    }


    private inputHandler(e: { target: { value: string; checked: boolean; } }) {
        const target = e.target;
        const value = target['value'] || '';
        const checked = target['checked'];
        
        const isValid = this.validate(checked);

        if (isValid) {
            this.dispatchEvent(
                new CustomEvent('ci-change', {
                    detail: { value }
                })
            );
        }
    }

    render() {
        return html`
            <div class="ci-container-field">
                <div class="ci-checkbox">
                    <input
                        type="checkbox"
                        .id=${this.id} 
                        value=${this.value}
                        @input=${this.inputHandler} />
                    <label for=${this.id}>${this.label}</label>
                </div>
                <div class="ci-feedback ci-feedback--error ${this.showFeedbackError}" ${animate()}>
                    ${this.errors.map(e => html`<span>${e}</span>`)}
                </div>
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'ci-checkbox': CheckboxCi;
    }
}
