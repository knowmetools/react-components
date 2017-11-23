// load the default config generator.
const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');


module.exports = (baseConfig, env) => {

  const config = genDefaultConfig(baseConfig, env);

  config.module.rules.push({
    loader: require.resolve('awesome-typescript-loader'),
    test: /\.tsx?$/,
  });

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
