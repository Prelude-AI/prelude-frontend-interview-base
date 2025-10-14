"use client";

import Image from "next/image";
import ProfileDropdown from "./components/ProfileDropdown";
import { User } from "./types/user";
import { ROLES } from "./types/role";

export default function Home() {
  // Hard-coded current user
  const currentUser: User = {
    id: 1,
    name: "Alice Allspice",
    role: ROLES.ADMIN,
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
      <main className="flex flex-col items-center mt-32">
        <h1 className="text-4xl font-bold text-center">
          Welcome {currentUser.name} to Prelude.
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-center">
          Current Role: <span className="font-semibold">{currentUser.role}</span>
        </p>

        {/* Role-specific sections */}
        <div className="mt-16 w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Admin Section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">Admin</h2>
            <p className="text-gray-700 dark:text-gray-300 flex items-center gap-2">
              <span className="text-2xl">🔒</span>
              Review org security settings
            </p>
          </div>

          {/* Advisor Section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Advisor</h2>
            <p className="text-gray-700 dark:text-gray-300 flex items-center gap-2">
              <span className="text-2xl">🔔</span>
              Review customer notifications
            </p>
          </div>

          {/* Assistant Section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-xl font-semibold mb-4 text-green-600 dark:text-green-400">Assistant</h2>
            <div className="text-gray-700 dark:text-gray-300">
              <p className="font-medium mb-2">Tasks</p>
              <ul className="list-disc list-inside">
                <li>Follow up with Bob Basil</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
