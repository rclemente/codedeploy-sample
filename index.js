
exports.handler = function(event, context) {
  var message = event.Records[0].Sns.Message
  console.log('message= '+ message);
  context.succeed('finished');
};
