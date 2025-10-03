import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LangConnect - Kết nối lương y",
  description: "Gặp đúng thầy, chữa đúng bệnh. Kết nối với lương y đã được xác minh hồ sơ.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
