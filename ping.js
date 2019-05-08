const fs = require("fs");
const http = require("http");
const request = require("request");

function pingURL(url)
{
 return new Promise((res, rej) => {
   request(url, (err, res, body) => {
     if (err) rej(res.statusCode);
     
     res();
   });
 });
}

function ping()
{
  if (process.env.DISABLED == "YES") return;
  
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