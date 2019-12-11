import { denememiddle } from "../deneme/denememiddle"
import express = require("express");
import { DBConnection } from "./api/DBConnecion";
import { PatientMiddleWare } from "./api/modules/deneme";
import { deneme } from "../../models/deneme";
import cors from "cors";
import bodyParser = require("body-parser");
const http = require('http');
var twit = require("twit");
var fs = require("fs");
const app = express();
app.use(cors());
app.use(bodyParser.json());

var Twitter = new twit({
    consumer_key: 'QrSELxABo1TSwl0Bpr6DV9VK4',
    consumer_secret: 'yFsBhyYfVhenZwjLw5Okl2PdTWGjUH8czLGlCfnYabVlwLr8fp',
    access_token: '1259478528-FyebKFry33MmmearEhcD0Wy2ZU9ZkS9D54Gysth',
    access_token_secret: 'btWJMbmDXndutbZAdVuHqP3LPJM7R5x9gFtk0JhjxiCm2',
    timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
    strictSSL: true, // optional - requires SSL certificates to be valid.
});

//retweeters

var getRtweeters = function (id1: number) {
    // id1 = "\'" + id1 + "\'";
    var params = {
        id: id1, count: 15

    }
    console.log("basliyor");
    Twitter.get('statuses/retweets', params, function (err: Error, data: any) {
        if (err) {
            console.log("error", err);
        }
        else {
            console.log("cekilen data", data.length);
            data.forEach((element: any) => {
                console.log(element.user.name);
            });
        }

    });
};
// getRtweeters();

//end of retweeters

//retweet//

// var retweet = function () {
//     var params = {
//         q: '#vtys123456', // Hashtags to search tweets within

//     }
//     Twitter.get('search/tweets', params, function (err, data) {
//         if (!err) {
//             console.log("------------------------");
//             console.log("data", data);
//             console.log("err", err);

//             console.log("------------------------");
//             var retweetId = data.statuses[0].id_str;
//             // Twitter.post('statuses/retweet/:id', {
//             //     id: retweetId
//             // }, function (err, response) {
//             //     if (response) {
//             //         console.log('Retweeted!!!');
//             //     }
//             //     if (err) {
//             //           console.log(err);
//             //         console.log('Problem when retweeting. Possibly already retweeted this tweet!');
//             //     }
//             // });
//         }
//         else {
//             console.log('Error during tweet search call');
//         }
//     });
// };

// retweet();

//end od retweet

//search of tweets
Twitter.get('search/tweets', {
    q: '#CADOS123',
    count: 100,
    result_type: "mix"
}).catch(function (err: Error) {
    console.log('caught error', err.stack)
}).then(function (result: any) {
    console.log(result.data.statuses.length);
    result.data.statuses.forEach((element: any) => {
        //     // if (element.user.name === "العربية") {
        console.log('name', element.user.name);
        console.log('data', element.geo);
        //         // getRtweeters(element.name);
    }

    )
});

// PatientMiddleWare.insertHandler();

//end

//search of users
// Twitter.get('users/search', {
//     q: '@Hassan_sham94',//can be Id or name
//     count: 100,
//     result_type: "mixed" 
//   }).catch(function (err) {
//     console.log('caught error', err.stack)
//   }).then(function (result) {
//      console.log('data', result.data[0].name);
//   });
//end


// post a new tweet//

// Twitter.post('statuses/update', { status: 'VTYS dersi başlamıştır   #VTYS123456' }, function (err, data, response) {
//     console.log(data)
// });

// end//

// const Twitter = require('twitter-js-client').Twitter;
// var error = function (err, response, body) {
//     console.log('ERROR [%s]', err);
// };
// var success = function (data) {
//     console.log('Data [%s]', data);
// };

// //Get this data from your twitter apps dashboard
// var config = {
//     "consumerKey": "sBtVf9rNFZQU7gzFVq6mObllo",
//     "consumerSecret": "UV5rRNBmUB47E9WsOPrVix5pj4rMzTsQ7dCZaczMwD07vxS5Kt",
//     "accessToken": "1259478528-Tzp0TLd3KWBgPOfauBblqUF40dw6zt7M5nOvrt8",
//     "accessTokenSecret": "UTYZxWJiUZCWofs1GgfoqCXz6X6qbnW5Os813mrf3bGaX",
//     "callBackUrl": "www.google.com"
// }

// var twitter = new Twitter(config);

// //Example calls

// // twitter.getUserTimeline({ screen_name: 'BoyCook', count: '10' }, error, success);

// // twitter.getMentionsTimeline({ count: '10' }, error, success);

// // twitter.getHomeTimeline({ count: '1' }, error, success);


// // twitter.getReTweetsOfMe({ count: '10' }, error, success);

// // twitter.getTweet({ id: '1188444475510669313' }, error, success);




// //
// // Get 10 tweets containing the hashtag haiku
// //

// // twitter.getFollowersList({ 'user_id': '123456789' }, error, success);
// //
// // Get 10 popular tweets with a positive attitude about a movie that is not scary 
// //


// twitter.getSearch({ 'q': ' movie -scary :) since:2013-12-27', 'count': 10, 'result\_type': 'popular' }, error, success);

// console.log("------------------------------");
// console.log("error",error.err);
// console.log("success",success.data);
// console.log("------------------------------");


handlerAdapter(app);
app.listen(5555, () => {
    console.log("server has benn started on 5555");
});

function handlerAdapter(app: express.Express) {
    app.use("/api", denememiddle.handlerAdapter())
};
