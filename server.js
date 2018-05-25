const http = require('http');

exports.createServer = filteredFlights => {
  http.createServer(function (req, res) {
    console.log(filteredFlights);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(`{ items: ${Array.prototype.slice(filteredFlights, 0, 10)} }`);
    res.end();
  }).listen(8888);
}