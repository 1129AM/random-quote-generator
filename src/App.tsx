import { useState } from 'react'
import quotes from "./assets/quotes.json"
import './App.css'

interface Quote{
  quote: String;
  author: String;
}

const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
}


function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());

  const changeQuote = () => {
    setQuote(getRandomQuote());
  }

  return (
  <div id = "quote-box">
    <div className = "quote-content" >
      <h2 id = "text">{quote.quote}</h2>
      <h2 id = "author">{quote.author}</h2>
    </div>
    <a
      href = {`https://twitter.com/intent/tweet?text=${quote.quote}`}
      id = "tweet-quote" 
    >Tweet this quote!
    </a>
    <button id = "new-quote" onClick={changeQuote}>Change Quote</button>
  </div>);
}

export default App
