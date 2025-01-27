import { signUpAction } from "@/app/actions"
import { FormMessage, Message } from "@/components/form-message"
import { SubmitButton } from "@/components/submit-button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { SmtpMessage } from "../smtp-message"

export default async function Signup(props: {
  searchParams: Promise<Message>
}) {
  const searchParams = await props.searchParams
  if ("message" in searchParams) {
    return (
      <div className="w-full flex-1 flex items-center h-screen sm:max-w-md justify-center gap-2 p-4">
        <FormMessage message={searchParams} />
      </div>
    )
  }

  return (
    <>
      <form className="flex flex-col w-full sm:w-[560px]bg-white p-8 rounded-lg bg-white">
        <h1 className="text-2xl font-medium">Sign up</h1>
        <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
          <Label htmlFor="name">name</Label>
          <Input name="name" placeholder="John Doe" required className="mb-4" />
          <Label htmlFor="email">Email</Label>
          <Input
            name="email"
            placeholder="you@example.com"
            required
            className="mb-4"
          />
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            name="password"
            placeholder="Your password"
            minLength={6}
            required
          />
          <SubmitButton formAction={signUpAction} pendingText="Signing up...">
            Sign up
          </SubmitButton>

          <div className="text-center mt-8">
            <p>
              Already have an account?
              <Link
                className="text-primary font-bold underline"
                href="/sign-in"
              >
                login
              </Link>
            </p>
          </div>
        </div>
      </form>
    </>
  )
}
