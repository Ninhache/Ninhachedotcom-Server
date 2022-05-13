const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    try {
        res.sendFile(__dirname + '/public/Resume/index.html');
    } catch (err) {
        console.error(`Error while getting index.html `, err.message);
        next(err);
    }
});


module.exports = router;