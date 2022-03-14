const { createDefaultConfig } = require('@open-wc/testing-karma');
const merge = require('deepmerge');

module.exports = config => {
    config.set(
        merge(createDefaultConfig(config), {
            frameworks: ['mocha', 'chai'],
            client: {
                mocha: { ui: 'bdd' }
            },
            files: [
                {
                    pattern: config.grep ? config.grep : 'dist/api/**/*.spec.js',
                    type: 'module'
                },
            ],
            esm: {
                // if you are using 'bare module imports' you will need this option
                nodeResolve: true,
            },
            coverageReporter: {
                type: 'html',
                dir: 'coverage/',
                check: {
                    emitWarning: false,
                    global: {
                        statements: 50,
                        branches: 50,
                        functions: 50,
                        lines: 50,
                        excludes: []
                    },
                    each: {
                        statements: 50,
                        branches: 50,
                        functions: 50,
                        lines: 50,
                        excludes: [],
                        overrides: {}
                    }
                }
            }
        }),
    );
    return config;
}