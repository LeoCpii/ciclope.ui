import { fixture, html, assert } from '@open-wc/testing';
import { ButtonCi } from '../components/button.component';

describe('ci-button', () => {
    it('Should be create a ButtonCi instance', async () => {
        const element = document.createElement('ci-button');
        assert.instanceOf(element, ButtonCi);
    });

    describe('SET', () => {
        it('Should be set theme', async () => {
            const theme = 'success';
            const component = await fixture<ButtonCi>(html`<ci-button theme=${theme}></ci-button>`);
            const cls = component.getElementsByClassName(`ci-btn--${theme}`);
            assert.isTrue(Boolean(cls.length));
        });

        it('Should be set size', async () => {
            const size = 'large';
            const component = await fixture<ButtonCi>(html`<ci-button size=${size}></ci-button>`);
            const cls = component.getElementsByClassName(`ci-btn--${size}`);
            assert.isTrue(Boolean(cls.length));
        });

        it('Should be set label', async () => {
            const label = 'Um texto aqui';
            const component = await fixture<ButtonCi>(html`<ci-button label=${label}></ci-button>`);
            assert.equal(component.innerText, label);
        });

        it('Should be set type', async () => {
            const type = 'submit';
            const component = await fixture<ButtonCi>(html`<ci-button type=${type}></ci-button>`);
            const att = component.getAttribute('type');
            assert.equal(att, type);
        });

        it('Should be set outline', async () => {
            const component = await fixture<ButtonCi>(html`<ci-button outline=${true}></ci-button>`);
            const cls = component.getElementsByClassName(`ci-btn--brand--outline`);
            assert.isTrue(Boolean(cls.length));
        });

        it('Should be set block', async () => {
            const component = await fixture<ButtonCi>(html`<ci-button block=${true}></ci-button>`);
            const cls = component.getElementsByClassName(`ci-btn--block`);
            assert.isTrue(Boolean(cls.length));
        });

        it('Should be set disabled', async () => {
            const component = await fixture<ButtonCi>(html`<ci-button disabled=${true}></ci-button>`);
            const att = component.getAttribute('disabled');
            assert.isTrue(Boolean(att));
        });

        it('Should be set responsive', async () => {
            const component = await fixture<ButtonCi>(html`<ci-button responsive=${true}></ci-button>`);
            const cls = component.getElementsByClassName(`ci-btn--responsive`);
            assert.isTrue(Boolean(cls.length));
        });

        it('Should be set iconButton', async () => {
            const component = await fixture<ButtonCi>(html`<ci-button icon-button=${true}></ci-button>`);
            assert.equal(component.text, '');
        });

        it('Should be set noStroke', async () => {
            const component = await fixture<ButtonCi>(html`<ci-button no-stroke=${true}></ci-button>`);
            const cls = component.getElementsByClassName(`ci-btn--brand--no-stroke`);
            assert.isTrue(Boolean(cls.length));
        });

        it('Should be set isLoading', async () => {
            const component = await fixture<ButtonCi>(html`<ci-button is-loading=${true}></ci-button>`);
            const cls = component.getElementsByClassName(`ci-loader-container`);
            assert.isTrue(Boolean(cls.length));
        });

        it('Should be set textAlign', async () => {
            const align = 'left';
            const component = await fixture<ButtonCi>(html`<ci-button text-align=${align}></ci-button>`);
            const cls = component.getElementsByClassName(`ci-btn--align-left`);
            assert.isTrue(Boolean(cls.length));
        });

        it('Should be set icon', async () => {
            const icon = 'check';
            const component = await fixture<ButtonCi>(html`<ci-button icon=${icon}></ci-button>`);
            const cls = component.getElementsByClassName(`uil-${icon}`);
            assert.isTrue(Boolean(cls.length));
        });
    });
});
