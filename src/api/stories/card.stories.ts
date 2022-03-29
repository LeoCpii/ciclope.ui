import { html, TemplateResult } from 'lit';
import '../components/card.component.js';
import { IGlobals } from '../dto';

interface Story<T> {
    (args: T, data: { globals: IGlobals }): TemplateResult;
    args?: Partial<T>;
    argTypes?: Record<string, unknown>;
}

// eslint-disable-next-line
interface ArgTypes { }

export default {
    title: 'ci-card',
    component: 'CardComponent',
    argTypes: {}
};

const Template: Story<ArgTypes> = ({
}: ArgTypes) => {
    return html`
    <ci-card>
        <p slot="header">Header</p>
        <p slot="body">Body</p>
        <p slot="footer">
    </ci-card>
  `;
}

export const Regular = Template.bind({});
