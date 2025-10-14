"use client";

import Image from "next/image";
import ProfileDropdown from "./components/ProfileDropdown";
import { User } from "./types/user";

export default function Home() {
  // Hard-coded current user
  const currentUser: User = {
    id: 1,
    name: "Alice Allspice",
    role: "admin",
    avatar: "https://picsum.photos/200?random=1"
  };

  fetch("/api/roles")
    .then((res) => res.json())
    .then((data) => {
      console.log("Roles API is Available", data)
    })

  return (
    <div className="font-sans min-h-screen p-8">
      {/* Header with logo and profile */}
      <header className="flex justify-between items-center mb-16">
        <Image
          src="/prelude.png"
          alt="Prelude.ai logo"
          width={150}
          height={32}
          priority
        />
        
        <ProfileDropdown currentUser={currentUser} />
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center mt-32">
        <h1 className="text-4xl font-bold text-center">
          Welcome {currentUser.name} to Prelude.
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-center">
          Current Role: <span className="font-semibold">{currentUser.role}</span>
        </p>
      </main>
    </div>
  );
}
