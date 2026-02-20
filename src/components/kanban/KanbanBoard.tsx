import { Task, TaskStatus } from "@/lib/mockData";
import TaskCard from "@/components/kanban/TaskCard";

type Props = {
  tasks: Task[];
  onMove: (taskId: string, nextStatus: TaskStatus) => void;
};

export default function KanbanBoard({ tasks, onMove }: Props) {
  const todo = tasks.filter((t) => t.status === "TODO");
  const doing = tasks.filter((t) => t.status === "DOING");
  const done = tasks.filter((t) => t.status === "DONE");

  return (
    <div style={{ display: "flex", gap: 16, marginTop: 16 }}>
      <KanbanColumn title="TODO" tasks={todo} onMove={onMove} />
      <KanbanColumn title="DOING" tasks={doing} onMove={onMove} />
      <KanbanColumn title="DONE" tasks={done} onMove={onMove} />
    </div>
  );
}

function KanbanColumn({
  title,
  tasks,
  onMove,
}: {
  title: string;
  tasks: Task[];
  onMove: (taskId: string, nextStatus: TaskStatus) => void;
}) {
  return (
    <div
      style={{
        flex: 1,
        border: "1px solid #ddd",
        borderRadius: 10,
        padding: 12,
        minHeight: 220,
        background: "#fafafa",
      }}
    >
      <h3 style={{ marginTop: 0 }}>{title}</h3>

      {tasks.length === 0 ? (
        <p style={{ opacity: 0.6 }}>No tasks</p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} onMove={onMove} />
          ))}
        </div>
      )}
    </div>
  );
}
