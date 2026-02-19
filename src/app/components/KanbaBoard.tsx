import { Task } from "@/lib/mockData";

type Props = {
  tasks: Task[];
};

export default function KanbanBoard({ tasks }: Props) {
  const todo = tasks.filter((t) => t.status === "TODO");
  const doing = tasks.filter((t) => t.status === "DOING");
  const done = tasks.filter((t) => t.status === "DONE");

  return (
    <div style={{ display: "flex", gap: 16, marginTop: 16 }}>
      <KanbanColumn title="TODO" tasks={todo} />
      <KanbanColumn title="DOING" tasks={doing} />
      <KanbanColumn title="DONE" tasks={done} />
    </div>
  );
}

function KanbanColumn({ title, tasks }: { title: string; tasks: Task[] }) {
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
            <div
              key={task.id}
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
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
