import { TemplateResult } from 'lit';
import '../components/field.component.js';
import { IValidSize, IValidTypes } from '../components/field.component.js';
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
    placeholder?: string;
    type?: IValidTypes;
    required?: boolean;
    loading?: boolean;
    disabled?: boolean;
    size?: IValidSize;
}
declare const _default: {
    title: string;
    component: string;
    argTypes: {
        label: {
            control: string;
        };
        placeholder: {
            control: string;
        };
        type: {
            options: string[];
            control: {
                type: string;
            };
        };
        required: {
            control: string;
        };
        loading: {
            control: string;
        };
        disabled: {
            control: string;
        };
        size: {
            options: string[];
            control: {
                type: string;
            };
        };
    };
};
export default _default;
export declare const Regular: Story<ArgTypes>;
