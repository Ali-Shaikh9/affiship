/* eslint-disable @typescript-eslint/no-explicit-any */
import { Profile } from "@/models/user.model";
import { connectMongo } from "@/lib/mongoose";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function GET() {
  await connectMongo();

  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user) {
      return new Response(JSON.stringify({ error: "Not authenticated" }), { status: 401 });
    }

    const userId = session.user.id;

    const profile = await Profile.findOne({ userId });

    if (!profile) {
      return new Response(JSON.stringify({ error: "Profile not found" }), { status: 404 });
    }

    return new Response(JSON.stringify({ result: profile }), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

export async function POST(request: Request) {
  await connectMongo();

  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user) {
      return new Response(JSON.stringify({ error: "Not authenticated" }), { status: 401 });
    }

    const userId = session.user.id;
    const name = session.user.name;
    const email = session.user.email;

    const body = await request.json();

    let profile = await Profile.findOne({ userId });
    if (profile) {
      return new Response(JSON.stringify({ message: "User already exists", result: profile }), { status: 200 });
    }

    profile = await Profile.create({
      userId,
      name,
      email,
      role: body.role,
      channelLink: body.channelLink,
      location: body.location,
      avatar_url: body.avatar_url,
    });

    return new Response(JSON.stringify({ result: profile }), { status: 201 });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
