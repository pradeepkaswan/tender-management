import Header from "@/components/header";
import { getCurrentSession } from "@/lib/server/session";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = await getCurrentSession();

  return (
    <div>
      <Header user={user} />
      <main className="p-6">{children}</main>
    </div>
  );
}
