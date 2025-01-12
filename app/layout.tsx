import DeployButton from "@/components/deploy-button"
import { EnvVarWarning } from "@/components/env-var-warning"
import HeaderAuth from "@/components/header-auth"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { hasEnvVars } from "@/utils/supabase/check-env-vars"
import { Geist } from "next/font/google"
import { ThemeProvider } from "next-themes"
import Link from "next/link"
import "./globals.css"
import Image from "next/image"

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000"

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
}

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen flex items-center justify-center">
            <div className="flex items-center 2xl:bg-white ">
              <div className="relative hidden xl:block">
                <div className="p-5">
                  <Image
                    src={"/img/login.svg"}
                    width={560}
                    height={920}
                    alt=""
                    className="rounded-lg"
                  />

                  <div className="absolute bottom-10 text-white left-10">
                    <h1 className="text-3xl font-bold max-w-[380px] mb-6">
                      Keep track of your money and save for your future
                    </h1>
                    <div className="text-sm max-w-[430px]">
                      <p>
                        Personal finance app puts you in control of your
                        spending. Track transactions, set budgets, and add to
                        savings pots easily.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-screen grid place-items-center px-5 xl:px-[140px]">
                {children}
              </div>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
