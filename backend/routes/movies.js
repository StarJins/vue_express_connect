var express = require('express');
var router = express.Router();
var movies = require('../data/movies.json')

router.get('/', (req, res) => {
    res.send(movies);
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const movie = movies.filter((movie) => {
        return movie.id === id;
    });
    res.send(movie);
});

module.exports = router;
