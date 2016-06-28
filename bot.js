var Twit = require('twit');

var T = new Twit(require('./config.js'));

// throw this in a file
// module.exports = {
//   consumer_key:         'xxx',
//   consumer_secret:      '420',
//   access_token:         'blaze-it',
//   access_token_secret:  'EleGiggle'
// }

function cowsayPLZ() {

    var exec = require('child_process').exec;
    var cmd = 'fortune -s -n 73';

    exec(cmd, function(error, stdout, stderr) {
      T.post('statuses/update', { status: stdout +"---------- \r\n        \\  ^__^\r\n         \\  (oo)\\__\r\n            (__)\\" }, function(err, data, response) {
        console.log(data)
      })
    });
}

cowsayPLZ();

setInterval(cowsayPLZ, 1000 * 60 * 60);