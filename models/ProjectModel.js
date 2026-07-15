const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
    {

        name:String,
        description:String,
        color:color,
        owner:String,
        workspace:String,
        members:String,
        createdAt:Date,
        updatedAt:Date
    }
);

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;