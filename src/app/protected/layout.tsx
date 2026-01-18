import { HEADER_HEIGHT } from "@/lib/constants";

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className="flex-1 w-full"
      style={{
        marginTop: HEADER_HEIGHT,
      }}
    >
      {children}
    </div>
  );
}
