'use strict';

const HTTP = require('http');

const HOSTNAME = '127.0.0.1';
const PORT = 3333;

const express = require('express');
const app = express();

const SERVER = HTTP.createServer(app);

SERVER.listen(PORT, HOSTNAME, function() {
    console.log(`Server is running at http://${HOSTNAME}:${PORT}`);
});

const rootController = require('./routes/index');
const catsController = require('./routes/cats');
const dogsController = require('./routes/dogs');
const catsAndDogsController = require('./routes/cats_and_dogs');
const seanController = require('./routes/sean');
const greetController = require('./routes/greet');

app.use('/', rootController);
app.use('/cats', catsController);
app.use('/dogs', dogsController);
app.use('/catsanddogs', catsAndDogsController);
app.use('/sean/', seanController);
app.use('/greet', greetController);