import { TemplateResult } from 'lit';
import '../components/checkbox.component.js';
import { IGlobals } from '../dto';
interface Story<T> {
    (args: T, data: {
        globals: IGlobals;
    }): TemplateResult;
    args?: Partial<T>;
    argTypes?: Record<string, unknown>;
}
interface ArgTypes {
    label?: string;
    value?: string;
    required?: boolean;
}
declare const _default: {
    title: string;
    component: string;
    argTypes: {
        label: {
            control: string;
        };
        value: {
            control: string;
        };
        required: {
            control: string;
        };
    };
};
export default _default;
export declare const Regular: Story<ArgTypes>;
