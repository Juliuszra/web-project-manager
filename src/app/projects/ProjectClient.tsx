"use client";

import { useMemo, useState } from "react";
import { mockProjects, mockTasks, Task } from "@/lib/mockData";
import KanbanBoard from "@/components/kanban/KanbanBoard";
import AddTaskForm from "@/components/tasks/AddTaskForm";

type Props = {
  projectId: string;
};

export default function ProjectClient({ projectId }: Props) {
  const project = useMemo(
    () => mockProjects.find((p) => p.id === projectId),
    [projectId]
  );

  const initialTasks = useMemo(
    () => mockTasks.filter((t) => t.projectId === projectId),
    [projectId]
  );

  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  if (!project) return <div>Project not found (id: {projectId})</div>;

  return (
    <div style={{ padding: 20 }}>
      <h1>{project.name}</h1>
      <p>{project.description}</p>

      <AddTaskForm
        projectId={projectId}
        onAdd={(newTask: Task) => setTasks((prev) => [newTask, ...prev])}

      />

      <h2>Kanban</h2>
      <KanbanBoard
        tasks={tasks}
        onMove={(taskId, nextStatus) => {
          setTasks((prev) =>
            prev.map((t) => (t.id === taskId ? { ...t, status: nextStatus } : t))
          );
        }}
      />
    </div>
  );
}