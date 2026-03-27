import { dbConnect } from "@/lib/mongodb";
import { Project } from "@/models/Project";
import { Task } from "@/models/Task";
import ProjectClient from "@/components/projects/ProjectClient";

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  await dbConnect();

  const project = await Project.findById(id).lean();
  if (!project) return <div>Nie znaleziono projektu</div>;

  const tasks = await Task.find({ projectId: id }).sort({ createdAt: -1 }).lean();

  const safeProject = {
    ...project,
    _id: project._id.toString(),
  };

  const safeTasks = tasks.map((t: any) => ({
    id:          t._id.toString(),
    projectId:   t.projectId.toString(),
    title:       t.title,
    description: t.description ?? "",
    priority:    t.priority,
    status:      t.status,
    deadline:    t.deadline ? new Date(t.deadline).toISOString() : null,
  }));

  return <ProjectClient project={safeProject} initialTasks={safeTasks} />;
}