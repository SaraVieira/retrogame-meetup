"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

export default function Example() {
  const { user } = useUser();

  return (
    <div className="w-screen h-screen flex items-center justify-center gap-4">
      <UserButton afterSignOutUrl="/" />
      {user && <Link href={`signups/${user.id}`}>See your ticket</Link>}
    </div>
  );
}
