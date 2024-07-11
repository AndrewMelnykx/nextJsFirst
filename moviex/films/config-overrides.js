const { override, addWebpackModuleRule } = require("customize-cra");

module.exports = override(
  addWebpackModuleRule({
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    use: [
      {
        loader: "file-loader",
        options: {
          outputPath: "fonts/",
        },
      },
    ],
  })
);
