import getQuote from './getQuote'
import { useEffect, useState } from 'react';
import './App.css';

const App = () => {

  const [ quote, setQuote ] = useState('')

  const handleNextQuote = () => {
    getQuote().then(quote => {
      setQuote(quote.quote)
    })
  }

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(quote)
  }

  const shareTwitter = () => {

  }

  console.log(quote)

  useEffect(handleNextQuote, [])

  return (
    <div className="App">
      <div className="Header-Container">
        <p>Kanye Quotes</p>
      </div>
      <div className="Body-Container">
        <div className="Quote-Container">
          <div className="Quote">
            <p className="Quote-text">"{quote}"</p>
          </div>
          <div className="Kanye">
            <small> - Kanye West</small>
          </div>
        </div>
        <div className="Next-Container">
          <button onClick={handleNextQuote} className="button-next-quote">Next</button>
          <a 
            className="Twitter-Link" 
            onCLick={shareTwitter} 
            href={`https://twitter.com/intent/tweet?text="${quote}"-@kanyewest`}
          >Twitter</a>
          <button onClick={copyToClipboard} className="copy-to-clip">Copy</button>
          <p className="deprecated">Copy is deprecated for mobile devices.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
