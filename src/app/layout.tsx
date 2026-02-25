import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Linklist",
  description: "My personal start page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col bg-zinc-950 antialiased`}
      >
        <header className="border-b border-zinc-800 px-6 py-4">
          <div className="mx-auto flex max-w-3xl items-center justify-between">
            <span className="text-sm font-semibold tracking-tight text-zinc-100">
              Linklist
            </span>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-zinc-800 px-6 py-5">
          <div className="mx-auto max-w-3xl text-center text-xs text-zinc-600">
            © {new Date().getFullYear()} Stefan
          </div>
        </footer>
      </body>
    </html>
  );
}
