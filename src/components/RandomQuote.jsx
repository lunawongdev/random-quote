import { useState } from "react"
import '../css/RandomQuote.css'
import quotesDatabase from '../servers/db.json' //database 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'; 



const RandomQuote = () => {

    const quotes = quotesDatabase.quotes

    const [newQuote, setNewQuote] = useState(quotes[0])

    function onRandomClick(e) {
        e.preventDefault()
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setNewQuote(quotes[randomIndex])
    }

    return (
    <div id="quote-box">
        <div id="quote-area">
            <h3 id="text">{newQuote.text}</h3>
            <p id="author">― {newQuote.author}</p>
        </div>
        <div id="button-container">
            <a
            id="tweet-quote"
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${newQuote.text}" - ${newQuote.author}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="tweet-button"
            >
            Share this on <FontAwesomeIcon icon={faXTwitter} className="twitter-icon" />
            </a>
            <button id="new-quote" onClick={onRandomClick}>New Quote</button>
        </div>
        
    </div>)

}

export default RandomQuote;