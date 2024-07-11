const { override, addWebpackModuleRule } = require("customize-cra");

module.exports = override(
  addWebpackModuleRule({
    test: /\.(ttf|eot|woff|woff2)$/,
    use: {
      loader: "file-loader",
      options: {
        name: "[name].[ext]",
        outputPath: "fonts/",
      },
    },
  })
);
