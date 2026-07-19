
---

# Stage 3 — Create: POST a New Task

This stage implements the creation of a new task by accepting data from a client, enforcing backend input validation rules, and dynamically generating unique task identifiers based on the state of the current collection.

---

## API Endpoint Specifications

### `POST /tasks`

Creates a brand new task item and appends it to the in-memory array.

* **Request Headers:** `Content-Type: application/json`
* **Default Behavior:** Every incoming task is initialized with `done: false`.
* **ID Strategy:** Dynamic determination. The server inspects the last item in the array to calculate the subsequent ID value ($id_{new} = id_{last} + 1$). If the collection is empty, the ID defaults to `1`.

---

## Business Rules & Validation

The server never trusts the client. Incoming payloads must comply with the following validation matrix:

| Field | Type | Rule | Failure Outcome |
| --- | --- | --- | --- |
| **`title`** | String | Required, cannot be missing, empty, or whitespace-only. | `400 Bad Request` + JSON Error Payload |

---

## Verification Checkpoints

Use the following Windows-friendly `curl` commands to test the implementation inside your terminal.

### Checkpoint A: Valid Task Creation

Creates a task with a valid payload.

```powershell
curl -i -X POST http://localhost:3000/tasks -H "Content-Type: application/json" -d "{\"title\":\"Buy milk\"}"

```

* **Expected Status:** `201 Created`
* **Expected Body:**
```json
{
  "id": 1,
  "title": "Buy milk",
  "done": false
}

```

### Checkpoint B: Validation Enforcement

Attempts to send an empty object to trigger the business rules.

```powershell
curl -i -X POST http://localhost:3000/tasks -H "Content-Type: application/json" -d "{}"

```

* **Expected Status:** `400 Bad Request`
* **Expected Body:** A descriptive JSON block explaining that the title property cannot be left empty.