import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    dateStarted: { type: String },
    status: { type: String },
    link: { type: String }
});

export default mongoose.model("Project", projectSchema);