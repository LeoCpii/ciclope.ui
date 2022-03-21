import { TemplateResult } from 'lit';
import '../components/alert.component.js';
import { TState } from '../components/shared/dto.js';
interface Story<T> {
    (args: T, data: {
        globals: IGlobals;
    }): TemplateResult;
    args?: Partial<T>;
    argTypes?: Record<string, unknown>;
}
interface ArgTypes {
    theme: TState;
    message: string;
    action?: boolean;
    show?: boolean;
}
declare const _default: {
    title: string;
    component: string;
    argTypes: {
        theme: {
            options: string[];
            type: {
                name: string;
                required: boolean;
            };
            control: {
                type: string;
            };
        };
        message: {
            control: string;
        };
        action: {
            control: string;
        };
        show: {
            control: string;
        };
    };
};
export default _default;
export declare const Regular: Story<ArgTypes>;
