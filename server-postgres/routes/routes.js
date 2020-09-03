const express = require('express');
const db = require('../databases/config');
const { index, show, create, update, destroy } = require('../databases/queries');

const router = express.Router();

router.get('/', (req, res) => {
    db.run(index)
        .then(resp => {
            const posts = resp.rows
            res.json({posts})
        })
        .catch(err => res.status(500).end())
})

router.get('/:id', (req, res) => {
    db.run(show, [req.params.id])
        .then(resp => {
            const post = resp.rows
            res.json({post})
        })
        .catch(err => res.status(500).end())
})

router.post('/', (req, res) => {
    db.run(create, [req.body.title, req.body.name, req.body.story])
        .then(resp => {
            const post = resp.rows[0]
            res.status(201).json(post)
        })
        .catch(err => res.status(500).end())
})

router.patch('/:id', (req, res) => {
    db.run(update, [req.params.id])
        .then(updatePost => {
            const newPost = updatePost.rows[0]
            res.json({newPost})
        })
        .catch(err => res.status(500).end())
})

router.delete('/:id', (res, req) => {
    db.run(destroy, [req.params.id])
        .then(res.status(204))
        .catch(err => res.status(500).end())
})

module.exports = router;