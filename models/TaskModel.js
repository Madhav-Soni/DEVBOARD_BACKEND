const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
    {
        title: String,
        description: String,
        status: String,
        priority: String,
        dueDate: Date,
        projectId: String,
        owner: String,
        createdAt: Date
    }
);

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;