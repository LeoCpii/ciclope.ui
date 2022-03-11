"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomThemeDefault = exports.CustomLabel = exports.Regular = void 0;
const lit_1 = require("lit");
exports.default = {
    title: 'lz-button',
    component: 'ButtonComponent',
    argTypes: {
        label: { control: 'text' },
        theme: {
            options: ['brand', 'accent', 'success', 'danger', 'warning', 'info'],
            control: { type: 'select' }
        }
    },
};
const Template = ({ label = 'Label', theme = 'brand' }, { globals }) => {
    return (0, lit_1.html) `
    <div class="root">
        <button type="button" class="lz-btn lz-btn--${theme}">${label}</button>
    </div>
  `;
};
exports.Regular = Template.bind({});
exports.CustomLabel = Template.bind({});
exports.CustomLabel.args = {
    label: 'My label'
};
exports.CustomThemeDefault = Template.bind({});
exports.CustomLabel.args = {
    theme: 'accent'
};
//# sourceMappingURL=button.stories.js.map