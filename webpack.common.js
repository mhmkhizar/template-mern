import resolve from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export const entry = "./src/main.js";
export const output = {
  filename: "index.js",
  path: resolve(__dirname, "dist"),
  clean: true,
};
export const plugins = [
  new HtmlWebpackPlugin({
    template: "./src/main.html",
  }),
];
export const module = {
  rules: [
    {
      test: /\.css$/i,
      use: ["style-loader", "css-loader", "postcss-loader"],
    },
    {
      test: /\.html$/i,
      loader: "html-loader",
    },
  ],
};
