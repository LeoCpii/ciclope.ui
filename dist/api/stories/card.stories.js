import { html } from 'lit';
import '../components/card.component.js';
export default {
    title: 'ci-card',
    component: 'CardComponent',
    argTypes: {}
};
const Template = ({}) => {
    return html `
    <ci-card>
        <p slot="header">Header</p>
        <p slot="body">Body</p>
        <p slot="footer">
    </ci-card>
  `;
};
export const Regular = Template.bind({});
//# sourceMappingURL=card.stories.js.map