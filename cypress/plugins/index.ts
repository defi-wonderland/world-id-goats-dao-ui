import * as webpack from '@cypress/webpack-preprocessor';
import webpackOptions from '../webpack.config';

module.exports = (on: any) => {
  const options = {
    webpackOptions,
  };
  on('file:preprocessor', webpack(options));
};
