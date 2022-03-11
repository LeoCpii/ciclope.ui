import { html } from 'lit';
import '../components/button.component.js';
export default {
    title: 'lz-button',
    component: 'ButtonComponent',
    argTypes: {
        label: { control: 'text' },
        theme: {
            options: ['brand', 'accent', 'success', 'danger', 'warning', 'info'],
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
const Template = ({ label = 'Label', theme = 'brand', size = 'default', type = 'button', block = false, outline = false, disabled = false, responsive = false, noStroke = false, isLoading = false, iconButton = false, icon = '' }, { globals }) => {
    return html `
    <lz-button 
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
    ></lz-button>
  `;
};
export const Regular = Template.bind({});
//# sourceMappingURL=button.stories.js.map