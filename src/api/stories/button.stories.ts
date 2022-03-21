import { html, TemplateResult } from 'lit';
import '../components/button.component.js';
import { ITheme } from '../components/shared/dto.js';

interface Story<T> {
    (args: T, data: { globals: IGlobals }): TemplateResult;
    args?: Partial<T>;
    argTypes?: Record<string, unknown>;
}

interface ArgTypes {
    theme?: ITheme;
    type?: 'button' | 'submit';
    label?: string;
    size?: 'small' | 'large' | 'default';
    icon?: string;
    iconButton?: boolean;
    outline?: boolean;
    block?: boolean;
    disabled?: boolean;
    responsive?: boolean;
    noStroke?: boolean;
    isLoading?: boolean;
    textAlign?: 'left' | 'right' | 'default';
}

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

const Template: Story<ArgTypes> = ({
    label = 'Label',
    theme = 'brand',
    size = 'default',
    type = 'button',
    block = false,
    outline = false,
    disabled = false,
    responsive = false,
    noStroke = false,
    isLoading = false,
    iconButton = false,
    icon = ''
}: ArgTypes) => {
    return html`
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
}

export const Regular = Template.bind({});
