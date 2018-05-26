const express = require('express');
const router = require('./router');

const app = express();
const port = 8081;

app.use('/', router);
app.listen(port);

module.exports = app;