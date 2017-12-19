const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));

app.get('/', (req, res) => res.send('hello world!'));

app.listen(3000, () => console.log('listening'));
