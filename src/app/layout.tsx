import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mood for Thought",
  description: "Turn a rough idea into a creative direction.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
