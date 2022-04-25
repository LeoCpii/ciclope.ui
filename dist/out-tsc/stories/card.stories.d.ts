import { TemplateResult } from 'lit';
import '../components/card.component.js';
import { IGlobals } from '../dto';
interface Story<T> {
    (args: T, data: {
        globals: IGlobals;
    }): TemplateResult;
    args?: Partial<T>;
    argTypes?: Record<string, unknown>;
}
interface ArgTypes {
}
declare const _default: {
    title: string;
    component: string;
    argTypes: {};
};
export default _default;
export declare const Regular: Story<ArgTypes>;
