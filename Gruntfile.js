var grunt = require('grunt');
grunt.loadNpmTasks('grunt-aws-lambda');

grunt.initConfig({
  lambda_invoke: {
    default: {
    }
  },
  lambda_deploy: {
    default: {
      //arn: AwsHelper.getFunctionARN('hermes-parser')
      options: {
        region: 'us-east-1',
        profile: 'lambda',
        timeout: 60
      },
      function: 'extractUtmParams',
      arn: 'arn:aws:lambda:us-east-1:959271857660:function:extractUtmParams'
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

