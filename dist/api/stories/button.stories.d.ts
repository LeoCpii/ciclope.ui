import { TemplateResult } from 'lit';
import '../components/button.component.js';
import { ITheme } from '../components/button.component.js';
interface Story<T> {
    (args: T, data: {
        globals: IGlobals;
    }): TemplateResult;
    args?: Partial<T>;
    argTypes?: Record<string, unknown>;
}
interface ArgTypes {
    theme?: ITheme;
    type?: 'button' | 'submit';
    label?: string;
    size?: 'small' | 'large' | 'default';
    icon?: string;
    iconButton?: boolean;
    outline?: boolean;
    block?: boolean;
    disabled?: boolean;
    responsive?: boolean;
    noStroke?: boolean;
    isLoading?: boolean;
    textAlign?: 'left' | 'right' | 'default';
}
declare const _default: {
    title: string;
    component: string;
    argTypes: {
        label: {
            control: string;
        };
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
        type: {
            options: string[];
            control: {
                type: string;
            };
        };
        size: {
            options: string[];
            control: {
                type: string;
            };
        };
        icon: {
            options: string[];
            control: {
                type: string;
            };
            description: string;
        };
        iconButton: {
            options: boolean[];
            control: {
                type: string;
            };
        };
        outline: {
            options: boolean[];
            control: {
                type: string;
            };
        };
        noStroke: {
            options: boolean[];
            control: {
                type: string;
            };
        };
        block: {
            options: boolean[];
            control: {
                type: string;
            };
        };
        disabled: {
            options: boolean[];
            control: {
                type: string;
            };
        };
        responsive: {
            options: boolean[];
            control: {
                type: string;
            };
        };
        isLoading: {
            control: {
                type: string;
            };
        };
    };
};
export default _default;
export declare const Regular: Story<ArgTypes>;
