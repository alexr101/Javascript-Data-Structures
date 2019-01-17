let shortToLongMap = {};
let longToShortMap = {};

let counter = 0;
/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
    let shortUrl = 'http://tinyurl.com/' + ++counter;
    shortToLongMap[shortUrl] = longUrl;
    return shortUrl;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    return shortToLongMap[shortUrl];
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */

/*
shortToLong = {
    'http://tinyurl.com/4e9iAk': 'https://leetcode.com/problems/design-tinyurl/'
}
longToShort = {
    'https://leetcode.com/problems/design-tinyurl/': 'http://tinyurl.com/4e9iAk'
}

*/