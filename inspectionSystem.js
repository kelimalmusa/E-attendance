var Twitter = require('twitter-js-client').Twitter;
var error = function (err, response, body) {
    console.log('ERROR [%s]', err);
};
var success = function (data) {
    console.log('Data [%s]', data);
};

var Twitter = require('twitter-js-client').Twitter;

//Get this data from your twitter apps dashboard
var config = {
    "consumerKey": "sBtVf9rNFZQU7gzFVq6mObllo",
    "consumerSecret": "UV5rRNBmUB47E9WsOPrVix5pj4rMzTsQ7dCZaczMwD07vxS5Kt",
    "accessToken": "1259478528-Tzp0TLd3KWBgPOfauBblqUF40dw6zt7M5nOvrt8",
    "accessTokenSecret": "UTYZxWJiUZCWofs1GgfoqCXz6X6qbnW5Os813mrf3bGaX",
    "callBackUrl": "www.google.com"
}

var twitter = new Twitter(config);

//Example calls

twitter.getUserTimeline({ screen_name: 'BoyCook', count: '10' }, error, success);
console.log("error",error);

twitter.getMentionsTimeline({ count: '10' }, error, success);
console.log("error",error);

twitter.getHomeTimeline({ count: '10' }, error, success);
console.log("error",error);

twitter.getReTweetsOfMe({ count: '10' }, error, success);
console.log("error",error);

twitter.getTweet({ id: '1111111111' }, error, success);
console.log("error",error);



//
// Get 10 tweets containing the hashtag haiku
//

twitter.getSearch({ 'q': '#haiku', 'count': 10 }, error, success);

//
// Get 10 popular tweets with a positive attitude about a movie that is not scary 
//

twitter.getSearch({ 'q': ' movie -scary :) since:2013-12-27', 'count': 10, 'result\_type': 'popular' }, error, success);