/**
 * Response
 */

let url = require('url');

/**
 * @version 1.0
 */
export function buildRequest (req, res) {
    res = res || {};
    req = req || {};

    req.params = {};
    req.query = url.parse(req.url, true).query;
    req.queryParts = url.parse(req.url, true);

    req.rawBody  = '';
    
    // Takes care of any data that comes frome a post-request
    req.on('data', (chunk) => {
        req.rawBody += chunk;
    });

    return req;
}
