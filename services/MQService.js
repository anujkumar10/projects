const amqp  = require('amqplib/callback_api');
const CONN_URL = 'amqp://hshznibk:cQzGWrz1H0uVDcTMuLUgme6ZkIiKP8gY@shark.rmq.cloudamqp.com/hshznibk';

let ch = null;
const queue = 'abc2';

amqp.connect(CONN_URL, function (err, conn) {
   conn.createChannel(function (err, channel) {
     console.log('channel created');
      ch = channel;
      channel.assertQueue(queue, function(err, ok) {
        console.log('queue created');
      });
   });
});
 const publishToQueue = async (queueName, data) => {
   ch.sendToQueue(queueName, new Buffer(data));
}
process.on('exit', (code) => {
   ch.close();
   console.log(`Closing rabbitmq channel`);
});

module.exports = publishToQueue;