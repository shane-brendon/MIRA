import { signInAction } from "@/app/actions"
import { FormMessage, Message } from "@/components/form-message"
import { SubmitButton } from "@/components/submit-button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default async function Login(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams
  return (
    <form className="flex-1 flex flex-col w-full min-w-64 items-center">
      <div className=" bg-white p-8 rounded-lg sm:w-[560px] w-full">
        <h1 className="text-3xl font-bold mb-8">Login</h1>
        <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
          <Label htmlFor="email">Email</Label>
          <Input
            name="email"
            placeholder="you@example.com"
            required
            className="mb-4"
          />
          <div className="flex justify-between items-center">
            <Label htmlFor="password">Password</Label>
            <Link
              className="text-xs text-foreground underline"
              href="/forgot-password"
            >
              Forgot Password?
            </Link>
          </div>
          <Input
            type="password"
            name="password"
            placeholder="Your password"
            required
          >
            <Eye />
          </Input>
          <SubmitButton
            pendingText="Signing In..."
            formAction={signInAction}
            className="mt-8"
          >
            Sign in
          </SubmitButton>
          {/* <div className="text-center mt-8">
            <p>Need to create an account? <Link href={'/sign-up'}  className="text-primary font-bold underline">sign up</Link></p>
          </div> */}
          <div className="text-left mt-8">
            <p>
              As we are still work in progress, please the following credentials :
            </p>
            <p className="mt-3">
              Email : <strong>test@gmail.com</strong>
            </p>
            <p>
              Password : <strong>12345678</strong>
            </p>
          </div>
          <FormMessage message={searchParams} />
        </div>
      </div>
    </form>
  )
}
