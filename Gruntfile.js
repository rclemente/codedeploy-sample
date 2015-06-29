var grunt = require('grunt');
grunt.loadNpmTasks('grunt-aws-lambda');

// Adding mocha testing
grunt.loadNpmTasks('grunt-mocha-test');

// load project custom tasks
grunt.task.loadTasks('tasks');

grunt.initConfig({

  lambda_invoke: {
    default: {
      options: {}
    }
  },

  lambda_deploy: {
    default: {
      //arn: AwsHelper.getFunctionARN('hermes-parser')
      options: {
        region: 'us-west-2',
        profile: 'lambda',
        timeout: 60
      },
      function: 'extractUtmParams',
      arn: null // required
    }
  },

  lambda_package: {
    default: {
      options: {
      }
    }
  },

  lambda_create: {
    default: {
      name: 'hermes-parser',
      arn: ' arn:aws:lambda:us-east-1:959271857660:function:extractUtmParams',
      aws: require('./config/aws.json')
    }
  },

  // Configure a mochaTest task
  mochaTest: {
    test: {
      options: {
        reporter: 'spec',
        clearRequireCache: true
      },
      src: ['test/*-test.js','test/*/*-test.js']
    }
  }

});

grunt.registerTask('run', ['lambda_invoke']);
grunt.registerTask('test', ['mochaTest']);
grunt.registerTask('deploy', ['lambda_package', 'lambda_deploy']);
grunt.registerTask('lambda_build', ['lambda_package', 'lambda_create', 'lambda_sns_event_source']);
