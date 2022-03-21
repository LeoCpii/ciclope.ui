import { html, TemplateResult } from 'lit';
import '../components/alert.component.js';
import { TState, IGlobals } from '../dto';

interface Story<T> {
    (args: T, data: { globals: IGlobals }): TemplateResult;
    args?: Partial<T>;
    argTypes?: Record<string, unknown>;
}

interface ArgTypes {
    theme: TState,
    message: string;
    action?: boolean;
    show?: boolean;
}

export default {
    title: 'ci-alert',
    component: 'AlertComponent',
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

const Template: Story<ArgTypes> = ({
    theme = 'success',
    message = 'Um texto bem maneiro aqui pra apresentar um componente maneiro',
    action = false,
    show = false
}: ArgTypes) => {
    return html`
    <ci-alert
        .theme=${theme}
        .message=${message}
        .action=${action}
        .show=${show}
    ></ci-alert>
  `;
}

export const Regular = Template.bind({});
