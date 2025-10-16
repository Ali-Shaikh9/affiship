"use client";
import React, { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();

    if (password.length < 5) {
      setMessage("⚠️ Password length is very short!");
      return;
    }

    const { data, error } = await authClient.signUp.email({
      name: username,
      email: email,
      password: password,
      callbackURL: "/"
    }, {
        onRequest: () => {
            setLoading(true)
        },
        onSuccess: () => {
          setLoading(false)
            redirect("/profile")
        },
        onError: (ctx) => {
            // display the error message
            alert(ctx.error.message);
        },
    });

    console.log(data, error)

    setLoading(false);
    setMessage("");
  }

  return (
    <div className="min-h-[91.1vh] flex items-center border-t border-gray-100 justify-center bg-gradient-to-br from-yellow-400 via-yellow-400 to-yellow-200 px-4">
      <div className="bg-white/90 backdrop-blur-md rounded-md shadow-2xl p-6 sm:p-8 md:p-10 w-full max-w-sm sm:max-w-md md:max-w-lg md:w-1/4">
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl font-semibold text-center text-gray-800 mb-4 sm:mb-6">
          Join <span className="text-yellow-400">AffiShip</span>
        </h1>

        {/* Form */}
        <form onSubmit={handleSignup} className="space-y-4 sm:space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Username
            </label>
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Murtuza..."
              className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 outline-none text-sm sm:text-base"
            />
          </div>

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
          Already have an account?{" "}
          <Link
            href={"/signin"}
            className="text-orange-500 font-semibold hover:underline"
          >
            SignIn
          </Link>
        </p>
      </div>
    </div>
  );
}
