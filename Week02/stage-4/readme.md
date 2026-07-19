# CRUD API — Stage 3: Update & Delete

This stage completes the core lifecycle of the Task Management API by implementing data modification and removal, strictly adhering to REST conventions and error handling.

---

## 🛠️ Stage 3 API Specifications

### 1. Update Task
*   **Endpoint:** `PUT /tasks/:id`
*   **Behavior:** Replaces a task's `title` and/or `done` status with the values provided in the request body. Returns the fully updated task object.
*   **Status Codes:**
    *   `200 OK` — Success, returns the updated task.
    *   `400 Bad Request` — Request body is empty, missing parameters, or contains invalid data types (e.g., non-string title or non-boolean status).
    *   `404 Not Found` — The specified task ID does not exist.

### 2. Delete Task
*   **Endpoint:** `DELETE /tasks/:id`
*   **Behavior:** Permanently removes the targeted task from the collection.
*   **Status Codes:**
    *   `204 No Content` — Success, item deleted (empty response body).
    *   `404 Not Found` — The specified task ID does not exist.

---

## 🧪 Terminal Verification (cURL)

Verify the Stage 4 implementation using these consecutive testing commands:

```bash
# 1. Update title and mark task as done (Expected: 200 OK with updated JSON)
curl -X PUT http://localhost:3000/tasks/1 -H "Content-Type: application/json" -d "{\"title\":\"Stage 4 complete\", \"done\": true}"

# 2. Test input validation with invalid data type (Expected: 400 Bad Request)
curl -X PUT http://localhost:3000/tasks/1 -H "Content-Type: application/json" -d "{\"done\": \"not_a_boolean\"}"

# 3. Delete the task (Expected: 204 No Content)
curl -X DELETE http://localhost:3000/tasks/1

# 4. Verify deletion error handling by requesting the same ID (Expected: 404 Not Found)
curl -X DELETE http://localhost:3000/tasks/1