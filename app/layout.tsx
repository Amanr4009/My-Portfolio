import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Aman Kumar - Full Stack Developer",
  description:
    "Full Stack Developer with expertise in MERN stack, AWS, and modern web technologies. Building scalable applications and AI-powered solutions.",
  generator: "v0.dev",
  keywords: ["Full Stack Developer", "React", "Node.js", "AWS", "JavaScript", "MERN Stack"],
  authors: [{ name: "Aman Kumar" }],
  openGraph: {
    title: "Aman Kumar - Full Stack Developer",
    description: "Full Stack Developer with expertise in MERN stack, AWS, and modern web technologies.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
