/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  fs.readFile(filePath, function(error, content) {
    if (error) {
      callback(error);
    } else {
      var firstLine = String(content).split('\n')[0];
      callback(error, firstLine)
    } 
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function(url, callback) {
  request(url, function(error, response) {
    if (error) {
      callback(error);
    } else {
      callback(error, response.statusCode);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
