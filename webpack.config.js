const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

require('@babel/register');

module.exports = (env) => {
  const isDev = env.MODE === 'DEV' ? true : false;
  return {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
      filename: 'js/bundle.[hash].min.js',
      path: path.resolve(__dirname, 'build'),
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
      rules: [
        // TS
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: 'ts-loader',
        },
        // CSS, SCSS Files
        {
          test: /\.(s[ac]ss|css)$/,
          exclude: /node_modules/,
          use: [
            'css-modules-typescript-loader',
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true,
                sourceMap: isDev,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: isDev,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: isDev,
                postcssOptions: {
                  plugins: [['autoprefixer']],
                },
              },
            },
          ],
        },
        // IMG
        {
          test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: '[path][name].[ext]',
          },
        },
      ],
    },

    plugins: [
      new CleanWebpackPlugin({ cleanStaleWebpackAssets: true }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'public/index.html',
        inject: 'body',
      }),
    ],
  };
};
