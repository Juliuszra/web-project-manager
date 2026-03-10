import Link from "next/link";
import { dbConnect } from "@/lib/mongodb";
import { Project } from "@/models/Project";

export default async function DashboardPage() {
  await dbConnect();
  const projects = await Project.find().sort({ createdAt: -1 }).lean();

  return (
    <main>
      <h1>Dashboard</h1>

      <ul>
        {projects.map((p: any) => (
          <li key={p._id.toString()}>
            <Link href={`/projects/${p._id.toString()}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}