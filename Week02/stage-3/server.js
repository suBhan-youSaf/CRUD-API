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

// PUT /tasks/:id - it Updates a task
app.put('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const { title, done } = req.body;

    const task = tasks.find(t => t.id === taskId);    // Finding the task in your local array

    if (!task) {            // 404 error message if the ID doesn't exist
        return res.status(404).json({ error: 'Task not found' });
    }

    if (title === undefined && done === undefined) {        // 400 if the body is completely empty or missing required types
        return res.status(400).json({ error: 'Missing title or done status to update' });
    }
    if (title !== undefined) {                    // Update fields if they were provided in the request body
        if (typeof title !== 'string' || title.trim() === '') {
            return res.status(400).json({ error: 'Title must be a non-empty string' });
        }
        task.title = title;
    }
    if (done !== undefined) {
        if (typeof done !== 'boolean') {
            return res.status(400).json({ error: 'Done must be a boolean' });
        }
        task.done = done;
    }
    res.status(200).json(task); // code 200 if task found
});

// DELETE /tasks/:id - Removes a task
app.delete('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(t => t.id === taskId);      // Finding the index of the task
    if (taskIndex === -1) { //        // 404 error message if the ID doesn't exist
        return res.status(404).json({ error: 'Task not found' });
    }
    tasks.splice(taskIndex, 1); //remocving fromm array
    res.status(204).send();     // Error Code 204 for a successful deletion
});

app.listen(PORT, () => {  //hosting the server at port 3000
  console.log(`Server running at http://localhost:${PORT}`);
});