```markdown
# CRUD API - Stage 1

A lightweight Express.js server that establishes the foundational layout and basic health monitoring endpoints for the Task Management API.

## Project Structure
```text
└── 📁 stage-1/
    ├── 📄 README.md
    └── 📄 server.js

```

---

## Features

* **Root Endpoint (`/`)**: Provides basic metadata about the API name, version, and available core endpoints.
* **Health Check Endpoint (`/health`)**: Allows monitoring systems or clients to quickly verify that the application server is up and responsive.

---

## Setup & Running Instructions

### 1. Install Dependencies

Navigate to the stage directory and install the required Node modules:

```bash
cd Week-02/stage-1
npm install

```

### 2. Start the Server

Run the local development server using Node:

```bash
node server.js

```

The application will boot up and listen for requests at `http://localhost:3000`.

---

## Verification Checkpoints

Open a separate terminal window and run the following standard HTTP queries to confirm correct server responses:

* **Verify Meta Description:**
```bash
curl -i http://localhost:3000/

```


*Expected Output:* `200 OK` status with a JSON object containing the API metadata.
* **Verify Server Health:**
```bash
curl -i http://localhost:3000/health

```


*Expected Output:* `200 OK` status with `{"status": "ok"}`.

```

```
