module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            // This needs to be mirrored in tsconfig.json
            "@components": "./src/components",
            "@colors": "./src/styles/colors",
            "@assets": "./assets",
            "@screens": "./src/screens",
            types: "./src/types",
          },
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
