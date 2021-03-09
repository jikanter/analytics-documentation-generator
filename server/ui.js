var http = require('http');
var spawn = require('child_process').spawn;
var parse = require('querystring').parse;
var emitter = require('events').EventEmitter;
var url = require('url');
var fs = require('fs');

var config = {
  staticHost: '192.168.2.69',
  staticPort: process.env.STATIC_PORT || 9001,
  serverPort: process.env.SERVER_PORT || 8125,
};

http.createServer(function(request, response) {

  var actionQuery = url.parse(request.url, true).query;
  /* validate the doctype and then run */
  if (actionQuery.doctype && (['sdr','tag-map','brd'].indexOf(actionQuery.doctype) > -1)) {
    console.log('running doc runner for ' + actionQuery.doctype);
    var docRunner = spawn('/bin/bash', ['doc.sh', 'run', actionQuery.doctype]);
    docRunner.on('close', function(code, signal) {
      response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
      response.write('<!DOCTYPE HTML>');
      response.write('<html>');
      response.write('<head>');
      response.write('<title>Stratigent Documentation Generator</title>');
      response.write('<style type="text/css">');
      response.write('* {padding: 0; margin: 0 }');
      response.write('form, label, a { vertical-align: center; }');
      response.write('input[type="text"], select { -webkit-appearance: text-field; width: 60%; height: 30%; margin: 0 0 2% 0; }');
      response.write('input[type="submit"] { margin: 0 0 0 12%; padding: 2%; width: 20%; }');
      response.write('a {text-decoration: none; }');
      response.write('.content { margin-left: 23%; margin-top: 20%; }');
      response.write('</style>');
      response.write('</head>');
      response.write('<body>');
      response.write('<div class="content">');
      response.write('<label for="get-documentation">Select The Type of Documentation you would like to Generate</label>');
      response.write('<form id="get-documentation" action="/" method="GET">');
      response.write('<section>');
      response.write('<select name="doctype">');
      response.write('<option id="sdr">sdr</option>');
      response.write('<option id="tagmap">tag-map</option>');
      response.write('</select>');
      response.write('</section>');
      response.write('<section>');
      response.write('<input type="submit" value="Run Documentation"/>');
      response.write('<div>');
      response.write("<a id='download-button' href='http://"+config.staticHost+":"+config.staticPort+"/"+actionQuery.doctype+".pdf"+"'>Download " + actionQuery.doctype +"</a></p>");
      response.write('</div>');
      response.write('</section>');
      response.write('</div>');
      response.write('</form>');
      response.end();
    });
  }
  else {
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    response.write('<!DOCTYPE HTML>');
    response.write('<html>');
    response.write('<head>');
    response.write('<title>Stratigent Documentation Generator</title>');
    response.write('<style type="text/css">');
    response.write('* {padding: 0; margin: 0 }');
    response.write('form, label, a { vertical-align: center; }');
    response.write('input[type="text"], select { -webkit-appearance: text-field; width: 60%; height: 30%; margin: 0 0 2% 0; }');
    response.write('input[type="submit"] { margin: 0 0 0 12%; padding: 2%; width: 20%; }');
    response.write('.content { margin-left: 23%; margin-top: 20%; }');
    response.write('</style>');
    response.write('</head>');
    response.write('<body>');
    response.write('<div class="content">');
    response.write('<label for="get-documentation">Select The Type of Documentation you would like to Generate</label>');
    response.write('<form id="get-documentation" action="/" method="GET">');
    response.write('<section>');
    response.write('<select name="doctype">');
    response.write('<option id="sdr">sdr</option>');
    response.write('<option id="tagmap">tag-map</option>');
    response.write('</select>');
    response.write('</section>');
    response.write('<section>');
    response.write('<input type="submit" value="Run Documentation"/>');
    response.write('</section>');
    response.write('</div>');
    response.write('</form>');
    response.end();
  }
}).listen(config.serverPort);

