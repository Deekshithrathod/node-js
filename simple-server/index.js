const http = require("http");
const handleGetRequest = require("./handleGetRequest");

const portListener = (req, res) => {
  if (req.method === "GET") {
    const data = handleGetRequest(req);
    console.log("this is a get request");
    // console.log(data);
    res.writeHead(200);
    res.end(JSON.stringify(data));

    return;
  }
  res.writeHead(200);
  res.end(JSON.stringify(data));
};

const server = http.createServer(portListener);
server.listen(3001);
