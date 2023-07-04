const express = require('express');

const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// POST API to add a new task
app.post('/api/tasks', async (req, res) => {
    try {
        const { description } = req.body;

        // Create a new task object
        const task = {
            description,
            completed: false
        };

        // Connect to MongoDB and insert the task
        // const client = await MongoClient.connect(uri);
        // const db = client.db(dbName);
        // const result = await db.collection(collectionName).insertOne(task);

        // res.status(201).json(result.ops[0]);
        res.status(200).json(task);
        res.send();
    } catch (error) {
        console.error('Error adding task:', error);
        res.status(500).json({ error: 'Failed to add task' });
        res.send();
    }
});

// GET API to fetch all tasks
app.get('/api/tasks', async (req, res) => {
    try {
        // Connect to MongoDB and fetch all tasks
        // const client = await MongoClient.connect(uri);
        // const db = client.db(dbName);
        // const tasks = await db.collection(collectionName).find().toArray();

        // res.json(tasks);
        res.send();
    } catch (error) {
        console.error('Error fetching tasks:', error);
        res.status(500).json({ error: 'Failed to fetch tasks' });
        res.send();
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
