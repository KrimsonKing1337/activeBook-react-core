const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

module.exports = (env = {}, argv) => {
  const webpackMode = argv.mode;
  const { analyze, mobile, lib } = env;
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
  ];

  if (!lib) {
    plugins.push(
      new HtmlWebpackPlugin({
        template: './public/index.ejs',
        isMobile: !!mobile,
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: 'assets', to: 'assets' },
        ],
      }),
    );
  }

  if (analyze) {
    plugins.push(new BundleAnalyzerPlugin());
  }

  const tsLoader = !lib
    ? 'babel-loader'
    : {
      loader: 'ts-loader',
      options: {
        configFile: 'tsconfig-lib.json',
      },
    };

  const rules = [
    {
      test: /\.m?js/,
      resolve: {
        fullySpecified: false,
      },
    },
    {
      test: /\.tsx?$/,
      use: [tsLoader, {
        loader: 'ifdef-loader',
        options: {
          lib: lib,
        },
      }],
      exclude: /node_modules/,
    },
    {
      test: /\.s?css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[name]__[local]__[hash:base64:5]',
            },
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              ident: 'postcss',
              plugins: [
                require('autoprefixer'),
              ],
            },
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
  ];

  if (mobile) {
    rules.push({
      test: /\.tsx?$/,
      loader: 'string-replace-loader',
      options: {
        search: '/assets',
        replace: 'file:///android_asset/www/assets',
        flags: 'g',
      },
    });
  }

  const buildDir = path.join(__dirname, (mobile ? 'cordova/www' : 'dist'));

  const entry = lib
    ? {
      'lib': './src/lib.ts',
      'components': './src/components/index.ts',
    }
    : [
      'core-js/stable',
      './src/index',
    ];

  const library = lib ? {
    name: 'core',
    type: 'umd',
    umdNamedDefine: true,
  } : undefined;

  const externals = lib ? {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
    },
  } : undefined;

  return {
    entry: entry,
    mode: webpackMode,
    devtool: !isProd ? 'eval-source-map' : false,
    devServer: {
      contentBase: buildDir,
      port: 3001, // todo
      historyApiFallback: true,
      hot: true,
      liveReload: false,
    },
    output: {
      // ???????????? publicPath ?????????? ?????? ??????????????. ?????? ???? ?????????? ?????????? bundle.min.js, ???????? ?????? ???????? ???????????????????? ?? '/'
      publicPath: mobile ? '' : '/',
      path: lib ? path.join(__dirname, 'lib') : buildDir,
      // filename: 'bundle.min.js',
      filename: '[name].js',
      library: library,
      // umdNamedDefine: true,
    },
    target: !isProd ? 'web' : ['web', 'es5'],
    externals: externals,
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
      rules: rules,
    },
    plugins: plugins,
    optimization: {
      minimizer: [new TerserPlugin({ extractComments: false })],
    },
  };
};
