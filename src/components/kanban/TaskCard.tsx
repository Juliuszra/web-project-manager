"use client";

import { Task, TaskStatus } from "@/lib/mockData";

type Props = {
  task: Task;
  onMove: (taskId: string, nextStatus: TaskStatus) => void;
};

const order: TaskStatus[] = ["TODO", "DOING", "DONE"];

function getNextStatus(current: TaskStatus): TaskStatus {
  const idx = order.indexOf(current);
  return order[(idx + 1) % order.length];
}

export default function TaskCard({ task, onMove }: Props) {
  const next = getNextStatus(task.status);

  return (
    <div
      style={{
        border: "1px solid #e5e5e5",
        borderRadius: 10,
        padding: 10,
        background: "white",
      }}
    >
      <strong>{task.title}</strong>

      <div style={{ fontSize: 12, opacity: 0.7, marginTop: 4 }}>
        Priority: {task.priority} | Deadline: {task.deadline}
      </div>

      <button
        onClick={() => onMove(task.id, next)}
        style={{
          marginTop: 8,
          padding: "6px 10px",
          borderRadius: 8,
          border: "1px solid #222",
          background: "white",
          cursor: "pointer",
        }}
      >
        Move → {next}
      </button>
    </div>
  );
}
