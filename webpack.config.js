const path = require("path");

module.exports = {
  entry: path.join(__dirname, "/frontend/index.js"),
  output: {
    path: path.join(__dirname, "/server/public/"),
    filename: "index.js",
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".css"],
  },
  module: {
    rules: [
      {
        test: /\.m?(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
        include: path.resolve(__dirname, "frontend"),
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
        include: path.resolve(__dirname, "frontend"),
      },
    ],
  },
};
