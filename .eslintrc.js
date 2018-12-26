module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 7,
        sourceType: 'module',
        ecmaFeatures: {
            arrowFunctions: true,
            defaultParams: true
        }
    },
    env: {
        browser: true
    },
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    extends: 'standard',
    // required to lint *.wpy files
    plugins: ['html'],
    settings: {
        'html/html-extensions': ['.html', '.wpy']
    },
    // add your custom rules here
    rules: {
        indent: [
            'error',
            4,
            {
                SwitchCase: 1
            }
        ],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-empty': 2,
        'no-eq-null': 2,
        'no-new': 2,
        'no-fallthrough': 2,
        'no-unreachable': 2,
        'no-var': 2,
        'no-return-assign': 0
    }
};
