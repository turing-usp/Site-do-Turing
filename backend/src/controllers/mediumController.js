const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function httpGetFromApi(url) {
    // function to get JSON responses from an api call
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false); // false for synchronous request
    xmlHttp.send(null);
    return JSON.parse(xmlHttp.responseText);
}

function removeDescription(json){
    //remove unused content from the apis response (to use less memory)
    json['items'].forEach(function(post){
        delete post['description']
        delete post['content']
    })
    return json;
}

module.exports = {
  async index(request, response) {
    // allow for usage with any user (if any other use is defined), defaults to turing-talks
    var { user } = request.query;
    if (user == undefined) { user = 'turing-talks' }
    // create the default request url, separated so it can be changed if necessary
    // utilizes the rss2json's api to convert mediums feed to a json
    let mediumRssUrl = `https://medium.com/feed/${user}`;
    let rss2jsonUrl = `https://api.rss2json.com/v1/api.json?rss_url=${mediumRssUrl}`;
    // fetch and remove content/description of response to use less memory
    let apiResponse = httpGetFromApi(rss2jsonUrl);
    let cleanJson = removeDescription(apiResponse);

    return response.json(cleanJson);
  },
};
