// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';


const config = {
    entry: "./public/index.tsx",
    output: {
      filename: "bundle.js",
      path: path.resolve("./build"),
      publicPath: "/"
    },
    resolve: {
      fallback: {
        fs: false,
        path: false,
      },
      alias: aliasFromTsconfig,
      modules: ["node_modules"],
      extensions: [".ts", ".tsx", ".js"],
    },
    devServer,
    mode,
    plugins: [
      new HtmlWebPackPlugin({
        template: "./public/index.html",
        filename: "index.html",
      }),
      new webpack.EnvironmentPlugin({
        NODE_ENV: mode,
        ...process.env,
      }),
      new CleanWebpackPlugin(),
    ],
    module: {
      rules: [
        {
          test: /\.png$/,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 10000,
                name: 'static/[name].[ext]',
              },
            },
          ],
        },
        {
          test: /\.(ts|tsx)$/,
          use: ["babel-loader", "ts-loader"],
        },
        {
          test: /\.md$/,
          use: "raw-loader",
        },
      ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        
        
        config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
        
    } else {
        config.mode = 'development';
    }
    return config;
};
