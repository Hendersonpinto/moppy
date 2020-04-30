const { environment } = require("@rails/webpacker");
const { config } = require("@rails/webpacker");
const webpack = require("webpack");

// const customConfig = require("./custom");

// environment.config.merge(customConfig);
// environment.config.merge({ devtool: "none" });

// environment.config.externals = ["axios"];

// console.log(config.output_path);
// console.log(config.source_path);

//   const sasssLoader ={
//     test: /\.scss$/,
//     use: [
//       {
//         loader: 'css-loader',
//       }, {
//         loader: 'resolve-url-loader',
//       }, {
//         loader: 'sass-loader',
//         options: {
//           sourceMap: true,
//           sourceMapContents: false
//         }
//       }
//     ]
//   },

// environment.plugins.get("ExtractText");
// environment.plugins.append(
//   "Provide",
//   new webpack.ProvidePlugin({
//     $: "jquery",
//     jQuery: "jquery",
//     jquery: "jquery",
//     Popper: ["popper.js", "default"],
//   })
// );

// environment.loaders.get("sass").use.splice(-1, 0, {
//   loader: "resolve-url-loader",
//   options: {
//     attempts: 1,
//   },
// });

environment.loaders.get("sass").use.splice(-1, 0, {
  loader: "resolve-url-loader",
});

//   // Insert json loader at the end of list
//   environment.loaders.append('json', jsonLoader)

//   Insert loader at the top of list
//   environment.loaders.prepend('style', sasssLoader)

//   // Insert json loader after/before a given loader
//   environment.loaders.insert('json', jsonLoader, { after: 'style'} )
//   environment.loaders.insert('json', jsonLoader, { before: 'babel'} )

module.exports = environment;
