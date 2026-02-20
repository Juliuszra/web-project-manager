import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/mongodb";
import { Project } from "@/models/Project";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  await dbConnect();
  const project = await Project.findById(params.id);
  if (!project) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(project);
}