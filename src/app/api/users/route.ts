import { NextResponse } from "next/server";

// Mock user data
const users = [
  { id: 1, name: "Alice Johnson", role: "Admin", avatar: "👩‍💼" },
  { id: 2, name: "Bob Smith", role: "Developer", avatar: "👨‍💻" },
  { id: 3, name: "Charlie Davis", role: "Designer", avatar: "👨‍🎨" },
  { id: 4, name: "Diana Prince", role: "Manager", avatar: "👩‍💼" },
];

export async function GET() {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  
  return NextResponse.json(users);
}

