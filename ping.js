const fs = require("fs");
const http = require("http");

function pingURL(url)
{
 return new Promise((res, rej) => {
   
 });
}

function ping()
{
  fs.readFile("data/urls.json", "utf8", function(err, contents) {
    if (!err)
    {
      try {
        let j = JSON.parse(contents);
        
        j.forEach((url) => {
          url.then(() => {
            console.log(`Sucessfully pinged ${url}!`);
          }).catch((status) => {
            console.log(`Unable to ping ${url}! Status code: ${status}.`);
          });
        });
      } catch(e) {
        return;
      }
    } else {
     return; 
    }
  });
}

setInterval(() => {
 ping();
}, 60000);

ping();