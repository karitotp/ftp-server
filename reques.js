var request = require('request');
request('http://planet.openstreetmap.org/replication/hour/000/024/422.osc.gz', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage. 
  }
})