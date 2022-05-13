/*  *   *   *   *   *   *   *

EXEMPLE FILE, DO NOT LOAD THIS USING MAIN.JS !

*   *   *   *   *   *   *   */

const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    try {
        res.sendFile(__dirname + '/public/Exemple/index.html');
    } catch (err) {
        console.error(`Error while getting index.html `, err.message);
        next(err);
    }
});


router.use('/foo', function(req, res, next) {
    try {
        res.write("You went on /Exemple/Foo");
    } catch (err) {
        console.error(`You get an error.. :(`, err.message);
        next(err);
    }
});

module.exports = router;