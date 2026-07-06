import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-10">
      <h1 className="text-4xl font-bold">
        مرحبًا {session.user?.name}
      </h1>

      <p className="text-zinc-400 mt-2">
        لقد سجلت الدخول بنجاح.
      </p>
    </main>
  );
}