exports.config = {
    seleniumAddress: 'http://mijn-simgroep.docker.local:4444/wd/hub',
    baseUrl: 'https://mijn-simgroep.docker.local',
    capabilities: {
        browserName:'chrome',
        args: ['no-sandbox']
    },
    framework: 'custom',  // set to "custom" instead of cucumber.
    frameworkPath: require.resolve('protractor-cucumber-framework'),  // path relative to the current config file
    specs: [
        './features/**/*.feature'     // Specs here are the cucumber feature files
    ],
    // cucumber command line options
    cucumberOpts: {
        'no-colors': true,
        require: ['./features/**/step_definitions/*.js', './features/support/chai.js'],  // require step definition files before executing features
        tags: [],                      // <string[]> (expression) only execute the features or scenarios with tags matching the expression
        strict: true,                  // <boolean> fail if there are any undefined or pending steps
        format: ["pretty"],            // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
        dryRun: false,                 // <boolean> invoke formatters without executing steps
        compiler: [],                   // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        failFast: true
    },
    onPrepare: function () {
        browser.manage().window().maximize(); // maximize the browser before executing the feature files
    },
    getPageTimeout: 30000,
    allScriptsTimeout: 30000,
    plugins: []
};