const quotesdata = [
    {
        "quote": "The only way to do great work is to love what you do.",
        "author": "Steve Jobs"
    },
    {
        "quote": "In three words I can sum up everything I've learned about life: it goes on.",
        "author": "Robert Frost"
    },
    {
        "quote": "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "quote": "The only thing necessary for the triumph of evil is for good men to do nothing.",
        "author": "Edmund Burke"
    },
    {
        "quote": "You miss 100% of the shots you don't take.",
        "author": "Wayne Gretzky"
    },
    {
        "quote": "The future belongs to those who believe in the beauty of their dreams.",
        "author": "Eleanor Roosevelt"
    },
    {
        "quote": "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        "author": "Albert Einstein"
    },
    {
        "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "author": "Winston Churchill"
    },
    {
        "quote": "Life is really simple, but we insist on making it complicated.",
        "author": "Confucius"
    },
    {
        "quote": "The only true wisdom is in knowing you know nothing.",
        "author": "Socrates"
    }
];

let currentindex = 0;

const quotes = document.getElementById('quote');
const authors = document.getElementById('author');
const nextbtn = document.getElementById('next-btn');

function showquote(){
    let newquote = quotesdata[currentindex];
    let quotetext = newquote.quote;
    console.log(quotetext);
    let quoteauthor = newquote.author;
    console.log(quoteauthor)
    quotes.innerHTML = quotetext
    authors.innerHTML = quoteauthor
}

nextbtn.addEventListener('click', () => {
    let randomindex = Math.floor(Math.random() * quotesdata.length);
    let newquote = quotesdata[randomindex];
    let quotetext = newquote.quote;
    console.log(quotetext);
    let quoteauthor = newquote.author;
    console.log(quoteauthor);

    quotes.innerHTML = quotetext;
    authors.innerHTML = quoteauthor;
})

showquote();