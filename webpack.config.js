const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    app: ["./src/index"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.js"
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["@babel/plugin-proposal-class-properties"]
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
