import { html } from 'lit';
import '../components/alert.component.js';
export default {
    title: 'ci-alert',
    component: 'AlertCi',
    argTypes: {
        theme: {
            options: ['success', 'danger', 'warning', 'info'],
            type: { name: 'string', required: false },
            control: { type: 'select' }
        },
        message: { control: 'text' },
        action: { control: 'boolean' },
        show: { control: 'boolean' }
    }
};
const Template = ({ theme = 'success', message = 'Um texto bem maneiro aqui pra apresentar um componente maneiro', action = false, show = false }) => {
    return html `
    <ci-alert
        .theme=${theme}
        .message=${message}
        .action=${action}
        .show=${show}
    ></ci-alert>
  `;
};
export const Regular = Template.bind({});
//# sourceMappingURL=alert.stories.js.map