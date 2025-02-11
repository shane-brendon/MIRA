import { redirect } from "next/navigation"
import { createClient } from "@/utils/supabase/server"

export default async function Home() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return redirect("/sign-in")
  }
  return redirect("/dashboard")
}
