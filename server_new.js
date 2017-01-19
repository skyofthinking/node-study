var http = require('http');

function onRequest(request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello World Server New");
    response.end();
}

http.createServer(onRequest).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');