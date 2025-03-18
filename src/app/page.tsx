"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Eye, Mail, X } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/admin")
  }

  return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <div className="bg-white rounded-3xl shadow-lg m-auto w-[90%] overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left side with illustration */}
            <div className="p-6 md:w-1/2 relative flex items-center justify-start">
              <Image
                  src="/loginPage.png"
                  alt="login"
                  layout="fill"
                  objectFit="center"
              />
            </div>

            {/* Right side with login form */}
            <div className="p-8 md:w-1/2">
              <div className="max-w-md mx-auto py-8">
                <h1 className="text-3xl font-bold mb-8">Login</h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-full focus:outline-none"
                          placeholder="example@gmail.com"
                          style={{ borderColor: "#FAE27C" }}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-gray-700 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                        <Eye className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                          type={showPassword ? "text" : "password"}
                          id="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-full focus:outline-none"
                          placeholder="********"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Link href="#" className="hover:underline text-dashPurple">
                      Forgot Password?
                    </Link>
                  </div>

                  <button
                      type="submit"
                      className="w-full text-white font-medium py-3 rounded-full transition-colors bg-dashPurple"

                  >
                    Log In
                  </button>
                </form>

                <div className="mt-8 text-center">
                  <div className="flex items-center justify-center">
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <span className="px-4 text-gray-500 text-sm">Or Continue With</span>
                    <div className="flex-1 h-px bg-gray-300"></div>
                  </div>

                  <div className="flex justify-center space-x-4 mt-6">
                    <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                        <path
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            fill="#4285F4"
                        />
                        <path
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            fill="#34A853"
                        />
                        <path
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            fill="#FBBC05"
                        />
                        <path
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            fill="#EA4335"
                        />
                        <path d="M1 1h22v22H1z" fill="none" />
                      </svg>
                    </button>
                    <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                        <path
                            d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
                            fill="#1877F2"
                        />
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="#FFFFFF" />
                      </svg>
                    </button>
                    <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                        <path
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                            fill="none"
                        />
                        <path
                            d="M15.45 12.5l-3.15-1.85c-.27-.17-.5-.05-.5.27v3.16c0 .31.23.44.5.27l3.15-1.85c.27-.17.27-.43 0-.6z"
                            fill="#000000"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <p className="mt-8 text-center text-gray-600">
                  Don&apos;t have an account?{" "}
                  <Link href="#" className="hover:underline" style={{ color: "#CFCEFF" }}>
                    Sign Up here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

