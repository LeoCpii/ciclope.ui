import { fixture, html, assert } from '@open-wc/testing';
import { ButtonComponent } from '../components/button.component';

describe('lz-button', () => {
    it('Should be create a ButtonComponent instance', async () => {
        const element = document.createElement('lz-button');
        assert.instanceOf(element, ButtonComponent);
    });

    describe('SET', () => {
        it('Should be set theme', async () => {
            const theme = 'success';
            const component = await fixture<ButtonComponent>(html`<lz-button theme=${theme}></lz-button>`);
            const cls = component.getElementsByClassName(`lz-btn--${theme}`);
            assert.isTrue(Boolean(cls.length));
        });

        it('Should be set size', async () => {
            const size = 'large';
            const component = await fixture<ButtonComponent>(html`<lz-button size=${size}></lz-button>`);
            const cls = component.getElementsByClassName(`lz-btn--${size}`);
            assert.isTrue(Boolean(cls.length));
        });

        it('Should be set label', async () => {
            const label = 'Um texto aqui';
            const component = await fixture<ButtonComponent>(html`<lz-button label=${label}></lz-button>`);
            assert.equal(component.innerText, label);
        });

        it('Should be set type', async () => {
            const type = 'submit';
            const component = await fixture<ButtonComponent>(html`<lz-button type=${type}></lz-button>`);
            const att = component.getAttribute('type');
            assert.equal(att, type);
        });

        it('Should be set outline', async () => {
            const component = await fixture<ButtonComponent>(html`<lz-button outline=${true}></lz-button>`);
            const cls = component.getElementsByClassName(`lz-btn--brand--outline`);
            assert.isTrue(Boolean(cls.length));
        });

        it('Should be set block', async () => {
            const component = await fixture<ButtonComponent>(html`<lz-button block=${true}></lz-button>`);
            const cls = component.getElementsByClassName(`lz-btn--block`);
            assert.isTrue(Boolean(cls.length));
        });

        it('Should be set disabled', async () => {
            const component = await fixture<ButtonComponent>(html`<lz-button disabled=${true}></lz-button>`);
            const att = component.getAttribute('disabled');
            assert.isTrue(Boolean(att));
        });

        it('Should be set responsive', async () => {
            const component = await fixture<ButtonComponent>(html`<lz-button responsive=${true}></lz-button>`);
            const cls = component.getElementsByClassName(`lz-btn--responsive`);
            assert.isTrue(Boolean(cls.length));
        });

        it('Should be set iconButton', async () => {
            const component = await fixture<ButtonComponent>(html`<lz-button icon-button=${true}></lz-button>`);
            assert.equal(component.text, '');
        });

        it('Should be set noStroke', async () => {
            const component = await fixture<ButtonComponent>(html`<lz-button no-stroke=${true}></lz-button>`);
            const cls = component.getElementsByClassName(`lz-btn--brand--no-stroke`);
            assert.isTrue(Boolean(cls.length));
        });

        it('Should be set isLoading', async () => {
            const component = await fixture<ButtonComponent>(html`<lz-button is-loading=${true}></lz-button>`);
            const cls = component.getElementsByClassName(`lz-loader-container`);
            assert.isTrue(Boolean(cls.length));
        });

        it('Should be set textAlign', async () => {
            const align = 'left';
            const component = await fixture<ButtonComponent>(html`<lz-button text-align=${align}></lz-button>`);
            const cls = component.getElementsByClassName(`lz-btn--align-left`);
            assert.isTrue(Boolean(cls.length));
        });

        it('Should be set icon', async () => {
            const icon = 'check';
            const component = await fixture<ButtonComponent>(html`<lz-button icon=${icon}></lz-button>`);
            const cls = component.getElementsByClassName(`uil-${icon}`);
            assert.isTrue(Boolean(cls.length));
        });
    });
});
