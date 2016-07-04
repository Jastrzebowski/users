const http = require('http');

const hostname = '127.0.0.1';
const port = 1337;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset='utf-8'>
        <title>React Backbone users example 🤖</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-material-design/0.5.10/css/bootstrap-material-design.css">
        <style>
          body {
            align-items: center;
            display: flex;
            justify-content: center;
            min-height: 100vh;
            padding: 40px 0;
          }
          .container {
            width: 95%;
          }
        </style>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
      </head>
    <body class="loading">
      <div class="container" id="app"></div>
      <script src="https://localhost:2048/scripts/App.js"></script>
    </body>
    </html>
  `);
}).listen(port, hostname, () => {
  console.log(`Server running at http://${ hostname }:${ port }/`);
});
