"use client"

import { User, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()

  const handleLogin = () => {
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-[#2e55cc] rounded-2xl p-8 w-full max-w-sm shadow-2xl">
        <h1 className="text-[#ffffff] text-xl font-semibold text-center mb-6">USER LOGIN</h1>

        <div className="space-y-4">
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#cccccc] w-5 h-5" />
            <Input
              type="text"
              placeholder=""
              className="pl-10 bg-[#ffffff] border-0 rounded-md h-12 text-gray-900 placeholder:text-[#cccccc]"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#cccccc] w-5 h-5" />
            <Input
              type="password"
              placeholder=""
              className="pl-10 bg-[#ffffff] border-0 rounded-md h-12 text-gray-900 placeholder:text-[#cccccc]"
            />
          </div>

          <Button
            onClick={handleLogin}
            className="w-full bg-[#002493] hover:bg-[#001a6b] text-[#ffffff] rounded-md h-12 font-medium mt-6"
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  )
}
