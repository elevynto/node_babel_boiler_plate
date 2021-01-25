
module.exports = function (api) {
  api.cache(true);

  const presets = [
    "airbnb",
    "@babel/preset-env", 
    "@babel/preset-react",
  ];
  const plugins = [
    "add-module-exports",
    "@babel/transform-async-to-generator",
    "@babel/plugin-proposal-function-bind",
    "@babel/plugin-proposal-optional-chaining",
    ["transform-replace-object-assign", { "moduleSpecifier": "object.assign" }],
    ["@babel/plugin-proposal-class-properties", { "loose": true }],
  ];

  return {
    presets,
    plugins
  };
}