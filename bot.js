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
    var fortuneCmd = 'fortune -s -n 75';

    exec(fortuneCmd, function(error, stdout, stderr) {
      var response = stdout;
      exec('curl -d "txt='+response+'" http://sentiment.vivekn.com/api/text/', function(error, stdout, stderr){
        var sentimentPre = JSON.parse("[" + stdout + "]");
        var sentiment = sentimentPre[0]["result"]["sentiment"];
        var eyes;

        console.log(sentiment);

        switch(sentiment){
          case "Positive":
            eyes = "^^";
            break;
          case "Nuetral":
            eyes = "oo";
            break;
          case "Negative":
            eyes = "ಠಠ";
            break
          default:
            eyes = "oo";
        }

        T.post('statuses/update', { status: response +"----------\r\n    \\  ^__^\r\n     \\  ("+eyes+")\\__\r\n        (__)\\" }, function(err, data, response) {
          console.log(data)
        });

      });
    });
}

cowsayPLZ();

setInterval(cowsayPLZ, 1000 * 60 * 60);