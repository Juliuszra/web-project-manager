export type ProjectStatus = "ACTIVE" | "COMPLETED" | "ARCHIVED";

export interface IProject {
  _id: string;
  name: string;
  description?: string;
  status: ProjectStatus;
  deadline?: string;
  owner: string;
  team?: string;
  members: string[];
  createdAt: string;
  updatedAt: string;
}