const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const TerserPlugin = require('terser-webpack-plugin');

const path = require('path');

module.exports = (env = {}, argv) => {
  const webpackMode = argv.mode;
  const { analyze } = env;
  const isProd = webpackMode === 'production';

  const plugins = [
    new CleanWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ];

  if (analyze) {
    plugins.push(new BundleAnalyzerPlugin());
  }

  return {
    entry: ['core-js/stable', './src/index'],
    mode: webpackMode,
    devtool: !isProd ? 'eval-source-map' : false,
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      port: 3000,
      historyApiFallback: true,
      hot: true,
      liveReload: false,
    },
    output: {
      publicPath: '/',
      path: path.join(__dirname, '/dist'),
      filename: 'bundle.min.js',
    },
    target: !isProd ? 'web' : ['web', 'es5'],
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.scss'],
      modules: [
        path.resolve(__dirname, './src'),
        path.resolve(__dirname, './node_modules'),
        path.resolve(__dirname, './assets'),
      ],
      alias: {
        '@src': path.resolve(__dirname, 'src'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@assets': path.resolve(__dirname, './assets'),
        '@utils': path.resolve(__dirname, 'src/utils'),
      },
    },
    module: {
      rules: [
        {
          test: /\.m?js/,
          resolve: {
            fullySpecified: false,
          },
        },
        {
          test: /\.tsx?$/,
          use: {
            loader: 'babel-loader',
          },
          exclude: /node_modules/,
        },
        {
          test: /\.s?css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                localsConvention: 'camelCase',
                modules: {
                  localIdentName: '[name]__[local]__[hash:base64:5]',
                },
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: () => [require('autoprefixer')()],
              },
            },
            { loader: 'sass-loader' },
          ],
        },
        {
          test: /\.svg$/,
          oneOf: [
            {
              resourceQuery: /sprite/,
              use: [
                {
                  loader: 'url-loader',
                  options: {
                    esModule: false,
                  },
                },
              ],
            },
            {
              use: ['@svgr/webpack'],
            },
          ],
        },
        {
          test: /\.(jpeg|jpg|png|docx)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                esModule: false,
              },
            },
          ],
        },
        { test: /\.(woff|woff2|eot|ttf)$/, use: ['url-loader?limit=100000'] },
      ],
    },
    plugins: plugins,
    optimization: {
      minimizer: [new TerserPlugin({ extractComments: false })],
    },
  };
};
