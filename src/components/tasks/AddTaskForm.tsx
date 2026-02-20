"use client";

import { useState } from "react";
import { Task } from "@/lib/mockData";

type Props = {
  projectId: string;
  onAdd: (task: Task) => void;
};

export default function AddTaskForm({ projectId, onAdd }: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<Task["priority"]>("MEDIUM");
  const [deadline, setDeadline] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) return;

    const newTask: Task = {
      id: `t_${Date.now()}`,
      title: title.trim(),
      description: description.trim(),
      status: "TODO",
      projectId,
      priority,
      deadline: deadline || "missing data",
    };

    onAdd(newTask);

    setTitle("");
    setDescription("");
    setPriority("MEDIUM");
    setDeadline("");
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 16, marginBottom: 16 }}>
      <h3 style={{ marginBottom: 8 }}>Add task</h3>

      <div style={{ display: "flex", flexDirection: "column", gap: 8, maxWidth: 420 }}>
        <input
          placeholder="Title (required)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ padding: 8, border: "1px solid #ccc", borderRadius: 8 }}
        />

        <input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ padding: 8, border: "1px solid #ccc", borderRadius: 8 }}
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value as Task["priority"])}
          style={{ padding: 8, border: "1px solid #ccc", borderRadius: 8 }}
        >
          <option value="LOW">LOW</option>
          <option value="MEDIUM">MEDIUM</option>
          <option value="HIGH">HIGH</option>
        </select>

        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          style={{ padding: 8, border: "1px solid #ccc", borderRadius: 8 }}
        />

        <button
          type="submit"
          style={{
            padding: 10,
            borderRadius: 10,
            border: "1px solid #222",
            background: "#222",
            color: "white",
            cursor: "pointer",
          }}
        >
          Add
        </button>
      </div>
    </form>
  );
}
