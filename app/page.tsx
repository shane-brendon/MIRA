import Hero from "@/components/hero"
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps"
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps"
import { hasEnvVars } from "@/utils/supabase/check-env-vars"
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
