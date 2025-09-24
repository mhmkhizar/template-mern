import merge from "webpack-merge";
import common from "./webpack.common.js";

export default merge(common, {
  mode: "development",
  devtool: "eval-source-map",
  // devtool: "source-map",
  // devtool: "cheap-module-source-map",
  devServer: {
    watchFiles: ["./src/main.html"],
  },
});
