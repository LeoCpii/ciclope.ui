import { html, TemplateResult } from 'lit';

interface IGlobals {
    locale: 'en' | 'br';
    measureEnabled: false;
    outline: false;
    theme: 'light';
    mode: 'light' | 'dark';
}

export default {
    title: 'lz-button',
    component: 'ButtonComponent',
    argTypes: {
        label: { control: 'text' }
    },
};

interface Story<T> {
    (args: T, data: { globals: IGlobals }): TemplateResult;
    args?: Partial<T>;
    argTypes?: Record<string, unknown>;
}

interface ArgTypes {
    label?: string;
}

const Template: Story<ArgTypes> = ({
    label = 'Hello world'
}: ArgTypes, { globals }) => {
    return html`    
    <button type="button" class="lz-btn lz-btn--brand">${label}</button>
  `;
}

export const Regular = Template.bind({});

export const CustomLabel = Template.bind({});
CustomLabel.args = {
    label: 'My label'
};