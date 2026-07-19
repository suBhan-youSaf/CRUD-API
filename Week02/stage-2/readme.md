```markdown
# CRUD API - Stage 2

An updated Express.js server implementing an in-memory data store to manage, query, and retrieve task structures. This stage introduces URL path parameter handling and strict HTTP status code assignment.

## Project Structure
```text
└── 📁 stage-2/
    ├── 📄 README.md
    └── 📄 server.js

```

---

## Features

* **In-Memory Data Store**: Uses a native JavaScript array containing mock task objects with structured keys (`id`, `title`, `done`).
* **Fetch Data Collection (`GET /tasks`)**: Returns the full list of available task items.
* **Dynamic Entity Lookup (`GET /tasks/:id`)**: Parses the dynamic incoming path parameter (`:id`) to locate matching tasks.
* **Robust Error Handling**: Explicitly responds with a `404 Not Found` HTTP status code and a structured JSON error string when an invalid task identifier is requested.

---

## Setup & Running Instructions

### 1. Install Dependencies

Navigate to the stage directory and install the required components:

```bash
cd Week-02/stage-2
npm install

```

### 2. Start the Server

Boot up the node environment:

```bash
node server.js

```

The application will listen for incoming requests at `http://localhost:3000`.

---

## Verification Checkpoints

Open a separate terminal window and run the following HTTP tests using `curl.exe`:

* **Retrieve All Tasks:**
```bash
curl.exe -i http://localhost:3000/tasks

```


*Expected Output:* `200 OK` along with a JSON array holding all 3 pre-filled tasks.
* **Retrieve an Existing Single Task:**
```bash
curl -i http://localhost:3000/tasks/1

```


*Expected Output:* `200 OK` along with the matching singular task object.
* **Verify 404 Missing Record Handling:**
```bash
curl -i http://localhost:3000/tasks/99

```


*Expected Output:* `404 Not Found` status alongside the error JSON payload: `{"error": "Task 99 not found"}`.

```

```