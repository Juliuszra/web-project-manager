import { Schema, model, models } from "mongoose";

const TaskSchema = new Schema(
  {
    projectId: { type: Schema.Types.ObjectId, ref: "Project", required: true },
    title: { type: String, required: true },
    description: { type: String },
    priority: { type: String, enum: ["LOW", "MEDIUM", "HIGH"], default: "MEDIUM" },
    status: { type: String, enum: ["TODO", "DOING", "DONE"], default: "TODO" },
    deadline: { type: Date },
  },
  { timestamps: true }
);

export const Task = models.Task || model("Task", TaskSchema);