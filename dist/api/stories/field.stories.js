import { html } from 'lit';
import '../components/field.component.js';
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
const Template = ({ label = 'Label', placeholder = 'Placeholder', required = false, loading = false, type = 'text', disabled = false, size }) => {
    return html `
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
};
export const Regular = Template.bind({});
//# sourceMappingURL=field.stories.js.map