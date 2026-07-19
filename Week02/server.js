const express = require('express');
const app = express();
const PORT = 3000; //port number

app.get('/', (req, res) => {      //get request
  res.send('Hello, server! The doors are open.');
});

app.listen(PORT, () => {   //starting the server at port 3000
  console.log(`Server running at http://localhost:${PORT}`);
});