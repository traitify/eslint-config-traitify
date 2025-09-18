const path = require("path");

module.exports = () => {
  const config = {
    context: path.resolve(__dirname),
    devtool: "source-map",
    entry: ["./index.js"],
    externals: {
      "react": {
        amd: "react",
        commonjs: "react",
        commonjs2: "react",
        root: "React"
      },
      "react-dom": {
        amd: "react-dom",
        commonjs: "react-dom",
        commonjs2: "react-dom",
        root: "ReactDOM"
      }
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
          test: /\.(svg|woff2?|ttf|eot|jpe?g|png|gif)(\?.*)?$/i,
          type: "asset/resource"
        }
      ]
    },
    resolve: {
      extensions: [".jsx", ".js"],
      modules: [
        path.resolve(__dirname, "src"),
        path.resolve(__dirname, "node_modules")
      ]
    }
  };

  return config;
};
