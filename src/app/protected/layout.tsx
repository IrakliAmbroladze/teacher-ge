import { HEADER_HEIGHT } from "@/lib/constants";

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      style={{
        marginTop: HEADER_HEIGHT,
        width: "100%",
      }}
    >
      {children}
    </div>
  );
}
