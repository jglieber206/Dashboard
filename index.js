//call node index.js in terminal for results
var Twitter = require('twitter-node-client').Twitter;
  //Callback functions
    var error = function (err, response, body) {
        // console.log('ERROR [%s]', err);
    };
    var success = function (data) {
        console.log('Data [%s]', data);
        var result = data.toJSON;
        console.log(result[text]);
        // console.log();
        console.log("after data");
        // console.log(data[0].text);
    };

    var Twitter = require('twitter-js-client').Twitter;

    //Get this data from your twitter apps dashboard
    var config = {
        "consumerKey": "UDMYUEmUDdqGp5t4CGMmn3Xgp",
        "consumerSecret": "Zq8HomaHiEqKwlsp3F7LO5ckVKIHPl1tI4yum2QKBLZVb5LK26",
        "accessToken": "475344734-JZt8QA7FJjCoh7Yiy6CyrIy1ltjKXRE3fDIFo0C9",
        "accessTokenSecret": "QBKeNqFtWy5kZjTL32XlQBNjRrcf2Cl4M2Ljlltale28c",
        "callBackUrl": "https://api.twitter.com/1.1/statuses/mentions_timeline.json"
    }

    var twitter = new Twitter(config);
    console.log(twitter.getMentionsTimeline({ count: '10'}, error, success));

    // console.log(data);
    // for (var i = 0; i < "data".length; i++) {
    //     // console.log('Data [%s]', data);
    // }
