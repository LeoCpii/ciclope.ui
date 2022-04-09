import { html, TemplateResult } from 'lit';
import '../components/checkbox.component.js';
import { IGlobals } from '../dto';

interface Story<T> {
    (args: T, data: { globals: IGlobals }): TemplateResult;
    args?: Partial<T>;
    argTypes?: Record<string, unknown>;
}

// eslint-disable-next-line
interface ArgTypes {
    label?: string;
    value?: string;
    required?: boolean;
}

export default {
    title: 'ci-checkbox',
    component: 'CardCi',
    argTypes: {
        label: { control: 'text' },
        value: { control: 'text' },
        required: { control: 'boolean' },
    }
};

const Template: Story<ArgTypes> = ({
    label = 'Label',
    value = 'Valor 1',
    required = false
}: ArgTypes) => {
    return html`
    <ci-checkbox
        .label=${label}
        .value=${value}
        .required=${required}
    ></ci-checkbox>
  `;
}

export const Regular = Template.bind({});
