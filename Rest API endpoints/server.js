const express = require('express');
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// Dummy data (in-memory storage)
const posts = [
    {
        id: 0,
        author: "John Doe",
        content: "This is my first post!",
        title: "Hello World",
        likes: 12
    },
    {
        id: 1,
        author: "Sarah Smith",
        content: "Express.js is amazing!",
        title: "Learning Express",
        likes: 30
    },
    {
        id: 2,
        author: "Michael Lee",
        content: "Today I learned how to build an API.",
        title: "Coding Journey",
        likes: 8
    }
];

// =====================
// READ ALL
// =====================
server.get('/posts', (req, res) => {
    res.json(posts);
});

// =====================
// READ ONE (by ID)
// =====================
server.get('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(p => p.id === id);

    if (!post) {
        return res.status(404).json({ error: "Post not found" });
    }

    res.json(post);
});

// =====================
// CREATE
// =====================
server.post('/posts', (req, res) => {
    const { author, content, title, likes } = req.body;

    if (!author || !content || !title) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    const post = {
        id: posts.length,
        author,
        content,
        title,
        likes: likes || 0
    };

    posts.push(post);
    res.status(201).json(post);
});

// =====================
// UPDATE (PUT)
// =====================
server.put('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(p => p.id === id);

    if (!post) {
        return res.status(404).json({ error: "Post not found" });
    }

    const { author, content, title, likes } = req.body;

    if (author !== undefined) post.author = author;
    if (content !== undefined) post.content = content;
    if (title !== undefined) post.title = title;
    if (likes !== undefined) post.likes = likes;

    res.json(post);
});

// =====================
// DELETE
// =====================
server.delete('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = posts.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({ error: "Post not found" });
    }

    posts.splice(index, 1);
    res.json({ message: "Post deleted successfully" });
});

// =====================
server.listen(3000, () => {
    console.log("Listening on port 3000");
});
