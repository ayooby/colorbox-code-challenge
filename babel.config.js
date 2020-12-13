/* eslint-disable no-template-curly-in-string */
module.exports = (api) => {
    api.cache(true);

    const presets = [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current',
                    browsers: ['last 2 versions'],
                },
            },
        ],
        '@babel/preset-react',
    ];

    const plugins = [
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-transform-runtime',
        '@babel/plugin-transform-react-constant-elements',
        '@loadable/babel-plugin',
        [
            require.resolve('babel-plugin-module-resolver'),
            {
                alias: {
                    components: './src/components',
                },
            },
        ],
        [
            'babel-plugin-transform-imports',
            {},
        ],
    ];

    return {
        presets,
        plugins,
    };
};
