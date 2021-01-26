'use strict';


const express = require('express'),
    router = express.Router();

router.get('/', function(req, res) {
    res.send('Ryan, when someone asks you if you\'re a god, you say "YES"!');
});

module.exports = router;