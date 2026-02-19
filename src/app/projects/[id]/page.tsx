import { mockProjects, mockTasks } from "@/lib/mockData";
import KanbanBoard from "@/app/components/KanbaBoard";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const cleanId = String(id).trim();

  const project = mockProjects.find((p) => p.id === cleanId);
  if (!project) return <div>Project not found (id: {cleanId})</div>;

  const projectTasks = mockTasks.filter((t) => t.projectId === cleanId);

  return (
    <div style={{ padding: 20 }}>
      <h1>{project.name}</h1>
      <p>{project.description}</p>

      <h2>Kanban</h2>
      <KanbanBoard tasks={projectTasks} />
    </div>
  );
}
