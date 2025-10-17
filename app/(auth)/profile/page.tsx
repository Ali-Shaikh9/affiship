/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";

interface UserProfile {
  name?: string;
  email?: string;
  avatar_url?: string;
  role?: string;
  channelLink?: string;
  location?: string;
}

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<UserProfile | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    role: "",
    location:"",
    channelLink: "",
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    const init = async () => {
      const { data: session } = await authClient.getSession();

      if (!session?.user) {
        router.push("/signin");
        return;
      }

      setUser(session.user);

      // Fetch profile from server (session-based)
      const res = await fetch("/api/register");
      if (res.ok) {
        const data = await res.json();
        if (data.result) {
          setProfile(data.result);
        }
      }

      setLoading(false);
    };

    init();
  }, [router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.role) {
      setMessage("Please select your role.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to save profile");

      setProfile(data.result);
      setMessage("Profile saved successfully!");
    } catch (err: any) {
      setMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  // Show completed profile
  if (profile) {
    return (
      <div className="max-w-xl mx-auto mt-12 p-6 bg-white shadow-lg rounded-xl">
        <div className="flex items-center mb-6">
          {profile.avatar_url ? (
            <Image
              src={profile.avatar_url}
              alt="Profile Picture"
              width={80}
              height={80}
              className="rounded-full"
            />
          ) : (
            <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              {profile.name?.charAt(0).toUpperCase() || "U"}
            </div>
          )}
          <div className="ml-4">
            <h2 className="text-2xl font-bold">{profile.name}</h2>
            <p className="text-gray-600">{profile.email}</p>
            <span className="mt-1 inline-block bg-yellow-400 text-white text-sm px-2 py-1 rounded">
              {profile.role?.toUpperCase()}
            </span>
          </div>
        </div>

        {profile.channelLink && (
          <div className="mt-4">
            <h3 className="font-semibold text-gray-700">Channel / Website</h3>
            <a
              href={profile.channelLink}
              target="_blank"
              className="text-yellow-400 hover:underline break-all"
            >
              {profile.channelLink}
            </a>
          </div>
        )}

                {profile.location && (
          <div className="mt-4">
            <h3 className="font-semibold text-gray-700">location / Address</h3>

              {profile.location}
          </div>
        )}
      </div>
    );
  }

  // Show profile setup form
  return (
    <div className="max-w-xl mx-auto mt-12 p-6 bg-white shadow-lg rounded-xl">
      <h1 className="text-3xl font-bold mb-6 text-yellow-400">Complete Your Profile</h1>

      {message && <p className="mb-4 text-red-500">{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold">Name</label>
          <input
            type="text"
            value={user?.name || ""}
            readOnly
            className="w-full border rounded px-3 py-2 bg-gray-100 cursor-not-allowed"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Email</label>
          <input
            type="email"
            value={user?.email || ""}
            readOnly
            className="w-full border rounded px-3 py-2 bg-gray-100 cursor-not-allowed"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Role</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          >
            <option value="">Select your role</option>
            <option value="affiliate">Affiliate</option>
            <option value="dropshipper">Dropshipper</option>
          </select>
        </div>

                <div>
          <label className="block mb-1 font-semibold">Channel / Website Link</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="India..."
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Channel / Website Link</label>
          <input
            type="url"
            name="channelLink"
            value={formData.channelLink}
            onChange={handleChange}
            placeholder="https://yourchannel.com"
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-yellow-400 text-white py-2 rounded font-semibold hover:bg-yellow-500 transition"
        >
          {loading ? "Saving..." : "Complete Setup"}
        </button>
      </form>
    </div>
  );
}
