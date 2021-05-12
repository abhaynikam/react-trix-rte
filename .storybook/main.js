const path = require('path');

module.exports = {
  stories: ['../stories/**/*.stories.js'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links', '@storybook/addon-cssresources'],
  webpackFinal: (config) => {
    return {
      ...config,
      module: {
        ...config.module,
        rules: [
          {
            test: /\.(scss)$/,
            loader: 'style-loader!css-loader!sass-loader'
          },
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            include: path.join(__dirname, '../stories'),
            use: [
              {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env', '@babel/preset-react']
                }
              }
            ]
          }
        ]
      },
      resolve: {
        extensions: ['.js', '.jsx', '.scss']
      },
    }
  }
};
