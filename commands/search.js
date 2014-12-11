/**
* search command
*
* MIT LICENSE
*
* Copyright (c) 2014 PT Sagara Xinix Solusitama - Xinix Technology
*
* Permission is hereby granted, free of charge, to any person obtaining
* a copy of this software and associated documentation files (the
* "Software"), to deal in the Software without restriction, including
* without limitation the rights to use, copy, modify, merge, publish,
* distribute, sublicense, and/or sell copies of the Software, and to
* permit persons to whom the Software is furnished to do so, subject to
* the following conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
* MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
* LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
* OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
* WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*
* @author Farid Hidayat <e.faridhidayat@gmail.com>
* @copyright 2014 PT Sagara Xinix Solusitama
*/


var logger = require('../lib/logger'),
    request = require('request'),
    Table = require('easy-table'),
    manifest = require('../config/manifest');

var Search = function() {
    "use strict";

};

Search.prototype.ebook = function(phrase) {

    logger.i('You are searching: "'+ phrase+'"');

    request
    .get(manifest.api.search + phrase )
    .on('response', function(response) {

        // console.log(response.statusCode); // 200
        // console.log(response.headers['content-type']); // application/json

        var chunks = [],
            result,
            ebooks;

        response.on('data', function(chunk) {
            chunks.push(chunk.toString());
        });

        response.on('end', function() {
            if(response.headers['content-type'].indexOf('application/json') >= 0) {
                result = JSON.parse(chunks.join(''));
                ebooks = result.Books;
                logger.i('Total ebook[s] found: ' + result.Total);

                var t = new Table;
                ebooks.forEach(function(ebook) {
                    t.cell('ID', ebook.ID);
                    t.cell('Title', ebook.Title);
                    t.cell('SubTitle', ebook.SubTitle);
                    // for (var i in ebook) {
                    //     t.cell(i, ebook[i]);
                    // }
                    t.newRow();
                });

                console.log(t.toString());
            }
        });

    });
};

module.exports = function() {
    return new Search();
};