const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devServer: {
    port: 3001,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*", 
    },
  },
  output: {
    publicPath: "http://localhost:3001/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "EmailApp",
      filename: "remoteEntry.js",
      remotes: {
        HostApp: "HostApp@http://localhost:3000/remoteEntry.js", 
      },
      exposes: {
        "./EmailMain": "./src/EmailComponents/EmailMain",
        "./IndexCSS": "./src/index.css",
      },
      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true },
        "react-redux": { singleton: true },
        redux: { singleton: true },       
        "@reduxjs/toolkit": { singleton: true },

      },
        }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
