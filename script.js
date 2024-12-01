const quoteBtn = document.querySelector('.quote-btn')
const quotePara = document.querySelector('.quote')
const authorName = document.querySelector('.author-name');

const quoteUrl = 'https://api.api-ninjas.com/v1/quotes?category=happiness';
const apiKey = '4I7nUT5+OsPpChLZ3Q216g==8h32W7O2U90bmsrL';




function getQuote(){
  fetch(quoteUrl, {headers: { 'X-Api-Key': apiKey}})
  .then(data => data.json())
  .then(item => {
    quotePara.innerText = item[0].quote;
    authorName.innerText = item[0].author;
})}
getQuote();

quoteBtn.addEventListener('click', getQuote)

