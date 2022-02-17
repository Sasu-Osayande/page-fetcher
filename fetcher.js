const fs = require('fs');
const request = require("request");

const args = process.argv.slice(2);

const url = args[0];
const filePath = args[1];

request(url, function (error, response, body) {
  fs.writeFile(filePath, body, function(error) {
    if (error) {
      // Print the error if one occurred
      console.error('error:', error);
      return
    }
    fs.stat(filePath, (error, stats) => {
      if (error) {
        console.error(error)
      } else {
        //we have access to the file stats in `stats`
        console.log(`Downloaded and saved ${stats.size} bytes to ${filePath}`);
      }
    })
  })
});