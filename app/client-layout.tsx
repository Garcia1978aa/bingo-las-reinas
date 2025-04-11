"use client"

import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { NavigationMenu } from "@/components/navigation-menu"
import { GloriChatbot } from "@/components/glori-chatbot"
import { Footer } from "@/components/footer"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      {/* Restauramos el NavigationMenu en todas las páginas */}
      <NavigationMenu />

      {/* Contenido principal */}
      <main className="min-h-screen pt-16">{children}</main>

      {/* Restauramos el Footer en todas las páginas */}
      <Footer />

      {/* Chatbot siempre visible */}
      <GloriChatbot />
    </ThemeProvider>
  )
}
