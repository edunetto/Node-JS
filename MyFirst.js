// Always run code with NODEMON, it changes the file automatically without the need to restart the server

// To include a module, use the require() function with the name of the module
var randomName = require('http');

// This is the module that I created. It`s called MyFirstModule.js
var secondRandomName = require('./MyFirstModule')

// This is the code that creates a server and displays the info
randomName.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'}); //Code is reading text as HTML
    res.write("This is today's date:" + secondRandomName.myDateTime())
    res.write("Hello world <br>")
    // How to jump lines    // I can also use ExpressJS to format texts written with HTML
    // Link to Google didn't work, how to fix it?
    res.write(`
      Oi teste <br>
      <strong>Teste 2</strong><br>
      <a href=www.google.com.br>Testando um link pro google</a>
      Incluir a data ${new Date()}<br>
      `)
    res.end('Hello World!');
}).listen(8080); 
