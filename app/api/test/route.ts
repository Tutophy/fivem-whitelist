export async function GET() {
  return Response.json({
    nextauth: process.env.NEXTAUTH_SECRET ? "FOUND" : "MISSING",
    url: process.env.NEXTAUTH_URL ? "FOUND" : "MISSING",
    discordId: process.env.DISCORD_CLIENT_ID ? "FOUND" : "MISSING",
    database: process.env.DATABASE_URL ? "FOUND" : "MISSING",
  });
}