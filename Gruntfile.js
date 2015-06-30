var grunt = require('grunt');
grunt.loadNpmTasks('grunt-aws-lambda');

grunt.initConfig({
  lambda_invoke: {
    default: {
    }
  },
  lambda_deploy: {
    default: {
      function: 'extractUtmParams',
      region: 'us-east-1'
    }
  },
  lambda_package: {
    default: {
    }
  }
});

grunt.registerTask('deploy', ['lambda_package', 'lambda_deploy']);
grunt.registerTask('run', ['lambda_invoke']);
grunt.registerTask('package', ['lambda_package']);

