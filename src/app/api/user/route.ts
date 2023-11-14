import { clerkClient } from "@clerk/nextjs";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const userId = searchParams.get("id");

  if (userId) {
    const user = await clerkClient.users.getUser(userId);
    return Response.json(user);
  }
}
