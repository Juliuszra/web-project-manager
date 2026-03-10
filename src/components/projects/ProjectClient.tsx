"use client";

import { useState } from "react";
import KanbanBoard from "@/components/kanban/KanbanBoard";
import AddTaskForm from "@/components/tasks/AddTaskForm";

type Task = {
  id: string;
  projectId: string;
  title: string;
  description?: string;
  priority: "LOW" | "MEDIUM" | "HIGH";
  status: "TODO" | "DOING" | "DONE";
  deadline?: string | null;
};

type Project = {
  _id: string;
  name: string;
  description?: string;
};

type Props = {
  project: Project;
  initialTasks: Task[];
};

export default function ProjectClient({ project, initialTasks }: Props) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  async function handleAddTask(data: {
    title: string;
    description?: string;
    priority: "LOW" | "MEDIUM" | "HIGH";
    deadline?: string | null;
  }) {
    const res = await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, projectId: project._id }),
    });

    if (!res.ok) throw new Error("Nie udało się dodać zadania");

    const created = await res.json();

    const safeCreated: Task = {
      id: String(created._id),
      projectId: String(created.projectId),
      title: created.title,
      description: created.description ?? "",
      priority: created.priority,
      status: created.status,
      deadline: created.deadline ? new Date(created.deadline).toISOString() : null,
    };

    setTasks((prev) => [safeCreated, ...prev]);
  }

  async function handleMove(taskId: string, newStatus: Task["status"]) {
    const prev = tasks;

    setTasks((curr) =>
      curr.map((t) => (t.id === taskId ? { ...t, status: newStatus } : t))
    );

    const res = await fetch(`/api/tasks/${taskId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus }),
    });

    if (!res.ok) {
      setTasks(prev);
      throw new Error("Nie udało się zmienić statusu");
    }
  }

  return (
    <div>
      <h1>{project.name}</h1>

      <AddTaskForm projectId={project._id} onAdd={handleAddTask} />

      <KanbanBoard tasks={tasks} onMove={handleMove} />
    </div>
  );
}