const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
    {
        name: String,
        description: String,
        owner: String,
        CreatedAt: Date
    }
);

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;