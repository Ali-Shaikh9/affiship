/* eslint-disable @next/next/no-img-element */
"use client";
import { authClient } from "@/lib/auth-client";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState("")

  const {data:session} = authClient.useSession()

  useEffect(() => {
    if(session) {
      setId(session.user.id)
    }
  }, [session])
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-300 to-yellow-400 grid grid-cols-2">
      {/* Left Form */}
      <div className="ad-form flex justify-center items-center">
        <form
          className="flex flex-col justify-center items-start border border-white rounded-md w-3/4 p-6 bg-white gap-6 shadow-lg"
        >
          <div className="w-full">
            <label className="block mb-1 text-2xl font-semibold text-gray-700">
              Id
            </label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              className="w-full border-2 outline-yellow-400 rounded px-3 py-2 border-yellow-400 cursor-not-allowed"
              readOnly
              value={id}
            />
          </div>
          <div className="w-full">
            <label className="block mb-1 text-2xl font-semibold text-gray-700">
              Title
            </label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              className="w-full border-2 outline-yellow-400 rounded px-3 py-2 border-yellow-400"
              placeholder="Moon Lamp..."
              value={title}
            />
          </div>

          <div className="w-full">
            <label className="block mb-1 text-2xl font-semibold text-gray-700">
              Description
            </label>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border-2 outline-yellow-400 rounded px-3 py-2 border-yellow-400 h-24 resize-none"
              placeholder="What a fantastic product..."
              value={description}
            />
          </div>

          <div className="w-full">
            <label className="block mb-1 text-2xl font-semibold text-gray-700">
              Image URL
            </label>
            <input
              onChange={(e) => setImage(e.target.value)}
              type="text"
              className="w-full border-2 outline-yellow-400 rounded px-3 py-2 border-yellow-400"
              placeholder="https://example.com/image.jpg"
              value={image}
            />
          </div>

          <div className="w-full">
            <label className="block mb-1 text-2xl font-semibold text-gray-700">
              Price
            </label>
            <input
              onChange={(e) => setPrice(e.target.value)}
              type="text"
              className="w-full border-2 outline-yellow-400 rounded px-3 py-2 border-yellow-400"
              placeholder="$1.99"
              value={price}
            />
          </div>

          <div className="w-full">
            <label className="block mb-1 text-2xl font-semibold text-gray-700">
              Your Name
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="w-full border-2 outline-yellow-400 rounded px-3 py-2 border-yellow-400"
              placeholder="Murtuza..."
              value={name}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-semibold rounded-md shadow-md hover:scale-105 transition-transform duration-200 disabled:opacity-70 text-sm sm:text-base"
          >
            Create And Publish
          </button>

        </form>
      </div>

      {/* Right Preview */}
      <div className="ad-preview flex justify-center items-center">
        <div className="bg-white flex flex-col h-[500px] w-[45%] rounded-xl shadow-xl overflow-hidden relative">
          <img
            src={
              image || "https://via.placeholder.com/400x300.png?text=Product+Preview"
            }
            alt={title || "Product Preview"}
            className="h-[60%] w-full object-cover"
          />
          <div className="p-4 flex flex-col space-y-1">
            <h4 className="text-xl font-semibold text-gray-800 truncate">
              {title || "Product Title"}
            </h4>
            <p className="line-clamp-2 break-words text-gray-600 text-sm">
              {description || "Product description will appear here."}
            </p>
            <p className="text-lg font-bold text-yellow-600">
              {price || "$0.00"}
            </p>
            <span className="text-sm text-white truncate bg-gray-700 absolute top-0 right-0 p-2 rounded-md">
              By {name || "Seller Name"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
