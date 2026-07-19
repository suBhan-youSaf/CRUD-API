const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {   // Describing which API is using this JSON
  res.json({
    name: "Task API",
    version: "1.0",
    endpoints: ["/tasks"]
  });
});

app.get('/health', (req, res) => { //to see if teh server is alive
  res.json({ status: "ok" });
});

app.listen(PORT, () => {  //hosting the server at port 3000
  console.log(`Server running at http://localhost:${PORT}`);
});