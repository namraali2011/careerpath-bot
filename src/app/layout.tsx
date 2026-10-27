
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CareerPath | Discover Your Future",
  description:
    "CareerPath is a rule-based career guidance application with a career assessment, recommendations and a dedicated-question chatbot.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
