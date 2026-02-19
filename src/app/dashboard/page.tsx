import Link from "next/link";
import { mockProjects } from "@/lib/mockData";

export default function DashboardPage() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Dashboard</h1>
      <h2>Your Projects</h2>

      <ul>
        {mockProjects.map((project) => (
          <li key={project.id} style={{ marginBottom: 10 }}>
            <Link href={`/projects/${project.id}`}>
              <strong>{project.name}</strong>
            </Link>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
