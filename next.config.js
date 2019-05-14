const withSass = require("@zeit/next-sass");
// const { parsed: localEnv } = require("dotenv").config();
// const webpack = require("webpack");
//
// module.exports = withSass({
//   webpack(config) {
//     config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
//
//     return config;
//   }
// });

require("dotenv").config();

const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = withSass({
  webpack: config => {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, ".env"),
        systemvars: true
      })
    ];

    return config;
  }
});
