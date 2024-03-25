const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const newBtn = document.querySelector('.next');
const twitter = document.querySelector('.twitter');

const API_URL = 'https://api.quotable.io/random';

const getNewQuote = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    const quoteContent = data.content;
    const authorName = data.author || 'Unknown';

    quote.textContent = quoteContent;
    author.textContent = authorName;

    tweetContent(quoteContent, authorName);
  } catch (error) {
    console.log(error);
    quote.textContent = 'Oops! Something went wrong.';
    author.textContent = 'Error';
  }
};

const tweetContent = (quote, author) => {
  const tweetContent = `"${quote}" - ${author}`;
  console.log('aaaa', tweetContent);
  const tweetHref = `https://twitter.com/intent/tweet?text=${tweetContent}`;
  twitter.setAttribute('href', tweetHref);
};

newBtn.addEventListener('click', getNewQuote);
