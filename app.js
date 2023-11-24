const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Nagendra Varma");

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Node testing</title></head>");
  if (req.url === "/home") {
    res.write("<body><h1>Welcome Home</h1></body>");
  }
  else if(req.url === '/about'){
    res.write("<body><h1>Welcome to About Us</h1></body>");
  }
  else if(req.url === '/node'){
    res.write("<body><h1>Welcome to my Node Js Project</h1></body>");
  }
  else {
    res.write("<body><h1>Welcome!!!!</h1></body>");
  }
  res.write("</html>");
});

server.listen(3000);
