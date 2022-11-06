const http = require("http");

const defaultPort = 1111;
const portNumber = process.env.PORT || defaultPort;

const httpServer = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end("Hi, listening on port: " + portNumber);
});

httpServer.listen(portNumber, "0.0.0.0", () => {
  console.log(httpServer.address());
});
