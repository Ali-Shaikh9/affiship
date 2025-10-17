"use server";

import React from "react";
import Link from "next/link";
import { User2, Settings, LayoutDashboard, Users } from "lucide-react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // some endpoints might require headers
  });

  if (!session) {
    redirect("/signin");
    return (
      <div className="h-[91.1vh] justify-center items-center">
        <div>Not Authenticated</div>
      </div>
    );
  }

  if (session)
    return (
      <div className=" h-[90.8vh] bg-gray-50 flex">
        {/* Left Section - Navigation */}
        <div className="w-64 bg-white shadow-xl flex flex-col justify-between p-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Affiship
            </h2>

            <nav className="space-y-2">
              <Link
                href="/profile"
                className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-yellow-400 transition"
              >
                <User2 className="w-5 h-5" />
                <span>My Profile</span>
              </Link>

              <Link
                href="/dashboard"
                className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-yellow-400 transition"
              >
                <LayoutDashboard className="w-5 h-5" />
                <span>Dashboard</span>
              </Link>

              <Link
                href="/affiliates"
                className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-yellow-400 transition"
              >
                <Users className="w-5 h-5" />
                <span>Affiliates</span>
              </Link>

              <Link
                href="/create"
                className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-yellow-400 transition"
              >
                <Settings className="w-5 h-5" />
                <span>Create AdPost</span>
              </Link>
            </nav>
          </div>

          {/* <button
          onClick={() => console.log("logout")}
          className="flex items-center gap-3 px-4 py-2 rounded-lg text-red-600 hover:bg-red-50 transition"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button> */}
        </div>

        {/* Right Section - Main Content */}
        <main className="flex-1 p-8">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">
            Welcome back, {session.user.name} 👋
          </h1>
          <p className="text-gray-600 mb-8">
            Here’s your Affiship overview — track your performance, update your
            details, or manage your affiliates.
          </p>
        </main>
      </div>
    );
};

export default Dashboard;
