import { NextResponse } from "next/server";
import { ROLES } from "@/app/types/role";

// Mock role data - different roles Alice Allspice can act in
const roles = [
  { id: 1, roleName: ROLES.ADMIN, avatar: "https://picsum.photos/200?random=1" },
  { id: 2, roleName: ROLES.ADVISOR, avatar: "https://picsum.photos/200?random=2" },
  { id: 3, roleName: ROLES.ASSISTANT, avatar: "https://picsum.photos/200?random=3" },
];

export async function GET() {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  
  return NextResponse.json(roles);
}

