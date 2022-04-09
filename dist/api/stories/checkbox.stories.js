import { html } from 'lit';
import '../components/checkbox.component.js';
export default {
    title: 'ci-checkbox',
    component: 'CardCi',
    argTypes: {
        label: { control: 'text' },
        value: { control: 'text' },
        required: { control: 'boolean' },
    }
};
const Template = ({ label = 'Label', value = 'Valor 1', required = false }) => {
    return html `
    <ci-checkbox
        .label=${label}
        .value=${value}
        .required=${required}
    ></ci-checkbox>
  `;
};
export const Regular = Template.bind({});
//# sourceMappingURL=checkbox.stories.js.map