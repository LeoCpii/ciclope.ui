import { TemplateResult } from 'lit';
interface IGlobals {
    locale: 'en' | 'br';
    measureEnabled: false;
    outline: false;
    theme: 'light';
    mode: 'light' | 'dark';
}
declare const _default: {
    title: string;
    component: string;
    argTypes: {
        label: {
            control: string;
        };
    };
};
export default _default;
interface Story<T> {
    (args: T, data: {
        globals: IGlobals;
    }): TemplateResult;
    args?: Partial<T>;
    argTypes?: Record<string, unknown>;
}
interface ArgTypes {
    label?: string;
}
export declare const Regular: Story<ArgTypes>;
export declare const CustomLabel: Story<ArgTypes>;
