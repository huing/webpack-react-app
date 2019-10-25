const { override, fixBabelImports, addLessLoader } = require('customize-cra')
module.exports = function override(config, env) {
  console.log(config)
  // do stuff with the webpack config...
  return config
}
