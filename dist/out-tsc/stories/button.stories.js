import { html } from 'lit';
import '../components/button.component.js';
export default {
    title: 'ci-button',
    component: 'ButtonCi',
    argTypes: {
        label: { control: 'text' },
        theme: {
            options: ['brand', 'accent', 'base', 'success', 'danger', 'warning', 'info'],
            type: { name: 'string', required: false },
            control: { type: 'select' }
        },
        type: {
            options: ['submit', 'button'],
            control: { type: 'select' }
        },
        size: {
            options: ['small', 'default', 'large'],
            control: { type: 'radio' }
        },
        icon: {
            options: ['', 'star', 'envelope-alt', 'grin'],
            control: { type: 'select' },
            description: 'https://iconscout.com/unicons/explore/line'
        },
        iconButton: {
            options: [true, false],
            control: { type: 'boolean' }
        },
        outline: {
            options: [true, false],
            control: { type: 'boolean' }
        },
        noStroke: {
            options: [true, false],
            control: { type: 'boolean' }
        },
        block: {
            options: [true, false],
            control: { type: 'boolean' }
        },
        disabled: {
            options: [true, false],
            control: { type: 'boolean' }
        },
        responsive: {
            options: [true, false],
            control: { type: 'boolean' }
        },
        isLoading: {
            control: { type: 'boolean' }
        }
    }
};
// @property() icon: string = '';
const Template = ({ label = 'Label', theme = 'brand', size = 'default', type = 'button', block = false, outline = false, disabled = false, responsive = false, noStroke = false, isLoading = false, iconButton = false, icon = '' }) => {
    return html `
    <ci-button 
        .label=${label}
        .theme=${theme}
        .type=${type}
        .icon=${icon}
        .iconButton=${iconButton}
        .outline=${outline}
        .size=${size}
        .block=${block}
        .disabled=${disabled}
        .responsive=${responsive}
        .noStroke=${noStroke}
        .isLoading=${isLoading}
    ></ci-button>
  `;
};
export const Regular = Template.bind({});
//# sourceMappingURL=button.stories.js.map