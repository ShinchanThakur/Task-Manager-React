const express = require('express');
require('./db/mongoose');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT;

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(taskRouter);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
