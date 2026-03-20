import { Schema, model, models } from "mongoose";

const CommentSchema = new Schema(
  {
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    content: { type: String, required: true },
  
  },
  { timestamps: true }
);

const AttachmentSchema = new Schema(
  {
    filename: { type: String, required: true },   // oryginalna nazwa
    url: { type: String, required: true },         // link do pliku (np. uploadthing / S3)
    mimeType: { type: String, required: true },    // np. application/pdf, image/jpeg
    size: { type: Number, required: true },        // rozmiar w bajtach
    uploadedBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);  

const TaskSchema = new Schema(
  {
    projectId: { type: Schema.Types.ObjectId, ref: "Project", required: true },
    title: { type: String, required: true },  
    description: { type: String },
    priority: {
      type: String,
      enum: ["LOW", "MEDIUM", "HIGH"],
      default: "MEDIUM",
    },
    status: {
      type: String,
      enum: ["TODO", "DOING", "DONE"],
      default: "TODO",
    },
    deadline: { type: Date },
    assignees: [{ type: Schema.Types.ObjectId, ref: "User" }],
    createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
    order: { type: Number, default: 0 },           // kolejność na Kanban
    comments: [CommentSchema],
    attachments: [AttachmentSchema],
  },
  { timestamps: true }
);
TaskSchema.index({ projectId: 1, status: 1, order: 1 });

export const Task = models.Task || model("Task", TaskSchema);
