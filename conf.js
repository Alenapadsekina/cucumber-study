exports.config = {
  directConnect: true,

  capabilities: {
    'browserName': 'chrome'
  },

  framework: 'jasmine',

  specs: ['example_spec.js'],

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
