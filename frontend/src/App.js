import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [quote, setQuote] = useState('');

    const fetchQuote = async () => {
        try {
            const response = await fetch('/quotes');
            const data = await response.json();
            setQuote(data.quote);
        } catch (error) {
            console.error("Erreur lors de la récupération de la citation:", error);
        }
    };

    useEffect(() => {
        fetchQuote();
    }, []);

    return (
        <div className="App">
            <h1>Citation du jour</h1>
            <blockquote>{quote}</blockquote>
            <button onClick={fetchQuote}>Nouvelle citation</button>
        </div>
    );
}

export default App;
