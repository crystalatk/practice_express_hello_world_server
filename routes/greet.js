'use strict';

const express = require('express'),
    router = express.Router();

router.get('/:handle', function (req, res) {
    const { handle } = req.params;
    console.log(req.params)
    let htmlData = `<h1>Hello, ${handle}!</h1>`
    res.send(htmlData);
});

// router.get('/Tiana', function(req,res) {
    
//     res.send('Hello, Luke!')
// })

// router.get('/Luke', function(req,res) {
//     res.send('Hello, Luke!')
// })

// router.get('/Ashoka', function(req,res) {
//     res.send('Hello, Ashoka!')
// })

// router.get('/Han', function(req,res) {
//     res.send('Hello, Han!')
// })

module.exports = router;