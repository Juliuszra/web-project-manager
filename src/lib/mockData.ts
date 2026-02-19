// TODO: Temporary mock data before database integration

export type Project = {
  id: string;
  name: string;
  description: string;
};

export type TaskStatus = "TODO" | "DOING" | "DONE";

export type Task = {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  projectId: string;
  priority: "LOW" | "MEDIUM" | "HIGH";
  deadline: string;
};

export const mockProjects: Project[] = [
  {
    id: "1",
    name: "Web Project Manager",
    description: "Application for managing IT projects",
  },
  {
    id: "2",
    name: "Test Project",
    description: "Project for testing features",
  },
];

export const mockTasks: Task[] = [
  {
    id: "t1",
    title: "Create login page",
    description: "Implement authentication view",
    status: "TODO",
    projectId: "1",
    priority: "HIGH",
    deadline: "2026-03-01",
  },
  {
    id: "t2",
    title: "Design database schema",
    description: "Prepare ERD diagram",
    status: "DOING",
    projectId: "1",
    priority: "MEDIUM",
    deadline: "2026-03-05",
  },
  {
    id: "t3",
    title: "Deploy app",
    description: "Deploy to Vercel",
    status: "DONE",
    projectId: "1",
    priority: "LOW",
    deadline: "2026-03-10",
  },
];
