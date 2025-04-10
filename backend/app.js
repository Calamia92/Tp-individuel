const express = require('express');
const app = express();
const port = 5000;

const quotes = [
    "La simplicité est la sophistication suprême.",
    "Le succès est la somme de petits efforts répétés jour après jour.",
    "L'avenir appartient à ceux qui croient à la beauté de leurs rêves."
];

app.get('/quotes', (req, res) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    res.json({ quote: quotes[randomIndex] });
});

app.post('/quotes', express.json(), (req, res) => {
    const { quote } = req.body;
    if (quote) {
        quotes.push(quote);
        res.status(201).json({ message: "Citation ajoutée !" });
    } else {
        res.status(400).json({ error: "Aucune citation fournie." });
    }
});

app.listen(port, () => {
    console.log(`Backend écoute sur http://localhost:${port}`);
});
