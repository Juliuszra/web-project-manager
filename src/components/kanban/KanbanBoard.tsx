import TaskCard from "@/components/kanban/TaskCard";


type Task = {
  id: string;
  projectId: string;
  title: string;
  description?: string; // <-- ważne: opcjonalne
  priority: "LOW" | "MEDIUM" | "HIGH";
  status: "TODO" | "DOING" | "DONE";
  deadline?: string | null;
};

type Props = {
  tasks: Task[];
  onMove: (taskId: string, newStatus: Task["status"]) => void;
};

export default function KanbanBoard({ tasks, onMove }: Props) {
  const todo = tasks.filter((t) => t.status === "TODO");
  const doing = tasks.filter((t) => t.status === "DOING");
  const done = tasks.filter((t) => t.status === "DONE");

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
      <div>
        <h2>TODO</h2>
        {todo.map((task) => (
          <TaskCard key={task.id} task={task} onMove={onMove} />
        ))}
      </div>

      <div>
        <h2>DOING</h2>
        {doing.map((task) => (
          <TaskCard key={task.id} task={task} onMove={onMove} />
        ))}
      </div>

      <div>
        <h2>DONE</h2>
        {done.map((task) => (
          <TaskCard key={task.id} task={task} onMove={onMove} />
        ))}
      </div>
    </div>
  );
}