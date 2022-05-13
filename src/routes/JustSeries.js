const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    try {
        res.sendFile(__dirname + '/public/JustSeries/index.html');
    } catch (err) {
        console.error(`Error while getting index.html `, err.message);
        next(err);
    }
});

/*
router.use('/oui', function(req, res, next) {
    try {
        res.write("<h1>Just SeriesOUIIIIIIIII</h1>");
    } catch (err) {
        console.error(`Error while getting OUII? `, err.message);
        next(err);
    }
});
*/

module.exports = router;