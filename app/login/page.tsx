"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-zinc-950">
      <button
        onClick={() => signIn("discord")}
        className="bg-indigo-600 px-6 py-3 rounded-lg text-white hover:bg-indigo-500"
      >
        Login with Discord
      </button>
    </main>
  );
}