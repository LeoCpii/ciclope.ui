import { html, TemplateResult } from 'lit';
import '../components/field.component.js';
import { IValidSize, IValidTypes } from '../components/field.component.js';
import { IGlobals } from '../dto';

interface Story<T> {
    (args: T, data: { globals: IGlobals }): TemplateResult;
    args?: Partial<T>;
    argTypes?: Record<string, unknown>;
}

interface ArgTypes {
    label?: string;
    placeholder?: string;
    type?: IValidTypes;
    required?: boolean;
    loading?: boolean;
    disabled?: boolean;
    size?: IValidSize;
}

const types = ['standard', 'password', 'text', 'email', 'cep', 'cpf', 'cnpj', 'number', 'cel', 'tel', 'date', 'celWithDDD'];

export default {
    title: 'ci-field',
    component: 'FieldComponent',
    argTypes: {
        label: { control: 'text' },
        placeholder: { control: 'text' },
        type: {
            options: types,
            control: { type: 'select' }
        },
        required: { control: 'boolean' },
        loading: { control: 'boolean' },
        disabled: { control: 'boolean' },
        size: {
            options: ['', 'big'],
            control: { type: 'select' }
        }
    }
};

const Template: Story<ArgTypes> = ({
    label = 'Label',
    placeholder = 'Placeholder',
    required = false,
    loading = false,
    type = 'text',
    disabled = false,
    size
}: ArgTypes) => {
    return html`
    <ci-field
        .label=${label}
        .placeholder=${placeholder}
        .type=${type}
        .required=${required}
        .loading=${loading}
        .disabled=${disabled}
        .size=${size}
    ></ci-field>
  `;
}

export const Regular = Template.bind({});
