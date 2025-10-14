import Image from "next/image";
import { User } from "../types/user";

type ProfileDropdownProps = {
  currentUser: User;
};

export default function ProfileDropdown({ currentUser }: ProfileDropdownProps) {
  return (
    <div className="relative">
      <button
        className="flex items-center gap-2 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        aria-label="User menu"
      >
        <Image 
          src={currentUser.avatar}
          alt={currentUser.name}
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
      </button>
    </div>
  );
}

