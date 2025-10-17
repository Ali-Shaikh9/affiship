import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await auth.api.getSession({
    headers: await headers(), // some endpoints might require headers
  });

  if (!session) {
    redirect("/signin");
  }

  return <>{ children }</>
}
