const fs = require("fs");
const http = require("http");

function ping()
{
  fs.readFile('DATA', 'utf8', function(err, contents) {
    if (!err
  });
}

setInterval(() => {
 ping();
}, 60000);

ping();