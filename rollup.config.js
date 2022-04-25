import merge from 'deepmerge';
import { createBasicConfig } from '@open-wc/building-rollup';

const baseConfig = createBasicConfig();

export default merge(baseConfig, {
    input: './dist/out-tsc/index.js',
    output: [
        {
            format: "cjs",
            file: 'dist/api/index.js',
            sourcemap: true
        },
        {
            format: "esm",
            file: 'dist/api/index.esm.js',
            sourcemap: true
        }
    ]
});
