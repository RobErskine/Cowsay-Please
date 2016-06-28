# $ fortune | cowsay // on twitter

## ayyyyyyyy lmao

This is was a super late passion project that may have been completed after a few drinks. It's a dumb app, and was done purely for enjoyment. 

Basically it $ runs fortune, runs fortune through a sentiment analysis API, and based on the result, changes the cow's eyes (`^^`,`oo`,`ಠಠ`), and then tweets out the result to [twitter](http://twitter.com/cowsayplz).

### These links provided a lot of value
* https://en.wikipedia.org/wiki/Fortune_(Unix)
* https://en.wikipedia.org/wiki/Cowsay
* https://github.com/dariusk/examplebot
* https://github.com/ttezel/twit

### Running this project for yourself <sup>1</sup>
1. clone project
2. run `$ npm install twit`
3. setup a config.js file 

	```
	// hit up dev.twitter.com/apps/new to get these values
	module.exports = {
	   consumer_key:         'xxx',
	   consumer_secret:      '420',
	   access_token:         'blaze-it',
	   access_token_secret:  'EleGiggle'
	}
	```
4. run `$ node bot.js`
5. ???

```
6. profit
-------- 
  \   ^__^
   \  (^^)\__
      (__)\
```

<sup>1</sup> But why would you want to?