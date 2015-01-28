module.exports = function(config) {

    console.log(process.cwd());
    config.set({
        basePath: 'client/',
        frameworks: ['mocha', 'chai', 'sinon'],
        files: [ '**/*.html', '**/*.js' ],

//        files: [

  //        '**/*.js',
//          '**/*.html'],
        preprocessors: {
          '**/*.html': 'ng-html2js'
        },
        exclude: ['node_modules'],
  //      reporters: ['progress'],
  //      port: 9999,
  //      colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'], // Alternatively: 'PhantomJS'
  //      captureTimeout: 6000,
  //      singleRun: false
    });
};
