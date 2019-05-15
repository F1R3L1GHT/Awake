// client-side js
// run by the browser each time your view template is loaded

console.log('hello world :o');

function validURL(str) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(str);
}

function validate()
{
  var urlin = document.getElementById("input_url").value;
  
  console.log(urlin);
  
  if (!validURL(urlin))
  {
    console.log("Invalid Step #1");
    alert("Invalid URL");
   return false; 
  } else {
   if (urlin.length >= 9)
   {
     if ((urlin.substring(0, 7) == "http://") || (urlin.substring(0, 8) == "https://"))
     {
       return true;
     } else {
       console.log(urlin.substring(0, 9))
       console.log("Invalid URL Step #3");
       alert("Invalid URL! Make sure to add http:// or https:// infront of your URL");
      return false;
     }
   } else {
     console.log("Invalid Step #2");
     alert("Invalid URL");
    return false;
   }
  }
}

/*
// our default array of dreams
const dreams = [
  'Find and count some sheep',
  'Climb a really tall mountain',
  'Wash the dishes'
];

// define variables that reference elements on our page
const dreamsList = document.getElementById('dreams');
const dreamsForm = document.forms[0];
const dreamInput = dreamsForm.elements['dream'];

// a helper function that creates a list item for a given dream
const appendNewDream = function(dream) {
  const newListItem = document.createElement('li');
  newListItem.innerHTML = dream;
  dreamsList.appendChild(newListItem);
}

// iterate through every dream and add it to our page
dreams.forEach( function(dream) {
  appendNewDream(dream);
});

// listen for the form to be submitted and add a new dream when it is
dreamsForm.onsubmit = function(event) {
  // stop our form submission from refreshing the page
  event.preventDefault();

  // get dream value and add it to the list
  dreams.push(dreamInput.value);
  appendNewDream(dreamInput.value);

  // reset form 
  dreamInput.value = '';
  dreamInput.focus();
};
*/