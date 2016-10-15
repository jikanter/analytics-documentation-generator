/**
 * A simple static server that serves files from the 'out' directory
 *
 **/

var express = require('express');
var fs = require('fs');
var app = express();

app.use('/', express.static(process.env.STATIC_DIR || fs.realpathSync('out')));

var server = app.listen(process.env.STATIC_PORT || 9001, function() {
  console.log("Static Server Listening on port %d", server.address().port);
});
