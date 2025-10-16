"use client";
import React, { useState } from "react";

const Page = () => {
  const [role, setRole] = useState("");
  const [formData, setFormData] = useState({
    imageUrl:"",
    name: "",
    email: "",
    password: "",
    place: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();

    if (!role) {
      alert("Please select a role (Creator or Affiliate).");
      return;
    }

    const r = await fetch("http://localhost:3000/api/register", {
      method: "POST", // Specify the HTTP method as POST
      headers: {
        "Content-Type": "application/json", // Indicate that the body is JSON
        // Add any other necessary headers, e.g., 'Authorization': 'Bearer your_token'
      },
      body: JSON.stringify(formData), // Convert the data object to a JSON string
    });

    const data = await r.json()

    console.log(data)

    console.log({ ...formData, role });
    alert(`✅ Registered as ${role}`);
  };

  return (
    <div className="bg-gradient-to-l from-orange-300 to-yellow-400 h-[90vh] flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col bg-white justify-center items-center shadow-2xl rounded-md p-6 gap-3 w-[90%] max-w-sm"
      >
        <h1 className="text-2xl font-semibold mb-2 text-gray-800">
          Get Started
        </h1>

                <input
          type="text"
          name="imageUrl"
          placeholder="What your Image Url"
          required
          value={formData.imageUrl}
          onChange={handleChange}
          className="outline-none p-2 border border-gray-400 w-full rounded-md"
        />

        <input
          type="text"
          name="name"
          placeholder="What is your name"
          required
          value={formData.name}
          onChange={handleChange}
          className="outline-none p-2 border border-gray-400 w-full rounded-md"
        />

        <input
          type="email"
          name="email"
          placeholder="Enter your email here"
          required
          value={formData.email}
          onChange={handleChange}
          className="outline-none p-2 border border-gray-400 w-full rounded-md"
        />

        <input
          type="password"
          name="password"
          placeholder="Enter your password here"
          required
          value={formData.password}
          onChange={handleChange}
          className="outline-none p-2 border border-gray-400 w-full rounded-md"
        />

        <div className="flex gap-8 mt-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="role"
              value="creator"
              checked={role === "creator"}
              onChange={(e) => setRole(e.target.value)}
              className="h-4 w-4 text-orange-500 focus:ring-orange-400 border-gray-300"
            />
            <span className="text-slate-700 text-sm">Creator</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="role"
              value="affiliate"
              checked={role === "affiliate"}
              onChange={(e) => setRole(e.target.value)}
              className="h-4 w-4 text-orange-500 focus:ring-orange-400 border-gray-300"
            />
            <span className="text-slate-700 text-sm">Affiliate</span>
          </label>
        </div>

        {role === "affiliate" ? (
          <>
            <div>
              <input
                type="text"
                name="place"
                placeholder="Enter where you market or publish"
                required
                value={formData.place}
                onChange={handleChange}
                className="outline-none p-2 border border-gray-400 w-full rounded-md"
              />
            </div>
          </>
        ) : (
          ""
        )}

        <button
          type="submit"
          className="bg-gradient-to-t from-orange-300 to-yellow-400 p-2 w-full rounded-md text-gray-800 font-semibold hover:from-yellow-200 hover:to-orange-300 mt-4 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Page;
