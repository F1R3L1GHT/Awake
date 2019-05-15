const fs = require("fs");
const http = require("http");
const request = require("request");

function pingURL(url)
{
 return new Promise((resp, rej) => {
   request(url,{ headers: { 'User-Agent': 'Awake-Glitch' } }, (err, res, body) => {
     if (err) {rej(res.statusCode)} else {resp();}
     
     //res();
   });
 });
}

function ping()
{
  if (process.env.DISABLED == "YES") return;
  
  console.log("---");
  
  fs.readFile(".data/urls.json", "utf8", function(err, contents) {
    
      //try {
        let j = JSON.parse(contents);
        
        j.forEach((url) => {
          pingURL(url).then(() => {
            console.log(`Sucessfully pinged ${url}!`);
          }).catch((status) => {
            console.log(`Unable to ping ${url}! Status code: ${status}.`);
          });
        });
      /*} catch(e) {
        console.log("Unable to parse!");
      }*/
  
    
  });
}

setInterval(() => {
 ping();
}, 60000);

ping();