const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, "tsconfig.json"), [
  /* mapped paths to share */
]);

module.exports = {
  output: {
    uniqueName: "testFirstMicro",
    publicPath: "auto",
  },
  optimization: {
    runtimeChunk: false,
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    },
  },
  experiments: {
    outputModule: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      library: { type: "module" },

      name: "testFirstMicro",
      filename: "remoteEntry.js",
      exposes: {
        "./HomeModule": "./src/app/smart-components/home/home.module.ts",
      },

      shared: share({
        "@angular/core": { singleton: true, strictVersion: true, requiredVersion: "auto" },
        "@angular/common": { singleton: true, strictVersion: true, requiredVersion: "auto" },
        "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: "auto" },
        "@angular/router": { singleton: true, strictVersion: true, requiredVersion: "auto" },

        ...sharedMappings.getDescriptors(),
      }),
    }),
    sharedMappings.getPlugin(),
  ],
};