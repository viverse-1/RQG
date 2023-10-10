const apiURL = "https://api.quotable.io/random";
    
async function getQuote(url){
  const quote = document.getElementById("quote");
  const author = document.getElementById("author");
  const response = await fetch(url);
  var data = await response.json();
  
  if(data.content.length > 125){
    getQuote(url);
  }
  else{
    quote.innerText = `" ` + data.content +` "`;
    author.innerText = data.author;
  }
}
function tweet(){
  window.open("https://twitter.com/intent/tweet?text=" + quote.innerText + "\n" + "~" + author.innerText,"Tweet Window","height = 400px,width = 500px");

}