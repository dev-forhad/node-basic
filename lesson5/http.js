const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello https server");
    res.end();
  } else if (req.url === "/about") {
    res.write("This is about page");
    res.end();
  } else {
    res.write("NOT FOUND");
    res.end();
  }
});

server.listen(3200);
console.log("listening 3200");
