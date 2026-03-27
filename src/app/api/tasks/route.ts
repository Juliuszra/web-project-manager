import {NextResponse} from 'next/server';
import {dbConnect} from '@/lib/mongodb';
import {Task} from '@/models/Task';

export async function GET(req: Request) {
  await dbConnect();

    const {searchParams} = new URL(req.url);
    const projectId = searchParams.get('projectId');

    const tasks = await Task.find(projectId ? {projectId} : {}).sort({
        status: 1,
        order: 1,
    });
    return NextResponse.json(tasks);
}

export async function POST(req: Request) {
    await dbConnect();
    const body = await req.json();

    const task = await Task.create({
        projectId: body.projectId,
        title: body.title,
        description: body.description ?? '',
        priority: body.priority ?? 'MEDIUM',
        status: body.status ?? 'TODO',
        deadline: body.deadline,
        assignees: body.assignees ?? [],
        createdBy: body.createdBy ?? "000000000000000000000000",
        order: body.order ?? 0,
    });

    return NextResponse.json(task, {status: 201});
}