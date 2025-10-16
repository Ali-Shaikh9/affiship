"use client";

import Loader from "@/components/Loader";
import Sidebar from "@/components/Sidebar";
import { useEffect, useState } from "react";

interface User {
  _id: string;
  name: string;
  email: string;
  imageUrl?: string;
}

export default function Page() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch("http://localhost:3000/api/profile");
        const data = await res.json();
        console.log(data);

        if (data.result && data.result.length > 0) {
          setUser(data.result[0]); // first user
        }
      } catch (err) {
        console.error("Error fetching user:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, []);

  if (loading) return <Loader size={96} />;
  if (!user) return <p>No user found</p>;

  return (
    <>
      <Sidebar imageUrl={user.imageUrl} name={user.name} email={user.email}/>
    </>
  );
}
