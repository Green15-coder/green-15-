import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export async function getCurrentUserId(): Promise<string> {
  const session = await getServerSession(authOptions);
  if (!(session?.user as { id?: string })?.id) redirect("/login");
  return (session!.user as { id: string }).id;
}
