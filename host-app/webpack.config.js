const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devServer: {
    port: 3000,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*", 
    },
  },
  output: {
    publicPath: "auto",
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
      name: "HostApp",
      filename: "remoteEntry.js",
      remotes: {
        EmailApp: "EmailApp@http://localhost:3001/remoteEntry.js",
        ChatApp: "ChatApp@http://localhost:3002/remoteEntry.js",
      },
      exposes: {
        "./CommonButton": "./src/Comps/MyButton", 
        "./IndexCSS": "./src/index.css",
        "./store": "./src/redux/store",
        "./emailSlice": "./src/redux/slices/emailSlice",
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
console.log('Exposing CommonButton:', path.resolve(__dirname, './src/components/CommonButton'));
