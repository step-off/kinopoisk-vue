const express = require('express');
const app = express();
const port = 3000;

const { mainRoute } = require('./routes/mainRoute');

app.get('/', mainRoute);

app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});