const express = require('express');
require('dotenv').config();
const app = express();
const port = 3000;

const { mainRoute } = require('./routes/mainRoute');
const movieRouteHandler = require('./routes/movieRouteHandler');

app.get('/', mainRoute);
app.get('/movies', movieRouteHandler);

app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});