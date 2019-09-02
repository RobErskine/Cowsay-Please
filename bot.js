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
    var fortuneCmd = 'fortune -s -n 228';

    exec(fortuneCmd, function(error, stdout, stderr) {
      var response = stdout;
      console.log(response);
      T.post('statuses/update', { status: response +"----------\r\n    \\  ^__^\r\n     \\  (oo)\\__\r\n        (__)\\" }, function(err, data, response) {
        console.log(data)
      });
    });
}

cowsayPLZ();