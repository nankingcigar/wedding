const rewireLess = require('react-app-rewire-less');
 
/* config-overrides.js */
module.exports = function override(config, env) {
  config = rewireLess.withLoaderOptions({
    javascriptEnabled: true
  })(config, env);
  return config;
}