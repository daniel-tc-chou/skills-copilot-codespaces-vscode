// Create web server
const express = require('express');
const app = express();

// Create a comments array
const comments = [];

// Create a comments array
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Create a comment
app.post('/comments', (req, res) => {
    comments.push({
        id: comments.length + 1,
        body: req.body.body
    });
    res.json({ message: 'Comment created.' });
});

// Delete a comment
app.delete('/comments/:id', (req, res) => {
    const id = req.params.id;
    const comment = comments.find(comment => comment.id === parseInt(id));
    if (comment) {
        comments = comments.filter(comment => comment.id !== parseInt(id));
        res.json({ message: 'Comment deleted.' });
    } else {
        res.status(404).json({ message: 'Comment not found.' });
    }
});

// Update a comment
app.put('/comments/:id', (req, res) => {
    const id = req.params.id;
    const comment = comments.find(comment => comment.id === parseInt(id));
    if (comment) {
        comment.body = req.body.body;
        res.json({ message: 'Comment updated.' });
    } else {
        res.status(404).json({ message: 'Comment not found.' });
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

// Path: index.js
// Create a new comment
const fetch = require('node-fetch');

fetch('http://localhost:3000/comments', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ body: 'Hello, World!' })
})
    .then(response => response.json())
    .then(data => console.log(data));

// Update a comment
fetch('http://localhost:3000/comments/1', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ body: 'Hello, World! Updated' })
})
    .then(response => response.json())
    .then(data => console.log(data));

// Delete a comment
fetch('http://localhost:3000/comments/1', {
    method: 'DELETE'
})
    .then(response => response