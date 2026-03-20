export type TaskPriority = "LOW" | "MEDIUM" | "HIGH";
export type TaskStatus = "TODO" | "DOING" | "DONE";

export interface IComment {
  _id: string;
  author: string;
  content: string;
  createdAt: string;
}

export interface IAttachment {
  _id: string;
  filename: string;
  url: string;
  mimeType: string;
  size: number;
  uploadedBy: string;
}

export interface ITask {
  _id: string;
  projectId: string;
  title: string;
  description?: string;
  priority: TaskPriority;
  status: TaskStatus;
  deadline?: string;
  assignees: string[];
  createdBy: string;
  order: number;
  comments: IComment[];
  attachments: IAttachment[];
  createdAt: string;
  updatedAt: string;
}