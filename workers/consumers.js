var amqp = require('amqplib/callback_api');
const CONN_URL = 'amqp://hshznibk:cQzGWrz1H0uVDcTMuLUgme6ZkIiKP8gY@shark.rmq.cloudamqp.com/hshznibk';
amqp.connect(CONN_URL, function (err, conn) {
  conn.createChannel(function (err, ch) {
    ch.consume('abc2', function (msg) {
      console.log('.....');
      setTimeout(function(){
        console.log("Message:", msg.content.toString());
      },10);
      },{ noAck: true }
    );
  });
});