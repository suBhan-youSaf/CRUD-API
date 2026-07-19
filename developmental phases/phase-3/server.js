const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());

const tasks = [                         // a sample database to verify
  { id: 1, title: "Clean bedroom", done: true },
  { id: 2, title: "Make breakfast", done: true },
  { id: 3, title: "Go for jogging", done: false }
];

// STAGE 1 Endpoints
app.get('/', (req, res) => {
  res.json({
    name: "Task API",
    version: "1.0",
    endpoints: ["/tasks"]
  });
});

app.get('/health', (req, res) => {   // to monitor the servers health
  res.json({ status: "ok" });
});

// STAGE 2 Endpoints
app.get('/tasks', (req, res) => {                 // GET /tasks - Returns all the tasks
  res.json(tasks);
});

app.get('/tasks/:id', (req, res) => {            // GET /tasks/:id - search for a task by its ID
  const taskId = parseInt(req.params.id);         // Extracting the ID from the URL path parameters and convert it to a number
  const foundTask = tasks.find(task => task.id === taskId);           // Looking for the task inside sample database
  if (!foundTask) {       // If the task wasn't found, returning a 404 status code with an error message
    return res.status(404).json({ error: `Task ${req.params.id} not found` });
  }
  res.json(foundTask);       // If it was found, sending it back with the default 200 OK status
});


// STAGE 3 Endpoints
app.post('/tasks', (req, res) => {
    const { title } = req.body;
    if (!title || title.trim() === "") {     //Validating input
        return res.status(400).json({ 
            error: "Bad Request", 
            message: "Title is required and cannot be empty." 
        });
    }
    const nextId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;     //Calculating the next ID purely from the existing array
    const newTask = {             ////Creating the new task object
        id: nextId,
        title: title.trim(),
        done: false
    };
    tasks.push(newTask);      //Adding to array and respond with 201 msg
    return res.status(201).json(newTask);
});

app.listen(PORT, () => {  //hosting the server at port 3000
  console.log(`Server running at http://localhost:${PORT}`);
});