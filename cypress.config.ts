import { defineConfig } from 'cypress';
import startDevServer from '@cypress/webpack-dev-server';
import webpackConfig from './cypress/webpack.config';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('dev-server:start', (options) =>
        startDevServer({
          options,
          webpackConfig,
        }),
      );
      return config;
    },
    baseUrl: 'http://localhost:3000',
  },
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
});
