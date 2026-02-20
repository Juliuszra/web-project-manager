import ProjectClient from "@/components/projects/ProjectClient";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const projectId = String(id).trim();

  return <ProjectClient projectId={projectId} />;
}