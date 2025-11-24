import type { ReactNode } from "react";

type AppLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <main className="flex-1 px-6 py-10 lg:px-12">{children}</main>
    </div>
  );
}