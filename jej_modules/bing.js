var imageSearch = require('../jej_modules/tools/image-search.js');

var bingHandler = function (client, channel, content) {
    imageSearch.bingSearch(client, channel, content, {});
}

module.exports = bingHandler;
