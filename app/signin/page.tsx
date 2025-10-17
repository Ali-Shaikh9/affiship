/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

    const router = useRouter();

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data, error } = await authClient.signIn.email(
      {
        email: email, // required
        password: password, // required
        rememberMe: true,
        callbackURL: "/profile",
      },
      {
        onSuccess: () => {
          router.push("/profile"); // redirect to login page
        },
      }
    );
  };

  return (
    <div className="min-h-[91.1vh] flex items-center border-t border-gray-100 justify-center bg-gradient-to-br from-yellow-400 via-yellow-400 to-yellow-200 px-4">
      <div className="bg-white/90 backdrop-blur-md rounded-md shadow-2xl p-6 sm:p-8 md:p-10 w-full max-w-sm sm:max-w-md md:max-w-lg md:w-1/4">
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl font-semibold text-center text-gray-800 mb-4 sm:mb-6">
          Join <span className="text-yellow-400">AffiShip</span>
        </h1>

        {/* Form */}
        <form
          onSubmit={(e) => handleSignIn(e)}
          className="space-y-4 sm:space-y-5"
        >
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 outline-none text-sm sm:text-base"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 outline-none text-sm sm:text-base"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-semibold rounded-md shadow-md hover:scale-105 transition-transform duration-200 disabled:opacity-70 text-sm sm:text-base"
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>

          {message && (
            <p className="text-center text-gray-700 mt-3 text-sm sm:text-base">
              {message}
            </p>
          )}
        </form>

        {/* Footer */}
        <p className="text-center text-gray-600 mt-6 text-sm sm:text-base">
          Dont have an account?{" "}
          <Link
            href={"/signup"}
            className="text-orange-500 font-semibold hover:underline"
          >
            SignUp
          </Link>
        </p>
      </div>
    </div>
  );
}
