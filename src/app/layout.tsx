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
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}