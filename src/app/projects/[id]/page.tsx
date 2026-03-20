    import { dbConnect } from "@/lib/mongodb";
    import { Project } from "@/models/Project";
    import { Task } from "@/models/Task";
    import ProjectClient from "@/components/projects/ProjectClient";

    export default async function ProjectPage({ params }: { params: { id: string } }) {
      await dbConnect();

      const project = await Project.findById(params.id).lean();
      if (!project) return <div>Nie znaleziono projektu</div>;

      const tasks = await Task.find({ projectId: params.id }).sort({ createdAt: -1 }).lean();

      // ważne: serializacja _id dla klienta
      const safeProject = {
        ...project,
        _id: project._id.toString(),
      };

    const safeTasks = tasks.map((t: any) => ({
      id: t._id.toString(),
      projectId: t.projectId.toString(),
      title: t.title,
      description: t.description ?? "",
      priority: t.priority,
      status: t.status,
      deadline: t.deadline ? new Date(t.deadline).toISOString() : null,
    }));

      return <ProjectClient project={safeProject} initialTasks={safeTasks} />;
    }