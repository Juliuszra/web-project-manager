import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/mongodb";
import { Project } from "@/models/Project";

export async function GET() {
  await dbConnect();
  const projects = await Project.find().sort({ createdAt: -1 });
  return NextResponse.json(projects);
}

export async function POST(req: Request) {
  await dbConnect();
  const body = await req.json();

  const project = await Project.create({
    name: body.name,
    description: body.description ?? "",
  });

  return NextResponse.json(project, { status: 201 });
}