"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomLabel = exports.Regular = void 0;
const lit_1 = require("lit");
exports.default = {
    title: 'lz-button',
    component: 'ButtonComponent',
    argTypes: {
        label: { control: 'text' }
    },
};
const Template = ({ label = 'Hello world' }, { globals }) => {
    return (0, lit_1.html) `    
    <button type="button" class="lz-btn lz-btn--brand">${label}</button>
  `;
};
exports.Regular = Template.bind({});
exports.CustomLabel = Template.bind({});
exports.CustomLabel.args = {
    label: 'My label'
};
//# sourceMappingURL=button.stories.js.map