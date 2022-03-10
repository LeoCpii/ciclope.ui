import { html } from 'lit';
export default {
    title: 'lz-button',
    component: 'ButtonComponent',
    argTypes: {
        label: { control: 'text' }
    },
};
const Template = ({ label = 'Hello world' }, { globals }) => {
    return html `    
    <button type="button" class="lz-btn lz-btn--brand">${label}</button>
  `;
};
export const Regular = Template.bind({});
export const CustomLabel = Template.bind({});
CustomLabel.args = {
    label: 'My label'
};
//# sourceMappingURL=button.stories.js.map