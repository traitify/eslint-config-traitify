import path from "path";

export default () => {
  const config = {
    context: path.resolve(),
    devtool: "source-map",
    entry: ["./index.js"],
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
      extensions: [".js"],
      modules: [
        path.resolve("src"),
        path.resolve("node_modules")
      ]
    }
  };

  return config;
};
