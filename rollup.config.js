import merge from 'deepmerge';
import { createBasicConfig } from '@open-wc/building-rollup';

const baseConfig = createBasicConfig();

export default merge(baseConfig, {
    input: './dist/api/index.js',
    output: [
        {
            format: "cjs",
            file: 'bolin/index.js',
            sourcemap: true
        },
        {
            format: "esm",
            file: 'bolin/index.esm.js',
            sourcemap: true
        }
    ]
});
