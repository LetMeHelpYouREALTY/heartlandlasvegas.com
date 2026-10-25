import { headers } from "next/headers";
import AutoBreadcrumbs from "@/components/shared/AutoBreadcrumbs";

export default async function InnerPageChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = (await headers()).get("x-pathname") || "/";
  const isHome = pathname === "/";

  return (
    <>
      {!isHome && <AutoBreadcrumbs pathname={pathname} />}
      <div className={isHome ? undefined : "pt-24"}>{children}</div>
    </>
  );
}
