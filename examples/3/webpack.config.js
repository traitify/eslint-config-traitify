import path from "path";

export default () => {
  const config = {
    context: path.resolve(),
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
        path.resolve("src"),
        path.resolve("node_modules")
      ]
    }
  };

  return config;
};
