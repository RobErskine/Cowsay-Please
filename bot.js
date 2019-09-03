var Twit = require('twit');
const spawn = require('child_process').spawn;

var T = new Twit(require('./config.js'));

// throw this in a file
// module.exports = {
//   consumer_key:         'xxx',
//   consumer_secret:      '420',
//   access_token:         'blaze-it',
//   access_token_secret:  'EleGiggle'
// }

function cowsayPLZ() {
    var fortuneCmd = spawn('fortune', ['-s', '-n 180']);

    fortuneCmd.stdout.on('data', (data) => {
      T.post('statuses/update', { status: data +"----\r\n\  \\   \r\n\  ^__^\r\n\  (oo)\_________\r\n\   (__)\                )\/\\r\n\         ||----w ||\r\n\         ||          ||"}, function(err, data, response) {
        console.log(data)
      });
    });
}

cowsayPLZ();