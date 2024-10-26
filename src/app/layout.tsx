import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Learning Laguages",
  description: "Learning Laguages",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
