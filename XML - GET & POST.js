//boilerplate code for AJAX request
const xhr =  new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';

xhr.responseType = 'json';
xhr.onreadystatechange = function(){
  if (xhr.readyState === XMLHttpRequest.DONE){
    
  }
}

xhr.open('GET', url);
xhr.send();


// Include data for accessing Google APIs
const apiKey = '<Your API Key>';
const url = 'https://www.googleapis.com/urlshortener/v1/url';

// Some page elements

const $inputField = $('#input');
const $expandButton = $('#expand');
const $shortenButton = $('#shorten');
const $responseField = $('#responseField');

// AJAX functions

function expandUrl() {
  const urlToExpand = url + 
        '?key=' + apiKey +
        '&shortUrl=' + $inputField.val();
  const xhr = new XMLHttpRequest(); 
  xhr.responseType = 'json';
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      console.log(xhr.response);
      $responseField.append('<p>Your expanded url is: </p><p>' + xhr.response.longUrl + '</p>');
    }
  };
  
  xhr.open('GET', urlToExpand);
  xhr.send();
}

function shortenUrl() {

}

function expand() {
  $responseField.empty();
  expandUrl();
  return false;
}

function shorten() {
  $responseField.empty();
  shortenUrl();
  return false;
}

// Call functions on submit

$expandButton.click(expand);
$shortenButton.click(shorten);


//XHR POST Requests II
const xhr = new XMLHttpRequest;
const url = 'https://api-to-call.com/endpoint';
const data = JSON.stringify({id: '200'});

xhr.responseType = 'json';
xhr.onreadystatechange = function(){
  if (xhr.readyState === XMLHttpRequest.DONE){
    console.log(xhr.response);
  }
}
xhr.open('POST',url);
xhr.send(data);


//
