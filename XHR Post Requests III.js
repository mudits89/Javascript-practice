//XHR Post Requests III
// Include data for accessing Google APIs
main.js
const apiKey = 'AIzaSyDQL71gHnVfHx_PyGrdsh8DZZsnr4zvmPs	';
const url = 'https://www.googleapis.com/urlshortener/v1/url';

// Some page elements

const $inputField = $('https://medium.com/@codecademy/breaking-the-coding-language-barrier-bf24652c3c60');
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
	const urlWithKey = url + '?key=' +apiKey;
  const urlToShorten = $inputField.val();
  const data = JSON.stringify({longUrl: urlToShorten});
  const xhr = new XMLHttpRequest;
  xhr.responseType = 'json';
  xhr.onreadystatechange = function(){
    if(xhr.readyState === XMLHttpRequest.DONE){
      $responseField.append('<p>Your shortened url is: </p><p>' + xhr.response.id + '</p>');
    } 
  }
  xhr.open('POST', urlWithKey);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(data);
};

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


//test.js
console.log = function() {};
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('public/main.js', 'utf8');

describe('', function () {
  it('', function() {
    let structureOne = function() {
      function expandUrl() {
        const urlToExpand = url + '?key=' + apiKey + '&shortUrl=' + $inputField.val() + '&projection=' + projection
      }
    };

    let isMatchOne = Structured.match(code, structureOne);
    assert.isOk(isMatchOne, 'Did you set \'const urlToExpand\' equal to \'url + \'?shortUrl=\' + $inputField.val() + \'&key=\' + apiKey\' ?');
  });
});