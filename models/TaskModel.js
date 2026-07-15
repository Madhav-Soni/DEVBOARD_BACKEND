const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
    {
        title: String,
        description: String,
        status: String,
        priority: String,
        assignee:String,
        dueDate: Date,
        label:String,
        projectId: String,
        createdAt: Date
    }
);

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;