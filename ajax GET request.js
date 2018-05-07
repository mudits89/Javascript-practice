//ajax call GET request
$.ajax({
  url: 'https://api-to-call.com/endpoint',
  type: 'GET',
  dataType: 'json',
  
  success(response){
    console.log(response);
  };
  
  error(jqXHR, status, errorThrown){
  console.log(error);
}
});


//$.ajax() GET Requests III
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
  $.ajax({
    url: urlToExpand, 
    type: 'GET',
    dataType: 'json', 
    success(response) {
      $responseField.append('<p>Your expanded url is: </p><p>' + response.longUrl + '</p>');
    }, error(jqXHR, status, errorThrown) {
      console.log(jqXHR);
    }
  });
}

function shortenUrl() {
  const urlWithKey = url + '?key=' + apiKey;
  const urlToShorten = $inputField.val();
  const data = JSON.stringify({longUrl: urlToShorten});
  
  
//
