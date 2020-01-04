module.exports = api => {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        corejs: 3,
        useBuiltIns: 'usage',
        debug: true,
        modules: false,
      },
    ],
    '@babel/react',
  ];

  const plugins = ['@babel/proposal-class-properties'];

  const env = {
    test: {
      presets: [['@babel/preset-env'], '@babel/react'],
    },
  };

  return {
    presets,
    plugins,
    env,
  };
};
